import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

const FluidBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 1. Scene & Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // 2. Simulation Config - PRO TUNING
        const SIM_RES = 512;
        const DISSIPATION = 0.98; // Lingering trails
        const VELOCITY_DISSIPATION = 0.99;
        const CURL_STRENGTH = 20.0; // The "Stabondar" swirling force
        const RADIUS = 0.0025; // Ultra-thin precision

        const getFormat = () => ({
            type: THREE.HalfFloatType,
            format: THREE.RGBAFormat,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter
        });

        let density = { current: new THREE.WebGLRenderTarget(SIM_RES, SIM_RES, getFormat()), prev: new THREE.WebGLRenderTarget(SIM_RES, SIM_RES, getFormat()) };
        let velocity = { current: new THREE.WebGLRenderTarget(SIM_RES, SIM_RES, getFormat()), prev: new THREE.WebGLRenderTarget(SIM_RES, SIM_RES, getFormat()) };
        let curl = new THREE.WebGLRenderTarget(SIM_RES, SIM_RES, getFormat());

        const plane = new THREE.PlaneGeometry(2, 2);

        // 3. Shaders
        const baseVertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `;

        // CURL: Calculates local swirl
        const curlShader = new THREE.ShaderMaterial({
            uniforms: {
                uVelocity: { value: null },
                texelSize: { value: new THREE.Vector2(1.0 / SIM_RES, 1.0 / SIM_RES) }
            },
            vertexShader: baseVertexShader,
            fragmentShader: `
                precision highp float;
                varying vec2 vUv;
                uniform sampler2D uVelocity;
                uniform vec2 texelSize;
                void main() {
                    float L = texture2D(uVelocity, vUv - vec2(texelSize.x, 0.0)).y;
                    float R = texture2D(uVelocity, vUv + vec2(texelSize.x, 0.0)).y;
                    float T = texture2D(uVelocity, vUv + vec2(0.0, texelSize.y)).x;
                    float B = texture2D(uVelocity, vUv - vec2(0.0, texelSize.y)).x;
                    gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
                }
            `
        });

        // VORTICITY: Applies curl as force
        const vorticityShader = new THREE.ShaderMaterial({
            uniforms: {
                uVelocity: { value: null },
                uCurl: { value: null },
                curl: { value: CURL_STRENGTH },
                dt: { value: 0.016 },
                texelSize: { value: new THREE.Vector2(1.0 / SIM_RES, 1.0 / SIM_RES) }
            },
            vertexShader: baseVertexShader,
            fragmentShader: `
                precision highp float;
                varying vec2 vUv;
                uniform sampler2D uVelocity;
                uniform sampler2D uCurl;
                uniform float curl;
                uniform float dt;
                uniform vec2 texelSize;
                void main() {
                    float L = texture2D(uCurl, vUv - vec2(texelSize.x, 0.0)).x;
                    float R = texture2D(uCurl, vUv + vec2(texelSize.x, 0.0)).x;
                    float T = texture2D(uCurl, vUv + vec2(0.0, texelSize.y)).x;
                    float B = texture2D(uCurl, vUv - vec2(0.0, texelSize.y)).x;
                    float C = texture2D(uCurl, vUv).x;
                    vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L));
                    force *= 1.0 / (length(force) + 0.0001) * curl * C;
                    vec2 vel = texture2D(uVelocity, vUv).xy;
                    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
                }
            `
        });

        const splatShader = new THREE.ShaderMaterial({
            uniforms: {
                uTarget: { value: null },
                aspectRatio: { value: window.innerWidth / window.innerHeight },
                color: { value: new THREE.Vector3() },
                point: { value: new THREE.Vector2() },
                radius: { value: RADIUS },
            },
            vertexShader: baseVertexShader,
            fragmentShader: `
                precision highp float;
                varying vec2 vUv;
                uniform sampler2D uTarget;
                uniform float aspectRatio;
                uniform vec3 color;
                uniform vec2 point;
                uniform float radius;
                void main() {
                    vec2 p = vUv - point.xy;
                    p.x *= aspectRatio;
                    vec3 splat = exp(-dot(p, p) / radius) * color;
                    vec3 base = texture2D(uTarget, vUv).xyz;
                    gl_FragColor = vec4(base + splat, 1.0);
                }
            `
        });

        const advectionShader = new THREE.ShaderMaterial({
            uniforms: {
                uVelocity: { value: null },
                uSource: { value: null },
                dt: { value: 0.016 },
                dissipation: { value: DISSIPATION },
                texelSize: { value: new THREE.Vector2(1.0 / SIM_RES, 1.0 / SIM_RES) }
            },
            vertexShader: baseVertexShader,
            fragmentShader: `
                precision highp float;
                varying vec2 vUv;
                uniform sampler2D uVelocity;
                uniform sampler2D uSource;
                uniform vec2 texelSize;
                uniform float dt;
                uniform float dissipation;
                vec4 bilerp(sampler2D sam, vec2 uv, vec2 tsize) {
                    vec2 st = uv / tsize - 0.5;
                    vec2 iuv = floor(st);
                    vec2 fuv = fract(st);
                    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
                    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
                    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
                    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
                    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
                }
                void main() {
                    vec2 coord = vUv - texture2D(uVelocity, vUv).xy * dt;
                    gl_FragColor = bilerp(uSource, coord, texelSize) * dissipation;
                }
            `
        });

        const displayShader = new THREE.ShaderMaterial({
            uniforms: { uDensity: { value: null } },
            vertexShader: baseVertexShader,
            fragmentShader: `
                precision highp float;
                varying vec2 vUv;
                uniform sampler2D uDensity;
                void main() {
                    vec3 dens = texture2D(uDensity, vUv).rgb;
                    float b = length(dens);
                    // Pro Electric Nebula palette (Royal -> Cyan -> Violet)
                    vec3 blueCore = vec3(0.1, 0.4, 1.0);     // Electric Blue
                    vec3 cyanHighlight = vec3(0.0, 0.8, 1.0); // Neon Cyan
                    vec3 violetUndertone = vec3(0.5, 0.2, 1.0); // Subtle Violet
                    
                    vec3 color = dens.r * blueCore;
                    color += pow(dens.r, 2.0) * cyanHighlight;
                    color += pow(dens.r, 3.0) * violetUndertone * 0.5;
                    color += pow(dens.r, 4.0) * vec3(1.0); // Hot White Core
                    
                    float a = smoothstep(0.001, 0.5, b);
                    gl_FragColor = vec4(color, a * 0.7);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        const quad = new THREE.Mesh(plane, advectionShader);
        const simScene = new THREE.Scene();
        simScene.add(quad);

        // 4. Post-Processing Setup
        const renderScene = new THREE.Scene();
        const displayQuad = new THREE.Mesh(plane, displayShader);
        renderScene.add(displayQuad);

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(renderScene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.5, // Strength
            0.3, // Radius
            0.1  // Threshold (low for deep glow)
        );
        composer.addPass(bloomPass);

        // Noise/Grain
        const noiseShader = {
            uniforms: { "tDiffuse": { value: null }, "uTime": { value: 0.0 } },
            vertexShader: baseVertexShader,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform float uTime;
                varying vec2 vUv;
                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
                void main() {
                    vec4 tex = texture2D(tDiffuse, vUv);
                    float noise = (rand(vUv + uTime) - 0.5) * 0.05;
                    gl_FragColor = tex + vec4(vec3(noise), 0.0);
                }
            `
        };
        const noisePass = new ShaderPass(noiseShader);
        composer.addPass(noisePass);

        // Chromatic Aberration
        const chromaticShader = {
            uniforms: {
                "tDiffuse": { value: null },
                "uAmount": { value: 0.003 }
            },
            vertexShader: baseVertexShader,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform float uAmount;
                varying vec2 vUv;
                void main() {
                    vec2 rUv = vUv + vec2(uAmount, 0.0);
                    vec2 bUv = vUv - vec2(uAmount, 0.0);
                    float r = texture2D(tDiffuse, rUv).r;
                    float g = texture2D(tDiffuse, vUv).g;
                    float b = texture2D(tDiffuse, bUv).b;
                    float a = texture2D(tDiffuse, vUv).a;
                    gl_FragColor = vec4(r, g, b, a);
                }
            `
        };
        const chromaticPass = new ShaderPass(chromaticShader);
        composer.addPass(chromaticPass);

        // 5. Interaction
        const mouse = new THREE.Vector2(0.5, 0.5);
        const lastMouse = new THREE.Vector2(0.5, 0.5);
        const targetMouse = new THREE.Vector2(0.5, 0.5);
        let isMoving = false;

        const splat = (x, y, dx, dy) => {
            quad.material = splatShader;
            splatShader.uniforms.uTarget.value = velocity.current.texture;
            splatShader.uniforms.point.value.set(x, y);
            splatShader.uniforms.color.value.set(dx, dy, 1.0).multiplyScalar(15.0); // Stronger physics
            splatShader.uniforms.radius.value = RADIUS;
            renderer.setRenderTarget(velocity.prev);
            renderer.render(simScene, camera);
            [velocity.current, velocity.prev] = [velocity.prev, velocity.current];

            splatShader.uniforms.uTarget.value = density.current.texture;
            splatShader.uniforms.color.value.set(0.8, 0.9, 1.0);
            renderer.setRenderTarget(density.prev);
            renderer.render(simScene, camera);
            [density.current, density.prev] = [density.prev, density.current];
        };

        const onMouseMove = (e) => {
            targetMouse.set(e.clientX / window.innerWidth, 1.0 - e.clientY / window.innerHeight);
            isMoving = true;
        };
        window.addEventListener("mousemove", onMouseMove);

        // 6. Loop
        const clock = new THREE.Clock();
        const animate = () => {
            const dt = Math.min(clock.getDelta(), 0.1);

            // Mouse Inertia
            mouse.lerp(targetMouse, 0.2);
            const dx = (mouse.x - lastMouse.x);
            const dy = (mouse.y - lastMouse.y);

            if (isMoving && (Math.abs(dx) > 0.0001 || Math.abs(dy) > 0.0001)) {
                let dist = Math.sqrt(dx * dx + dy * dy);
                let steps = Math.ceil(dist / 0.001);
                for (let i = 0; i < steps; i++) {
                    let t = i / steps;
                    let x = lastMouse.x + dx * t;
                    let y = lastMouse.y + dy * t;
                    splat(x, y, dx * 10.0, dy * 10.0);
                }
            }
            lastMouse.copy(mouse);

            // 1. Curl Step
            quad.material = curlShader;
            curlShader.uniforms.uVelocity.value = velocity.current.texture;
            renderer.setRenderTarget(curl);
            renderer.render(simScene, camera);

            // 2. Vorticity Confinement
            quad.material = vorticityShader;
            vorticityShader.uniforms.uVelocity.value = velocity.current.texture;
            vorticityShader.uniforms.uCurl.value = curl.texture;
            renderer.setRenderTarget(velocity.prev);
            renderer.render(simScene, camera);
            [velocity.current, velocity.prev] = [velocity.prev, velocity.current];

            // 3. Advection Velocity
            quad.material = advectionShader;
            advectionShader.uniforms.uVelocity.value = velocity.current.texture;
            advectionShader.uniforms.uSource.value = velocity.current.texture;
            advectionShader.uniforms.dissipation.value = VELOCITY_DISSIPATION;
            renderer.setRenderTarget(velocity.prev);
            renderer.render(simScene, camera);
            [velocity.current, velocity.prev] = [velocity.prev, velocity.current];

            // 4. Advection Density
            advectionShader.uniforms.uSource.value = density.current.texture;
            advectionShader.uniforms.dissipation.value = DISSIPATION;
            renderer.setRenderTarget(density.prev);
            renderer.render(simScene, camera);
            [density.current, density.prev] = [density.prev, density.current];

            // 5. Final Display
            displayShader.uniforms.uDensity.value = density.current.texture;
            noisePass.uniforms.uTime.value += dt;
            composer.render();

            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            renderer.setSize(w, h);
            composer.setSize(w, h);
            splatShader.uniforms.aspectRatio.value = w / h;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", handleResize);
            if (container) container.removeChild(renderer.domElement);
            renderer.dispose();
            composer.dispose();
            density.current.dispose(); density.prev.dispose();
            velocity.current.dispose(); velocity.prev.dispose();
            curl.dispose();
        };
    }, []);

    return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" style={{ mixBlendMode: 'screen', opacity: 0.8 }} />;
};

export default FluidBackground;

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-40 px-6 md:px-12 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
                {/* Visual: Technical Blueprint Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2 aspect-square relative group"
                >
                    <div className="absolute inset-0 bg-primary/10 rounded-[64px] blur-3xl group-hover:bg-primary/20 transition-all duration-1000"></div>
                    <div className="relative z-10 w-full h-full glass border-white/[0.08] rounded-[64px] p-12 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                                backgroundSize: '20px 20px'
                            }}></div>
                        <div className="text-center">
                            <div className="text-[12rem] font-black text-white/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">HG</div>
                            <div className="relative">
                                <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase block mb-4">Architecture_Map</span>
                                <div className="w-48 h-1 bg-white/5 rounded-full mx-auto relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content: High-Impact Bio */}
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block underline underline-offset-8">
                            [ IDENTITY ]
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tightest leading-[0.8] mb-12 uppercase">
                            CLOUD & AI <br /> <span className="text-white/10 outline-text">SYSTEMS ENGINEER</span>
                        </h2>
                        <div className="space-y-8 text-xl text-body font-light leading-relaxed max-w-xl">
                            <p>
                                I am <span className="text-white font-medium">Harsh Gupta</span>, a Computer Science student specializing in cloud computing, distributed systems, and intelligent automation.
                            </p>
                            <p>
                                My focus lies in designing <span className="text-white font-medium">scalable backend architectures</span> and integrating AI-driven workflows into modern digital infrastructure.
                            </p>
                            <p>
                                I am driven by the challenge of building systems that are reliable, efficient, and prepared for scale.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-white/5">
                            <div>
                                <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2">Philosophy</div>
                                <div className="text-2xl font-bold text-white tracking-tighter italic">Simplicity is Scalability.</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2">Location</div>
                                <div className="text-2xl font-bold text-white tracking-tighter italic">System_Global</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import MagneticButton from "../components/MagneticButton";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-background text-white relative overflow-hidden pt-32 pb-20 px-6 md:px-12"
        >
            {/* Structured Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: 'clamp(40px, 5vw, 80px) clamp(40px, 5vw, 80px)'
                }}></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header Metadata */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-between items-end border-b border-white/10 pb-6 mb-12"
                >
                    <div className="space-y-1">
                        <div className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Portfolio_Index v3.0</div>
                        <div className="text-[10px] font-black tracking-[0.4em] text-muted uppercase">Cloud & AI Engineering</div>
                    </div>
                    <div className="text-right space-y-1">
                        <div className="text-[10px] font-black tracking-[0.4em] text-muted uppercase">Status // Ready_for_Deployment</div>
                        <div className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic">"Simplicity Enables Scale."</div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
                    {/* Primary Identity - Left 8 Columns */}
                    <div className="lg:col-span-8 flex flex-col justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-6 block">
                                [ CLOUD • SYSTEMS • INTELLIGENCE ]
                            </span>
                            <h1 className="text-[12vw] lg:text-[9rem] font-black leading-[0.85] tracking-tightest premium-gradient drop-shadow-2xl mb-8">
                                HARSH<br />
                                <span className="text-white/10 outline-text uppercase">GUPTA</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-white font-light leading-snug max-w-2xl">
                                Computer Science student specialized in <span className="text-primary font-medium">cloud-native systems</span>, distributed architecture, and intelligent automation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex flex-wrap items-center gap-8 mt-16"
                        >
                            <a
                                href="#projects"
                                className="px-12 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl hover:shadow-primary/40 border-none"
                            >
                                Analyze Prototypes
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="px-12 py-5 bg-transparent border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white hover:text-black transition-all duration-500 shadow-2xl hover:shadow-white/10"
                            >
                                Resume
                            </a>
                            <div className="flex gap-4">
                                <MagneticButton>
                                    <a href="https://github.com" target="_blank" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group">
                                        <FaGithub size={20} className="text-muted group-hover:text-white" />
                                    </a>
                                </MagneticButton>
                                <MagneticButton>
                                    <a href="https://linkedin.com" target="_blank" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group">
                                        <FaLinkedin size={20} className="text-muted group-hover:text-white" />
                                    </a>
                                </MagneticButton>
                                <MagneticButton>
                                    <a href="https://leetcode.com/u/harshhh817/" target="_blank" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group">
                                        <SiLeetcode size={20} className="text-muted group-hover:text-white" />
                                    </a>
                                </MagneticButton>
                            </div>
                        </motion.div>
                    </div>

                    {/* Secondary Context - Right 4 Columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="lg:col-span-4 lg:pl-12 lg:border-l border-white/10 space-y-12 h-full flex flex-col justify-end lg:pb-4"
                    >
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Engineering_Statement</h3>
                            <p className="text-body text-lg font-light leading-loose italic">
                                "I focus on building containerized, cloud-native applications and integrating intelligent workflows into modern backend systems. My engineering approach prioritizes scalability, resilience, and long-term maintainability."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                            <div className="space-y-2">
                                <h3 className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Specialization</h3>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-white uppercase tracking-tighter">Distributed Infrastructure</p>
                                    <p className="text-sm font-bold text-white uppercase tracking-tighter">Autonomous Backend</p>
                                    <p className="text-sm font-bold text-white uppercase tracking-tighter">NLU Systems</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Location_Data</h3>
                                <p className="text-sm font-bold text-white uppercase tracking-tighter">India [ Asia/Kolkata ]</p>
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-2 underline decoration-primary underline-offset-4">Open to Remote_Global</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Ambient Background Accents */}
            <div className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] bg-primary/[0.03] rounded-full blur-[180px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] bg-white/[0.01] rounded-full blur-[200px] pointer-events-none"></div>
        </section>
    );
};

export default Hero;

import { motion } from "framer-motion";

const TechnicalCapabilities = () => {
    return (
        <section id="arsenal" className="pt-20 pb-40 px-6 md:px-12 bg-background relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-end gap-12"
                >
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">
                            [ 02 // TECHNICAL STACK ]
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tightest leading-none">
                            TECHNICAL <br /><span className="text-white/10 outline-text uppercase">CAPABILITIES</span>
                        </h2>
                    </div>
                    <div className="max-w-md border-l border-white/10 pl-8 space-y-4">
                        <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Infrastructure & Cloud</div>
                        <p className="text-lg text-body font-light leading-relaxed italic">
                            "Hands-on experience designing and deploying containerized applications using Docker and Kubernetes, with CI/CD implementation and cloud-native development on AWS."
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cloud & Infrastructure */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass border-white/[0.08] rounded-[48px] p-12 relative group overflow-hidden flex flex-col justify-between h-[500px]"
                >
                    <div>
                        <div className="text-[10px] font-black tracking-[0.4em] text-primary mb-6 uppercase">Cloud & Infrastructure</div>
                        <div className="flex flex-wrap gap-3">
                            {["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"].map((item) => (
                                <span key={item} className="px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-all cursor-crosshair">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-white/5 font-black text-9xl absolute -bottom-8 -right-8 pointer-events-none select-none italic">CLOUD</div>
                </motion.div>

                {/* Machine Learning & Data */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="glass border-white/[0.08] rounded-[48px] p-12 relative group overflow-hidden flex flex-col justify-between h-[500px]"
                >
                    <div>
                        <div className="text-[10px] font-black tracking-[0.4em] text-accent mb-6 uppercase">Machine Learning & Data</div>
                        <div className="flex flex-wrap gap-3">
                            {["PyTorch", "Scikit", "Pandas", "OpenCV"].map((item) => (
                                <span key={item} className="px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-accent hover:text-white transition-all cursor-crosshair">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-white/5 font-black text-9xl absolute -bottom-8 -right-8 pointer-events-none select-none italic">DATA</div>
                </motion.div>

                {/* Automation & Systems */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass border-white/[0.08] rounded-[48px] p-12 relative group overflow-hidden flex flex-col justify-between h-[500px]"
                >
                    <div>
                        <div className="text-[10px] font-black tracking-[0.4em] text-secondary mb-6 uppercase">Automation & Systems</div>
                        <div className="flex flex-wrap gap-3">
                            {["Python", "Selenium", "Cron", "API Integrations"].map((item) => (
                                <span key={item} className="px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-secondary hover:text-white transition-all cursor-crosshair">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-white/5 font-black text-9xl absolute -bottom-8 -right-8 pointer-events-none select-none italic">SYS</div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechnicalCapabilities;

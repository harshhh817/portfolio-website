import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Cloud & DevOps",
        items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Ansible"],
        size: "large",
        icon: "☁️"
    },
    {
        category: "AI & Data",
        items: ["TensorFlow", "PyTorch", "Pandas", "Scikit"],
        size: "medium",
        icon: "🧠"
    },
    {
        category: "Programming",
        items: ["Java", "Python", "JS", "Go"],
        size: "medium",
        icon: "💻"
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "Linux", "JIRA", "Vim"],
        size: "small",
        icon: "🛠️"
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-40 px-6 md:px-12 bg-background relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-end gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">
                            [ TECHNICAL STACK ]
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tightest">
                            THE <span className="text-white/10 outline-text">ARSENAL</span>
                        </h2>
                    </div>
                    <p className="text-lg text-body font-light max-w-sm border-l border-white/10 pl-8">
                        A precision-engineered selection of tools and languages for deploying world-class digital systems.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-8 h-auto md:h-[700px]">
                {/* Core Proficiency - Massive Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-4 md:row-span-2 glass border-white/[0.08] rounded-[48px] p-12 relative group overflow-hidden flex flex-col justify-between"
                >
                    <div className="absolute top-0 right-0 p-12">
                        <div className="w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
                    </div>

                    <div>
                        <div className="text-[10px] font-black tracking-[0.4em] text-primary mb-6 uppercase">01 // CLOUD SYSTEMS</div>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight uppercase">Infrastructure & <br /><span className="text-primary italic">Distribution</span></h3>
                        <p className="text-body text-lg font-light max-w-xl">Designing and deploying containerized applications using Docker and Kubernetes, with hands-on experience in CI/CD and cloud-native development on AWS.</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-12">
                        {["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"].map((item) => (
                            <span key={item} className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-2xl text-xs font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-all cursor-crosshair">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="absolute bottom-0 right-0 p-2 opacity-5 pointer-events-none">
                        <span className="text-[12rem] font-black tracking-tighter leading-none select-none">NODE</span>
                    </div>
                </motion.div>

                {/* AI & Data Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:col-span-2 glass border-white/[0.08] rounded-[48px] p-10 group"
                >
                    <div className="flex justify-between items-start mb-8">
                        <div className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">02 // COGNITION</div>
                        <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">AI Frameworks</h3>
                    <div className="space-y-4">
                        {["PyTorch", "OpenCV", "Scikit", "Pandas"].map((skill) => (
                            <div key={skill} className="flex items-center justify-between border-b border-white/5 pb-2 group/item">
                                <span className="text-body font-bold group-hover/item:text-white transition-colors">{skill}</span>
                                <span className="text-[10px] font-black text-accent opacity-0 group-hover/item:opacity-100 transition-opacity">RUNNING</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Automation & Tools */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="md:col-span-2 bg-primary rounded-[48px] p-10 flex flex-col justify-between group overflow-hidden relative shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                >
                    <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                    <div className="relative z-10">
                        <div className="text-[10px] font-black tracking-[0.4em] text-white/50 mb-6 uppercase">03 // AUTOMATION</div>
                        <h3 className="text-2xl font-black text-white">Advanced<br />Tooling</h3>
                    </div>
                    <div className="relative z-10 text-[6rem] font-black text-white/10 leading-none absolute -bottom-4 -right-4 italic">DEV</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

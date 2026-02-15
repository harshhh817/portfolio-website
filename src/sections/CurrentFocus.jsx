import { motion } from "framer-motion";

const focuses = [
    { title: "AI-assisted trading models", icon: "📈" },
    { title: "Cloud-native microservices", icon: "☁️" },
    { title: "Automation via Python & NLP", icon: "🤖" },
    { title: "Infrastructure monitoring", icon: "📊" },
];

const CurrentFocus = () => {
    return (
        <section id="current-focus" className="py-20 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="glass border-white/[0.08] rounded-[48px] p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-8xl font-black select-none pointer-events-none">
                        FOCUS_01
                    </div>

                    <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8 block">
                            [ CURRENT FOCUS ]
                        </span>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {focuses.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all group"
                                >
                                    <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
                                    <div className="text-white font-medium tracking-tight text-lg">
                                        {f.title}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentFocus;

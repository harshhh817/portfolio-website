import { motion } from "framer-motion";

const focuses = [
    { title: "LSTM-based financial forecasting models", code: "MOD_LST_01" },
    { title: "Cloud-native microservices architecture", code: "INF_ARC_02" },
    { title: "AI-powered workflow automation (NLP-driven)", code: "BOT_NLP_03" },
    { title: "Infrastructure monitoring & optimization", code: "MON_OPT_04" },
];

const CurrentRD = () => {
    return (
        <section id="focus" className="py-40 px-6 md:px-12 relative z-10 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-24"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block underline underline-offset-8">
                        [ 01 // CORE FOCUS ]
                    </span>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tightest leading-none">
                        CURRENT RESEARCH <br />
                        <span className="text-white/10 outline-text">& DEVELOPMENT</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {focuses.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="glass border-white/[0.05] rounded-[32px] p-10 flex items-start gap-8 group hover:border-primary/30 transition-all duration-700"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center group-hover:bg-primary/5 transition-colors duration-500 overflow-hidden relative">
                                <div className="text-[9px] font-black text-primary tracking-widest leading-none rotate-90 opacity-40 absolute -left-2 uppercase select-none">NODE</div>
                                <div className="text-sm font-black text-white tracking-tighter">{f.code.split('_')[0]}</div>
                                <div className="text-[10px] font-bold text-muted mt-1 tracking-widest">{f.code.split('_')[2]}</div>
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] font-black tracking-[0.3em] text-muted mb-4 block uppercase italic">Active_Domain_0{i + 1}</span>
                                <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-primary transition-colors uppercase">
                                    {f.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentRD;

import { motion } from "framer-motion";

const training = [
    {
        title: "AWS Cloud Architecture",
        status: "In Progress",
        description: "Focusing on designing highly available, cost-efficient, and fault-tolerant distributed systems on AWS.",
    },
    {
        title: "Kubernetes Administration",
        status: "In Progress",
        description: "Hands-on preparation for CKA, covering cluster orchestration, resource management, and container security.",
    },
    {
        title: "Distributed Systems Design",
        status: "Academic Focus",
        description: "Deep-diving into consensus algorithms, replication strategies, and consistency models in large-scale systems.",
    },
];

const EducationTrack = () => {
    return (
        <section id="education" className="py-40 px-6 md:px-12 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
                <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block underline underline-offset-8">
                        [ 04 // DEVELOPMENT ]
                    </span>
                    <h2 className="text-6xl font-black text-white tracking-tightest leading-none mb-12">
                        EDUCATION & <br /> <span className="text-white/10 outline-text uppercase">CERTIFICATION TRACK</span>
                    </h2>
                    <p className="text-body text-xl font-light leading-relaxed max-w-sm border-l border-white/10 pl-8 italic">
                        "Actively pursuing structured coursework and professional certifications in cloud-native engineering."
                    </p>
                </div>

                <div className="lg:w-2/3 space-y-8">
                    {training.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass border-white/[0.08] p-10 rounded-[42px] group hover:border-primary/50 transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-10 text-primary/5 font-black text-5xl tracking-widest uppercase italic group-hover:text-primary/10 transition-colors">
                                Track_0{index + 1}
                            </div>

                            <div className="relative z-10">
                                <span className="text-[10px] font-black tracking-[0.3em] text-primary mb-6 block uppercase bg-primary/10 w-fit px-4 py-1 rounded-full">
                                    {item.status}
                                </span>
                                <h3 className="text-3xl font-black text-white mb-4 leading-tight group-hover:text-primary transition-colors uppercase">
                                    {item.title}
                                </h3>
                                <p className="text-body text-lg font-light leading-relaxed max-w-xl">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none"></div>
        </section>
    );
};

export default EducationTrack;

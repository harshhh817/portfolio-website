import { motion } from "framer-motion";

const certifications = [
    {
        title: "AWS Cloud Architecture",
        issuer: "In Progress",
        date: "2024",
        description: "Advanced study of scalable infrastructure, VPC networking, and cloud-native security models.",
    },
    {
        title: "Kubernetes Administration",
        issuer: "In Progress",
        date: "2024",
        description: "Focusing on container orchestration, cluster management, and production-grade deployments.",
    },
    {
        title: "Distributed Systems Design",
        issuer: "Academic Focus",
        date: "Ongoing",
        description: "Structuring highly available backends and idempotent communication protocols.",
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-40 px-6 md:px-12 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
                {/* Left Side: Sticky Title */}
                <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block underline underline-offset-8">
                        [ ACADEMIC FOCUS ]
                    </span>
                    <h2 className="text-6xl font-black text-white tracking-tightest leading-[0.8]">
                        STRUCTURED <br /> <span className="text-white/10 outline-text">CREDENTIALS</span>
                    </h2>
                    <p className="mt-12 text-body text-lg font-light leading-relaxed max-w-sm">
                        Currently pursuing advanced certifications and structured coursework in distributed systems and cloud architecture.
                    </p>
                </div>

                {/* Right Side: High-End Cards */}
                <div className="lg:w-2/3 space-y-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass border-white/[0.08] p-10 rounded-[32px] group hover:border-primary/50 transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-10 text-primary/5 font-black text-5xl tracking-widest uppercase italic group-hover:text-primary/10 transition-colors">
                                Valid_0{index + 1}
                            </div>

                            <div className="relative z-10">
                                <span className="text-[10px] font-black tracking-[0.3em] text-primary mb-4 block uppercase bg-primary/10 w-fit px-4 py-1 rounded-full">
                                    {cert.date}
                                </span>
                                <h3 className="text-3xl font-black text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="text-muted text-sm font-black uppercase tracking-widest mb-6 opacity-60">
                                    Issuer: {cert.issuer}
                                </div>
                                <p className="text-body text-lg font-light leading-relaxed max-w-xl">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
        </section>
    );
};

export default Certifications;

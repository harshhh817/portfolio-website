import { motion } from "framer-motion";

const certifications = [
    {
        id: "aws-ccp",
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        status: "earned",
        badgeUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
        verifyUrl: "https://www.credly.com/badges/your-badge-id", // ← replace with your Credly link
        description: "Validates foundational understanding of AWS Cloud services, core infrastructure, billing, security, and cloud architecture concepts.",
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

                {/* Right Side: Cards */}
                <div className="lg:w-2/3 space-y-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass border-white/[0.08] p-10 rounded-[32px] group hover:border-primary/50 transition-all duration-700 relative overflow-hidden"
                        >
                            {/* Watermark index */}
                            <div className="absolute top-0 right-0 p-10 text-primary/5 font-black text-5xl tracking-widest uppercase italic group-hover:text-primary/10 transition-colors select-none">
                                Valid_0{index + 1}
                            </div>

                            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">

                                {/* AWS Badge (only for earned certs) */}
                                {cert.status === "earned" && (
                                    <div className="flex-shrink-0">
                                        <div className="relative w-20 h-20">
                                            <div className="absolute inset-0 bg-[#FF9900]/20 rounded-full blur-xl scale-75 group-hover:scale-110 transition-transform duration-700" />
                                            <motion.img
                                                src={cert.badgeUrl}
                                                alt={`${cert.title} badge`}
                                                className="relative z-10 w-20 h-20 object-contain drop-shadow-xl"
                                                whileHover={{ scale: 1.1, rotate: 4 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Text content */}
                                <div className="flex-1 min-w-0">
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

                                    {/* Verify button — only for earned certs */}
                                    {cert.status === "earned" && (
                                        <a
                                            href={cert.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF9900] hover:bg-[#e68a00] text-black font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#FF9900]/25 hover:shadow-[#FF9900]/50 hover:scale-105 active:scale-95"
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                            <span>Verify Badge</span>
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
};

export default Certifications;

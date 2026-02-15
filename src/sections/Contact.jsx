import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    return (
        <section id="contact" className="py-40 px-6 md:px-12 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block underline underline-offset-8">
                        [ 05 // CONNECT ]
                    </span>
                    <h2 className="text-7xl md:text-9xl font-black text-white tracking-tightest leading-none mb-12">
                        LET'S <br /> <span className="text-white/10 outline-text uppercase">BUILD</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-body font-light max-w-lg leading-relaxed mb-16 italic">
                        "Currently seeking <span className="text-white font-medium">Cloud/DevOps internships</span>, AI & Distributed Systems research opportunities, and backend engineering roles."
                    </p>

                    <div className="space-y-12">
                        <div className="group cursor-pointer">
                            <div className="text-[10px] font-black text-muted uppercase tracking-[0.3em] mb-2">Direct_Channel</div>
                            <div className="flex items-center gap-4 text-2xl font-black text-white group-hover:text-primary transition-colors">
                                <HiOutlineMail className="text-primary" />
                                <span>hello@harshgupta.com</span>
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <a href="#" className="flex flex-col gap-2 group">
                                <span className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Codebase</span>
                                <div className="flex items-center gap-2 text-white font-black group-hover:text-primary transition-all">
                                    <FaGithub /> GitHub _
                                </div>
                            </a>
                            <a href="#" className="flex flex-col gap-2 group">
                                <span className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Professional</span>
                                <div className="flex items-center gap-2 text-white font-black group-hover:text-primary transition-all">
                                    <FaLinkedin /> LinkedIn _
                                </div>
                            </a>
                            <a href="https://leetcode.com/u/harshhh817/" target="_blank" className="flex flex-col gap-2 group">
                                <span className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Competitive</span>
                                <div className="flex items-center gap-2 text-white font-black group-hover:text-primary transition-all">
                                    <SiLeetcode /> LeetCode _
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2"
                >
                    <div className="glass border-white/[0.08] p-12 rounded-[48px] relative overflow-hidden">
                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-muted uppercase tracking-widest pl-2">Identification</label>
                                    <input type="text" placeholder="FULL NAME" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-muted uppercase tracking-widest pl-2">Channel</label>
                                    <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-white/10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-muted uppercase tracking-widest pl-2">Request_Payload</label>
                                <textarea rows="4" placeholder="BRIEF PROJECT OVERVIEW OR INQUIRY" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-white/10 resize-none"></textarea>
                            </div>
                            <button className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-xs rounded-2xl hover:bg-primary hover:text-white transition-all duration-500 shadow-xl group overflow-hidden relative">
                                <span className="relative z-10">Push to Production //</span>
                                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

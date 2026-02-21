import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "01. Focus", href: "#focus" },
        { name: "02. Arsenal", href: "#arsenal" },
        { name: "03. Prototypes", href: "#projects" },
        { name: "04. Credentials", href: "#certifications" },
        { name: "05. Connect", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 ${isScrolled ? "py-4" : "py-8"
                    }`}
            >
                <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-500 px-8 ${isScrolled ? "glass border-white/10 py-3 shadow-2xl" : "bg-transparent py-4"
                    }`}>
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-white group-hover:rotate-[360deg] transition-transform duration-700">
                            HG
                        </div>
                        <span className="font-black tracking-widest text-white text-sm hidden sm:block uppercase">Harsh Gupta</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-primary transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Action */}
                    <div className="flex items-center gap-6">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="hidden md:block px-8 py-3 bg-white/[0.03] border border-white/10 rounded-full text-[10px] font-black tracking-widest uppercase text-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-xl"
                        >
                            Resume
                        </a>
                        <button
                            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-all"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <HiMenuAlt3 size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-background flex flex-col p-12 lg:hidden"
                    >
                        <div className="flex justify-between items-center mb-24">
                            <span className="font-black tracking-widest text-primary uppercase">Menu_Navigation</span>
                            <button
                                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <HiX size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl sm:text-6xl font-black text-white hover:text-primary transition-all uppercase tracking-tighter"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name.split(". ")[1]}
                                </a>
                            ))}
                        </div>
                        <div className="mt-auto flex flex-col gap-8">
                            <a
                                href="/resume.pdf"
                                className="w-full py-6 bg-primary rounded-3xl text-center font-black uppercase tracking-widest text-white"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

import { motion } from "framer-motion";
import { FaAws, FaDocker, FaPython, FaJava } from "react-icons/fa";
import { SiGooglecloud, SiTerraform, SiKubernetes } from "react-icons/si";

const icons = [
    { Component: FaAws, color: "text-primary", top: "15%", left: "5%", delay: 0 },
    { Component: FaDocker, color: "text-secondary", top: "25%", right: "10%", delay: 1 },
    { Component: FaPython, color: "text-primary", top: "60%", left: "10%", delay: 2 },
    { Component: FaJava, color: "text-secondary", bottom: "15%", right: "5%", delay: 3 },
    { Component: SiKubernetes, color: "text-primary", bottom: "30%", left: "5%", delay: 4 },
    { Component: SiTerraform, color: "text-secondary", top: "45%", right: "8%", delay: 1.5 },
];

const FloatingIcons = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map(({ Component, color, top, left, right, bottom, delay }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        y: [0, -40, -80],
                        x: [0, 20, 0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: delay,
                        ease: "linear",
                    }}
                    className={`absolute text-4xl md:text-6xl ${color} opacity-20`}
                    style={{ top, left, right, bottom }}
                >
                    <Component />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingIcons;

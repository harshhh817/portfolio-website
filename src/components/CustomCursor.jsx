import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target;
            setIsHovering(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a")
            );
        };

        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/30 pointer-events-none z-[100] hidden md:block"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isHovering ? 1.8 : 1,
                    backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "transparent",
                    borderColor: isHovering ? "rgba(34, 211, 238, 0.5)" : "rgba(59, 130, 246, 0.2)",
                    boxShadow: isHovering ? "0 0 40px rgba(59, 130, 246, 0.2)" : "none",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.2 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[100] hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                animate={{
                    x: position.x - 3,
                    y: position.y - 3,
                }}
                transition={{ type: "spring", stiffness: 800, damping: 30, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;

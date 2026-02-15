import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "AI-BASED STOCK ANALYZER",
        desc: "Developed an LSTM-based forecasting model integrating financial news sentiment analysis to enhance short-term stock trend prediction accuracy.",
        tech: ["Python", "TensorFlow", "React", "FastAPI"],
        github: "#",
        live: "#"
    },
    {
        title: "AWS MICROSERVICES ARCHITECTURE",
        desc: "Designed and deployed a scalable microservices backend using AWS services and Kubernetes, implementing containerized CI/CD pipelines for automated deployment.",
        tech: ["AWS Lambda", "Docker", "Kubernetes", "Node.js"],
        github: "#",
        live: "#"
    },
    {
        title: "INTERNSHIP AUTO RESUME BUILDER",
        desc: "Built an NLP-driven resume optimization engine leveraging OpenAI API to dynamically align user profiles with job descriptions.",
        tech: ["Next.js", "OpenAI API", "TailwindCSS", "PostgreSQL"],
        github: "#",
        live: "#"
    },
    {
        title: "AUTOMATION ENGINE",
        desc: "Engineered asynchronous Python-based automation scripts for large-scale data extraction, processing, and cross-platform synchronization.",
        tech: ["Python", "Selenium", "BeautifulSoup"],
        github: "#",
        live: "#"
    },
    {
        title: "HOSTEL MANAGEMENT SYSTEM",
        desc: "Developed a full-stack accommodation management platform using Spring Boot and React, with optimized database indexing for billing and resident tracking.",
        tech: ["Java", "Spring Boot", "MySQL", "React"],
        github: "#",
        live: "#"
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative"
        >
            <div className="glass border-white/[0.08] rounded-[32px] p-8 flex flex-col transition-all duration-700 hover:border-primary/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-7xl font-black group-hover:opacity-10 transition-opacity">
                    0{index + 1}
                </div>

                <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(t => (
                            <span key={t} className="text-[9px] font-black tracking-widest uppercase text-primary/60 bg-primary/5 px-2 py-1 rounded-md">{t}</span>
                        ))}
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors uppercase">
                        {project.title}
                    </h3>

                    <p className="text-body text-base font-light leading-relaxed mb-8 max-w-[95%]">
                        {project.desc}
                    </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex gap-4">
                        <a href={project.github} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                            <FaGithub size={20} />
                        </a>
                        <a href={project.live} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                </div>

                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: useTransform(
                            [mouseXSpring, mouseYSpring],
                            ([lx, ly]) => `radial-gradient(600px circle at ${lx * 100 + 50}% ${ly * 100 + 50}%, rgba(59, 130, 246, 0.08), transparent 40%)`
                        )
                    }}
                />
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-32"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block underline underline-offset-8">
                        [ 03 // SELECTED WORKS ]
                    </span>
                    <h2 className="text-6xl md:text-9xl font-black text-white tracking-tightest leading-none">
                        FEATURED <br /><span className="text-white/10 outline-text uppercase">PROTOTYPES</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start focus-within:z-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${index % 2 !== 0 ? "lg:translate-y-24" : ""} h-fit`}
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[50%] left-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default Projects;

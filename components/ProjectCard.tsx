"use client";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    github: string;
    demo: string;
    tech: string[];
}

export default function ProjectCard({ title, description, github, demo, tech}: Project) {
    return (
        <motion.div 
            className="p-6 bg-white shadow-md rounded-xl hover: shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-grey-600 mb-3">{description}</p>
            <div>
                {tech.map((t) => (
                    <span key={t} className="bg-grey-200 text-sm px-2 py-1 rounded-md">
                        {t}
                    </span>
                ))}
            </div>
            <div className="flex gap-4 text-blue-600">
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
        </motion.div>
    );
}
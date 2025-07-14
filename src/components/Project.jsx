import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const Project = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center my-20"
                >
                    <h1 className="text-6xl font-thin mb-4 tracking-wider">
                        My
                        <span className="ml-4 text-neutral-500">Projects</span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            variants={cardVariants}
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-transparent backdrop-blur-[2px]"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={project.image}
                                    className="w-full h-full object-cover"
                                    alt={project.title}
                                />
                            </div>

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-4">
                                            {project.title}
                                        </h2>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800/50 text-neutral-300 backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-white hover:text-green-400 transition-colors duration-200"
                                    >
                                        <span className="font-medium">View Project</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-3 h-3 border-t-2 border-r-2 border-green-400"></div>
                            </div>
                            <div className="absolute bottom-4 left-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-3 h-3 border-b-2 border-l-2 border-green-400"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Project;

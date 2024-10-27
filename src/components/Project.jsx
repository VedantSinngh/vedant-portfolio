import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Project = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h1 className="mb-16 text-center text-4xl font-bold text-white">Projects</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <div 
                            key={index} 
                            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-transparent backdrop-blur-[2px]"
                        >
                            {/* Project Image */}
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={project.image}
                                    className="w-full h-full object-cover"
                                    alt={project.title}
                                />
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-4">{project.title}</h2>
                                        
                                        {/* Technologies */}
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
                                    
                                    {/* View Project Link */}
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
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-3 h-3 border-t-2 border-r-2 border-green-400"></div>
                            </div>
                            <div className="absolute bottom-4 left-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-3 h-3 border-b-2 border-l-2 border-green-400"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
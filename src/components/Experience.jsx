import React from 'react';
import { SiJavascript, SiReact, SiNextdotjs, SiMongodb, SiPython } from 'react-icons/si';
import HTB from '../assets/logo.png';
import AWS from '../assets/projects/amazon_web_services_logo.jpeg';
import DRDO from "../assets/projects/DRDO.jpeg"; // Add the DRDO logo image path
import { motion } from 'framer-motion';

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
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


const ExperienceCard = ({ role, company, duration, description, technologies, image }) => {
    return (
        <div className="group relative p-4 rounded-xl border border-white/[0.08] hover:border-white/[0.12] transition-all duration-500 max-w-xs mx-auto"> {/* Reduced padding and added max width */}
            {/* Company Logo/Image */}
            <div className="absolute -top-8 left-8">
                <div className="w-16 h-16 rounded-xl bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                    <img src={image} alt={`${company} logo`} className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Content */}
            <div className="mt-10"> {/* Adjusted margin-top to center logo and content */}
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-semibold text-white/90 mb-1">{role}</h3> {/* Reduced font size */}
                        <p className="text-white/60 font-medium text-sm">{company}</p> {/* Reduced font size */}
                    </div>
                    <span className="text-xs text-white/40 font-medium">{duration}</span> {/* Reduced font size */}
                </div>

                <p className="text-white/60 text-xs leading-relaxed mb-4"> {/* Reduced font size */}
                    {description}
                </p>

                <div className="flex flex-wrap gap-1"> {/* Reduced gap between technology badges */}
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-1 px-2 py-1 rounded-full 
                        border border-white/[0.08] bg-white/[0.02]
                    group-hover:border-white/[0.12] transition-all duration-300"
                        >
                            <tech.icon className="w-3 h-3" style={{ color: tech.color }} /> {/* Reduced icon size */}
                            <span className="text-xs font-medium text-white/60">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            role: "Lead",
            company: "Hack The Box SRMIST",
            duration: "2024 - Present",
            description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
            technologies: [
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "React.js", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            ],
            image: HTB,
        },
        {
            role: "Intern",
            company: "AWS-(AICTE)",
            duration: "2023",
            description: "Contributed in the fields of AI & ML (Virtual Intership)",
            technologies: [
                { name: "Python", icon: SiPython, color: "#F7DF1E" },
            ],
            image: AWS,
        },
        {
            role: "Intern",
            company: "SAG-DRDO",
            duration: "May2025 - Present",
            description: "Contributing to AI and Quantum ML research using Python and Qiskit.",
            technologies: [
                { name: "Python", icon: SiPython, color: "#F7DF1E" },
            ],
            image: DRDO,
        },
        // Add more experiences as needed
    ];

    return (
        <section className="relative py-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center my-20"
                >
                    <h1 className="text-6xl font-thin mb-4 tracking-wider">
                        My
                        <span className="ml-4 text-neutral-500">Experience</span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full" />
                </motion.div>

                {/* Conditional layout for Experience Cards */}
                <div className={`grid ${experiences.length === 1 ? 'flex justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

import React, { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiPython,
    SiCplusplus,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiFlask,
    SiSqlite
} from 'react-icons/si';

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

const TechnologyCard = ({ Icon, name, description, colors }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group overflow-hidden rounded-2xl 
            backdrop-blur-lg bg-white/5 border border-white/10 
            transition-all duration-500 ease-in-out transform 
            hover:scale-105 hover:border-white/20 
            hover:shadow-2xl cursor-pointer p-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glowing background effect */}
            <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${colors.primary}20, transparent 40%)`,
                }}
            />

            <div className="relative z-10 flex flex-col items-center">
                <div
                    className="mb-4 p-4 rounded-full transition-all duration-300"
                    style={{
                        backgroundColor: colors.primary + '20',
                        transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)'
                    }}
                >
                    <Icon
                        className="w-10 h-10 transition-all duration-300"
                        style={{
                            color: colors.primary,
                            transform: isHovered ? 'scale(1.2)' : 'scale(1)'
                        }}
                    />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 
                    transition-all duration-300 
                    group-hover:text-opacity-100 
                    text-opacity-70">
                    {name}
                </h3>

                {isHovered && (
                    <div className="mt-4 text-center text-white/70 
                        text-sm opacity-0 translate-y-4 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-500 ease-in-out">
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
};

const Technologies = () => {
    const technologies = [
        {
            Icon: SiHtml5,
            name: 'HTML5',
            colors: { primary: '#E34F26', secondary: '#F06529' },
            description: 'Semantic markup, accessibility'
        },
        {
            Icon: SiCss3,
            name: 'CSS3',
            colors: { primary: '#264DE4', secondary: '#2965F1' },
            description: 'Animations, Flexbox, Grid'
        },
        {
            Icon: SiJavascript,
            name: 'JavaScript',
            colors: { primary: '#F7DF1E', secondary: '#F0DB4F' },
            description: 'ES6+, async/await, DOM'
        },
        {
            Icon: RiReactjsLine,
            name: 'React',
            colors: { primary: '#61DAFB', secondary: '#00D8FF' },
            description: 'Hooks, Redux, Next.js'
        },
        {
            Icon: SiTailwindcss,
            name: 'Tailwind',
            colors: { primary: '#06B6D4', secondary: '#38BDF8' },
            description: 'Utility-first CSS framework'
        },
        {
            Icon: SiPython,
            name: 'Python',
            colors: { primary: '#3776AB', secondary: '#FFD43B' },
            description: 'Flask, scripting, OOP'
        },
        {
            Icon: SiFlask,
            name: 'Flask',
            colors: { primary: '#000000', secondary: '#FFFFFF' },
            description: 'Lightweight Python backend'
        },
        {
            Icon: SiCplusplus,
            name: 'C++',
            colors: { primary: '#00599C', secondary: '#004482' },
            description: 'DSA, OOP principles'
        },
        {
            Icon: SiMongodb,
            name: 'MongoDB',
            colors: { primary: '#47A248', secondary: '#4DB33D' },
            description: 'NoSQL, Aggregation'
        },
        {
            Icon: SiSqlite,
            name: 'SQLite',
            colors: { primary: '#003B57', secondary: '#4DB6AC' },
            description: 'Lightweight SQL DB'
        },
        {
            Icon: SiNodedotjs,
            name: 'Node.js',
            colors: { primary: '#339933', secondary: '#3C873A' },
            description: 'Backend, REST APIs'
        },
        {
            Icon: SiExpress,
            name: 'Express',
            colors: { primary: '#000000', secondary: '#303030' },
            description: 'Minimal Node.js framework'
        }
    ];


    // Mouse movement tracking effect
    React.useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.group');

            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center my-20"
                    >
                        <h1 className="text-6xl font-thin mb-4 tracking-wider">
                            Tech
                            <span className="ml-4 text-neutral-500">Stack</span>
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech) => (
                        <TechnologyCard
                            key={tech.name}
                            {...tech}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;

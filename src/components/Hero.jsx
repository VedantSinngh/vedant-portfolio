import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import { SomeIcon } from 'lucide-react';

import profilePic from "../assets/Vedant Singh.jpeg";

const fadeIn = (delay) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, delay, ease: "easeOut" }
    }
});

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Gradient - Make it transparent */}
            <div className="absolute inset-0 bg-transparent" />

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.h1
                            variants={fadeIn(0.2)}
                            className="text-6xl lg:text-8xl font-thin tracking-tight text-white mb-6"
                        >
                            Vedant Singh
                        </motion.h1>

                        <motion.div
                            variants={fadeIn(0.4)}
                            className="relative inline-block mb-8"
                        >
                            <span className="text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-transparent">
                                Full Stack Developer
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                        </motion.div>

                        <motion.div
                            variants={fadeIn(0.6)}
                            className="mt-8"
                        >
                            <a
                                href="https://drive.google.com/file/d/1Y5PwyqOncjMwCh5_OGaPaYzbegVu0z7X/view?usp=sharing"
                                target='_blank'
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-6 py-3 bg-white/10 
                backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300
                border border-white/20 hover:border-white/40"
                            >
                                <span className="text-white font-medium">View Resume</span>
                                <ArrowDownCircle className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex-1 relative"
                    >
                        <div className="relative group">
                            {/* Main Image */}
                            <div className="relative w-80 h-96 lg:w-[700px] lg:h-[550px] rounded-2xl overflow-hidden">
                                <img
                                    src={profilePic}
                                    alt="Profile"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-purple-500/30 rounded-tr-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-pink-500/30 rounded-bl-2xl" />

                            {/* Glowing Orb */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

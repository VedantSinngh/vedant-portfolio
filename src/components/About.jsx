import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

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

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="max-w-7xl mx-auto px-4"
            >
                {/* Title Section */}
                <motion.div variants={item} className="flex flex-col items-center my-20">
                    <h1 className='text-6xl font-thin mb-4 tracking-wider'>
                        About
                        <span className='ml-4 text-neutral-500'>
                            Me
                        </span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full" />
                </motion.div>

                {/* Side by Side Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh] my-12">
                    {/* Left Side - Laptop Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative perspective-1000">
                            {/* Laptop Frame */}
                            <div className="bg-neutral-800 rounded-t-2xl p-4 shadow-2xl border border-neutral-700">
                                {/* Screen Content */}
                                <div className="relative aspect-video rounded-lg bg-neutral-900 overflow-hidden">
                                    {/* Screen Controls */}
                                    <div className="absolute top-4 left-4 flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>

                                    {/* Code Editor Style Content */}
                                    <div className="mt-12 p-6 font-mono text-sm">
                                        <div className="space-y-4">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="flex items-center space-x-2"
                                            >
                                                <span className="text-pink-400">&lt;</span>
                                                <span className="text-purple-400">div</span>
                                                <span className="text-pink-400">&gt;</span>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="pl-6 flex flex-col space-y-2"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6 }}
                                                    className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
                                                >
                                                    Vedant Singh
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.8 }}
                                                    className="text-lg text-gray-400"
                                                >
                                                    Dev <span className="text-pink-400">+</span> ML (Learning)
                                                </motion.div>

                                                {/* <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 1 }}
                                                    className="mt-4 flex space-x-2"
                                                >
                                                    {['React', 'Node.js', 'Python', 'AI/ML'].map((tech, i) => (
                                                        <motion.span
                                                            key={tech}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 1.2 + i * 0.1 }}
                                                            className="px-2 py-1 rounded-md text-xs bg-neutral-800/50 text-gray-300 border border-neutral-700/50"
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </motion.div> */}
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.6 }}
                                                className="flex items-center space-x-2"
                                            >
                                                <span className="text-pink-400">&lt;/</span>
                                                <span className="text-purple-400">div</span>
                                                <span className="text-pink-400">&gt;</span>
                                            </motion.div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Laptop Base */}
                            <div className="h-4 bg-neutral-800 rounded-b-lg mx-auto w-[95%] shadow-2xl"></div>
                            <div className="h-1 bg-neutral-700 rounded-b-lg mx-auto w-[90%]"></div>
                        </div>

                        {/* Decorative Elements */}
                        <motion.div
                            className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                        />
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        variants={item}
                        className="space-y-8 backdrop-blur-sm bg-neutral-900/30 rounded-2xl p-8 shadow-2xl border border-neutral-800"
                    >
                        <p className="text-xl leading-relaxed text-gray-300 font-light">
                            <motion.span variants={item} className="block mb-8">
                                <span className="text-3xl font-normal bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                                    I am a passionate Full Stack Developer
                                </span>
                            </motion.span>

                            <motion.span variants={item} className="block mb-8">
                                Currently pursuing my{" "}
                                <span className="text-white font-medium">Bachelor's degree in Computer Science and Engineering</span>{" "}
                                with a specialization in{" "}
                                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-medium">
                                    Artificial Intelligence and Machine Learning
                                </span>{" "}
                                at{" "}
                                <span className="text-white font-medium">SRM Institute of Science and Technology</span>.
                            </motion.span>

                            <motion.div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="backdrop-blur-md bg-neutral-800/30 p-4 rounded-xl border border-neutral-700/50">
                                    <span className="text-2xl font-semibold bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
                                        93.2%
                                    </span>
                                    <p className="text-gray-400 mt-2 text-sm">12th Grade at DAV</p>
                                </div>
                                <div className="backdrop-blur-md bg-neutral-800/30 p-4 rounded-xl border border-neutral-700/50">
                                    <span className="text-2xl font-semibold bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
                                        9.00 CGPA
                                    </span>
                                    <p className="text-gray-400 mt-2 text-sm">Current Grade at SRMIST</p>
                                </div>
                            </motion.div>

                            <motion.span variants={item} className="block text-2xl font-normal">
                                My goal is to create{" "}
                                <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent font-medium">
                                    innovative solutions
                                </span>{" "}
                                that drive business growth and deliver exceptional user experiences.
                            </motion.span>
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default About;
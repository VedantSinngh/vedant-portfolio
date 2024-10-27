import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';

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
                className="max-w-6xl mx-auto px-4"
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

                <div className="flex justify-center items-center min-h-[60vh]">
                    <motion.div 
                        variants={item}
                        className="max-w-3xl mx-auto text-center px-4"
                    >
                        <div className="relative">
                            {/* Decorative Element - Top */}
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                            >
                                <div className="w-12 h-1 bg-gradient-to-r from-pink-300 to-purple-500 rounded-full" />
                            </motion.div>

                            <motion.div 
                                variants={item}
                                className="space-y-8 backdrop-blur-sm bg-neutral-900/30 rounded-2xl p-8 shadow-2xl border border-neutral-800"
                            >
                                <p className="text-xl leading-relaxed text-gray-300 font-light">
                                    <motion.span 
                                        variants={item}
                                        className="block mb-8"
                                    >
                                        <span className="text-3xl font-normal bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                                            I am a passionate full stack developer
                                        </span>
                                    </motion.span>

                                    <motion.span 
                                        variants={item}
                                        className="block mb-8"
                                    >
                                        Currently pursuing my{" "}
                                        <span className="text-white font-medium">Bachelor's degree in Computer Science and Engineering</span>{" "}
                                        with a specialization in{" "}
                                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-medium">
                                            Artificial Intelligence and Machine Learning
                                        </span>{" "}
                                        at{" "}
                                        <span className="text-white font-medium">SRM Institute of Science and Technology</span>.
                                    </motion.span>

                                    <motion.span 
                                        variants={item}
                                        className="block mb-8"
                                    >
                                        Completed my schooling at DAV with an outstanding{" "}
                                        <span className="text-2xl font-semibold bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
                                            93.2%
                                        </span>{" "}
                                        in 12th grade.
                                    </motion.span>


                                    <motion.span 
                                        variants={item}
                                        className="block mb-8"
                                    >
                                        My current Grade is {" "}
                                        <span className="text-2xl font-semibold bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
                                            9.00 CGPA
                                        </span>{" "}
                                        at SRMIST
                                    </motion.span>

                                    <motion.span 
                                        variants={item}
                                        className="block text-2xl font-normal"
                                    >
                                        My goal is to create{" "}
                                        <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent font-medium">
                                            innovative solutions
                                        </span>{" "}
                                        that drive business growth and deliver exceptional user experiences.
                                    </motion.span>
                                </p>

                                {/* Decorative dots */}
                                <motion.div className="flex justify-center space-x-2 mt-8">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 15,
                                                delay: i * 0.1 + 1,
                                            }}
                                            className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
                                        />
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Decorative Element - Bottom */}
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                            >
                                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-300 rounded-full" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default About;
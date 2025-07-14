import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
    return (
        <footer className="py-12 relative backdrop-blur-sm bg-neutral-900/20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-neutral-200">Vedant Singh</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                            Exploring Endless Possibilities. Building innovative solutions through code.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4 pt-2">
                            <a href="https://github.com/VedantSinngh" 
                               className="text-neutral-400 hover:text-cyan-300 transition-colors duration-300">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/vedaantsinngh" 
                               className="text-neutral-400 hover:text-cyan-300 transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://twitter.com/yourusername" 
                               className="text-neutral-400 hover:text-cyan-300 transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Portfolio Highlights */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-neutral-200">Portfolio Highlights</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-neutral-800/30 rounded-lg">
                                <div className="text-2xl font-bold text-cyan-300">2+</div>
                                <div className="text-sm text-neutral-400">Years Experience</div>
                            </div>
                            <div className="text-center p-3 bg-neutral-800/30 rounded-lg">
                                <div className="text-2xl font-bold text-cyan-300">15+</div>
                                <div className="text-sm text-neutral-400">Projects</div>
                            </div>
                            <div className="text-center p-3 bg-neutral-800/30 rounded-lg">
                                <div className="text-2xl font-bold text-cyan-300">10+</div>
                                <div className="text-sm text-neutral-400">Technologies</div>
                            </div>
                            <div className="text-center p-3 bg-neutral-800/30 rounded-lg">
                                <div className="text-2xl font-bold text-cyan-300">100%</div>
                                <div className="text-sm text-neutral-400">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-neutral-800 mt-8 pt-8">
                    <p className="text-center text-sm text-neutral-400">
                        © {new Date().getFullYear()} Vedant Singh. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

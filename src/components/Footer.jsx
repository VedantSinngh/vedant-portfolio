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
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Exploring Endless Possibilities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-neutral-200">Quick Links</h3>
                        <ul className="space-y-2 text-neutral-400">
                            <li>
                                <a href="#about" className="hover:text-cyan-300 transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-cyan-300 transition-colors duration-300">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#technologies" className="hover:text-cyan-300 transition-colors duration-300">
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="hover:text-cyan-300 transition-colors duration-300">
                                    Experience
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
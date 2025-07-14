import React from 'react';
import logo from '../assets/VS.png';
import leetcodeLogo from '../assets/leetcode.png'; // 👈 Add LeetCode image here
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-3 w-12' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a 
                    href="https://github.com/VedantSinngh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transform hover:scale-125 transition-all duration-200 hover:-translate-y-1"
                >
                    <FaGithub className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </a>
                <a 
                    href="https://www.instagram.com/vedaantsinngh?igsh=ZGg5bXU2OHdxNXBv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-pink-500 transform hover:scale-125 transition-all duration-200 hover:-translate-y-1"
                >
                    <FaInstagram className="hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                </a>
                <a 
                    href="http://www.linkedin.com/in/vedant-singh-0b4336258" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-500 transform hover:scale-125 transition-all duration-200 hover:-translate-y-1"
                >
                    <FaLinkedin className="hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </a>
                <a 
                    href="https://x.com/vedaantsinngh?t=P3DNeRHPs569DZFxwadtvg&s=08" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-100 transform hover:scale-125 transition-all duration-200 hover:-translate-y-1"
                >
                    <FaTwitter className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </a>
                <a 
                    href="https://leetcode.com/vedaantsinngh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 transition-all duration-200 hover:-translate-y-1"
                >
                    <img 
                        src={leetcodeLogo} 
                        alt="LeetCode" 
                        className="w-6 h-6 grayscale hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(255,200,0,0.5)] transition-all duration-200"
                    />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;

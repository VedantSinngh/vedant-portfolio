import React from 'react';
import logo from '../assets/VS.png';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-3 w-12' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://github.com/VedantSinngh" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/vedaantsinngh?igsh=ZGg5bXU2OHdxNXBv" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="http://www.linkedin.com/in/vedant-singh-0b4336258" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://x.com/vedaantsinngh?t=P3DNeRHPs569DZFxwadtvg&s=08" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;

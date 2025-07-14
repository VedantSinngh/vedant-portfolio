import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { CONTACT } from '../constants/index';
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


const Contact = () => {
    return (
        <section className="relative">
            {/* Contact Section */}
            <div className='border-b border-neutral-800/40 pb-20'>
                <motion.div variants={item} className="flex flex-col items-center my-20">
                    <h1 className='text-6xl font-thin mb-4 tracking-wider'>
                        Contact Me
                        {/* <span className='ml-4 text-neutral-500'>
                            Projects
                        </span> */}
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full" />
                </motion.div>


                <div className="max-w-2xl mx-auto backdrop-blur-sm bg-neutral-900/20 rounded-2xl p-8 shadow-lg border border-neutral-800/40">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 justify-center group hover:text-cyan-300 transition-colors">
                            <MapPin className="h-5 w-5" />
                            <p className="tracking-tighter">{CONTACT.address}</p>
                        </div>

                        <div className="flex items-center gap-4 justify-center group hover:text-cyan-300 transition-colors">
                            <Phone className="h-5 w-5" />
                            <p className="tracking-tighter">{CONTACT.phoneNo}</p>
                        </div>

                        <div className="flex items-center gap-4 justify-center group hover:text-cyan-300 transition-colors">
                            <Mail className="h-5 w-5" />
                            <div className="flex items-center gap-4">
                                <a href={`mailto:${CONTACT.email}`} className="tracking-tighter hover:border-b border-current">
                                    {CONTACT.email}
                                </a>
                                <button
                                    onClick={() => window.location.href = 'mailto:vedaantsinngh@gmail.com'}
                                    className="px-4 py-2 border-neutral-800/40 hover:bg-cyan-600 text-white rounded-md transition-colors text-sm"
                                >
                                    Mail Me Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
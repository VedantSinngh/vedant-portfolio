import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { CONTACT } from '../constants/index';

const Contact = () => {
    return (
        <section className="relative">
            {/* Contact Section */}
            <div className='border-b border-neutral-800/40 pb-20'>
                <h1 className="my-10 text-center text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">
                    Get In Touch
                </h1>

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
import React, { useEffect, useState } from 'react';
import { CONTACT } from '../constants';
import mainPhoto from '../assets/vedant-main.png';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section className="relative min-h-[90vh] flex items-center py-section overflow-hidden" id="hero">
      {/* Atmospheric Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb-lavender opacity-40 blur-[80px] pointer-events-none rounded-full mix-blend-screen dark:mix-blend-normal"></div>

      <div className="section-pad relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-center">
          <div className="max-w-[720px]">
            <h1 className="t-display-mega mb-6" style={fade(0)}>
              <span className="block">Vedant</span>
              <span className="block">Singh</span>
            </h1>

            <p className="t-body-md text-[18px] mb-8 max-w-[540px]" style={fade(0.15)}>
              Applied ML engineering and quantum computing research. Building things that work.
            </p>

            <div className="flex items-center gap-2 mb-10" style={fade(0.25)}>
              <span className="w-2 h-2 rounded-full bg-semantic-success animate-pulse" />
              <span className="font-body text-[13px] tracking-wide uppercase text-muted">
                CSE (AI-ML), SRM &nbsp;·&nbsp; DRDO SAG &nbsp;·&nbsp; 9.18 CGPA
              </span>
            </div>

            <div className="flex flex-wrap gap-4" style={fade(0.35)}>
              <a href="#work" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Work
              </a>
              <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Resume
                <ExternalLink size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="relative justify-self-center lg:justify-self-end" style={fade(0.2)}>
            <div className="w-[280px] h-[360px] md:w-[320px] md:h-[420px] rounded-2xl overflow-hidden relative border border-hairline-strong shadow-sm bg-surface-card p-2">
               <div className="w-full h-full rounded-xl overflow-hidden relative bg-canvas-soft">
                  <img 
                    src={mainPhoto} 
                    alt="Vedant Singh" 
                    className="w-full h-full object-cover object-top grayscale contrast-110 hover:grayscale-0 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal" 
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

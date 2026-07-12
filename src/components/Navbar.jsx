import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const smoothScroll = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center transition-all duration-300 ${
          scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-hairline-soft' : 'bg-canvas'
        }`}
        id="navbar"
      >
        <div className="section-pad w-full flex items-center justify-between py-0">
          <a
            href="/"
            className="font-display text-[22px] font-medium tracking-tight text-ink"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Vedant
          </a>

          <ul className="hidden md:flex items-center gap-xl">
            {links.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  onClick={(e) => smoothScroll(e, l.href)}
                  className="font-body text-[15px] font-medium text-ink/80 hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-ink hover:bg-canvas-soft transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
            </button>
            <a href="#contact" className="hidden md:inline-flex btn-primary" onClick={(e) => smoothScroll(e, '#contact')}>
              Let's Talk
            </a>

            <button
              className="md:hidden p-2 text-ink"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[100] bg-canvas flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 p-2 text-ink hover:bg-canvas-soft rounded-full" 
          onClick={() => setMobileOpen(false)} 
          aria-label="Close"
        >
          <X size={28} strokeWidth={1.5} />
        </button>
        {links.map((l) => (
          <a 
            key={l.href} 
            href={l.href} 
            onClick={(e) => smoothScroll(e, l.href)}
            className="t-display-sm"
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary mt-4" onClick={(e) => smoothScroll(e, '#contact')}>
          Let's Talk
        </a>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { CONTACT } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section-pad py-section text-center" id="contact" ref={ref}>
      <h2 className={`t-display-lg mb-8 reveal ${visible ? 'visible' : ''}`}>
        Let's talk.
      </h2>

      <a
        href={`mailto:${CONTACT.email}`}
        className={`inline-block text-[20px] md:text-[24px] font-body text-body hover:text-ink transition-colors mb-12 tracking-tight reveal reveal-d1 ${visible ? 'visible' : ''}`}
      >
        {CONTACT.email}
      </a>

      <div className={`flex justify-center gap-8 flex-wrap reveal reveal-d2 ${visible ? 'visible' : ''}`}>
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 t-caption-uppercase hover:text-ink transition-colors">
          <Github size={16} strokeWidth={1.5} />
          GitHub
        </a>

        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 t-caption-uppercase hover:text-ink transition-colors">
          <Linkedin size={16} strokeWidth={1.5} />
          LinkedIn
        </a>

        <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 t-caption-uppercase hover:text-ink transition-colors">
          <FileText size={16} strokeWidth={1.5} />
          Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
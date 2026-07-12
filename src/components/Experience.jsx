import React from 'react';
import { EXPERIENCES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ExpItem = ({ exp, index }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-hairline-soft first:border-t hover:bg-canvas-soft/50 transition-colors reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="flex flex-col mt-2">
        <span className="font-display text-[20px] text-ink">{exp.date}</span>
        <span className="t-caption-uppercase text-muted mt-2">{exp.company}</span>
      </div>

      <div className="flex flex-col">
        <h3 className="t-display-sm !text-[24px] font-medium text-ink mb-3">{exp.role}</h3>
        <p className="t-body-md max-w-[640px] text-body/90 leading-relaxed mb-6">{exp.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {exp.technologies.map((t) => (
            <span key={t} className="font-body text-[12px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full border border-hairline bg-surface-card text-ink/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [ref] = useScrollReveal();

  return (
    <section className="section-pad py-section" id="experience">
      <div className="mb-16" ref={ref}>
        <span className="t-caption-uppercase">Background</span>
        <h2 className="t-display-lg mt-4 max-w-[600px]">Professional experience and hackathons.</h2>
      </div>

      <div className="flex flex-col">
        {EXPERIENCES.map((exp, i) => (
          <ExpItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { EXPERIENCES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ExpItem = ({ exp, index }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-8 border-b border-hairline-soft first:border-t reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="t-caption-uppercase mt-1">
        {exp.date}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="t-display-sm !text-[20px] font-medium">{exp.role}</h3>
        <span className="font-body text-[14px] text-body">{exp.company}</span>
        <p className="t-body-sm max-w-[600px] mt-2 mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((t) => (
            <span key={t} className="t-caption-uppercase bg-surface-strong px-2 py-1 rounded-sm">
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
      <div className="mb-12" ref={ref}>
        <span className="t-caption-uppercase">Background</span>
        <h2 className="t-display-lg mt-4">Experience</h2>
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

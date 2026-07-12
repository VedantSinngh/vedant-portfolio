import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award } from 'lucide-react';

const Certifications = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section-pad py-section" id="certifications">
      <div className="mb-12" ref={ref}>
        <span className="t-caption-uppercase">Credentials</span>
        <h2 className="t-display-lg mt-4">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-start gap-4 p-6 rounded-xl border border-hairline-soft bg-surface-card hover:bg-canvas-soft transition-colors reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="mt-1 p-2 bg-surface-strong rounded-full text-ink">
              <Award size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="t-body-strong text-[18px] text-ink">{cert.title}</h3>
              <p className="font-body text-[14px] text-body mt-1">{cert.issuer} • {cert.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

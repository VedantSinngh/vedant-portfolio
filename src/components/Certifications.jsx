import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const tagColor = (tag) => {
  if (tag === 'AWS') return 'text-[#FF9900]';
  if (tag === 'Salesforce') return 'text-[#00A1E0]';
  return 'text-muted';
};

const CertCard = ({ cert, index }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <motion.a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex items-start justify-between gap-4 py-6 border-b border-hairline-soft hover:border-hairline-strong transition-colors duration-300"
    >
      {/* Left */}
      <div className="flex items-start gap-5 flex-1 min-w-0">
        {/* Index number */}
        <span className="font-body text-[12px] text-muted-soft tabular-nums mt-0.5 shrink-0 w-5">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Content */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`font-body text-[11px] font-semibold tracking-widest uppercase ${tagColor(cert.tag)}`}>
              {cert.tag}
            </span>
          </div>
          <h3 className="font-display font-light text-[20px] md:text-[22px] text-ink leading-snug group-hover:text-body-strong transition-colors">
            {cert.title}
          </h3>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className="font-body text-[13px] text-muted">{cert.issuer}</span>
            <span className="w-1 h-1 rounded-full bg-muted-soft inline-block" />
            <span className="font-body text-[13px] text-muted">Issued {cert.issued}</span>
            {cert.expires && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-soft inline-block" />
                <span className="font-body text-[13px] text-muted">Expires {cert.expires}</span>
              </>
            )}
          </div>
          {cert.credentialId && (
            <p className="font-body text-[11px] text-muted-soft mt-1.5 truncate">
              ID: {cert.credentialId}
            </p>
          )}
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={18}
        strokeWidth={1.5}
        className="text-muted-soft group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1"
      />
    </motion.a>
  );
};

const Certifications = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section-pad py-section" id="certifications">
      {/* Heading */}
      <div
        ref={ref}
        className={`mb-14 reveal ${visible ? 'revealed' : ''}`}
      >
        <span className="t-caption-uppercase">Credentials</span>
        <h2 className="t-display-lg mt-4 max-w-[500px]">
          Verified certifications &amp; licences.
        </h2>
      </div>

      {/* List */}
      <div>
        {/* Top border */}
        <div className="border-t border-hairline-soft" />

        {CERTIFICATIONS.map((cert, i) => (
          <CertCard key={cert.credentialId} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;

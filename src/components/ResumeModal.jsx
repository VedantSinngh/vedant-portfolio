import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import { CONTACT } from '../constants';

const getEmbedUrl = (url) => {
  if (!url) return '';
  return url.replace('/view?usp=sharing', '/preview').replace('/view', '/preview');
};

export default function ResumeModal() {
  const { isOpen, closeResume } = useResume();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeResume(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeResume]);

  const embedUrl = getEmbedUrl(CONTACT.resume);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center sm:p-6">

          {/* Backdrop — thin dark veil, no heavy blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeResume}
            className="absolute inset-0 bg-canvas/80 cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            className="relative z-10 w-full sm:max-w-4xl h-[90vh] sm:h-[85vh] bg-canvas border border-hairline rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col"
          >

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-hairline-soft shrink-0">
              <div>
                <span className="t-caption-uppercase">Resume</span>
                <h3 className="font-display text-[18px] text-ink font-light leading-tight mt-0.5">
                  Vedant Singh
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={CONTACT.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-[13px] text-muted hover:text-ink transition-colors"
                  title="Open in Google Drive"
                >
                  <ArrowUpRight size={15} strokeWidth={1.5} />
                  <span className="hidden sm:inline">Open in Drive</span>
                </a>

                <div className="w-px h-4 bg-hairline mx-1" />

                <button
                  onClick={closeResume}
                  className="p-1.5 text-muted hover:text-ink transition-colors rounded-md hover:bg-surface-strong"
                  aria-label="Close"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 relative bg-canvas">
              {/* Minimal loading indicator */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20 bg-canvas">
                  <div className="w-5 h-5 border border-hairline-strong border-t-ink rounded-full animate-spin" />
                  <span className="t-caption-uppercase text-muted">Loading</span>
                </div>
              )}

              <iframe
                src={embedUrl}
                title="Vedant Singh Resume"
                className="w-full h-full border-none"
                allow="autoplay"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

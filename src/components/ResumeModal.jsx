import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeResume}
            className="absolute inset-0 bg-canvas/85"
          />

          {/* Floating close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            onClick={closeResume}
            className="absolute top-5 right-5 z-20 p-2 text-muted hover:text-ink transition-colors"
            aria-label="Close"
          >
            <X size={20} strokeWidth={1.5} />
          </motion.button>

          {/* iframe wrapper — no bg, no border */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 32, stiffness: 260 }}
            className="relative z-10 w-full max-w-4xl h-[90vh]"
          >
            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-4 h-4 border border-hairline-strong border-t-ink rounded-full animate-spin" />
              </div>
            )}

            <iframe
              src={embedUrl}
              title="Vedant Singh Resume"
              className="w-full h-full border-none bg-transparent"
              allow="autoplay"
              onLoad={() => setIsLoading(false)}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

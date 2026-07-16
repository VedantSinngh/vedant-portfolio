import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Loader2 } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import { CONTACT } from '../constants';

// Convert view link to preview link for iframe embedding
const getEmbedUrl = (url) => {
  if (!url) return '';
  return url.replace('/view?usp=sharing', '/preview').replace('/view', '/preview');
};

export default function ResumeModal() {
  const { isOpen, closeResume } = useResume();
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Prevent body scrolling when modal is active
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeResume();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeResume]);

  const embedUrl = getEmbedUrl(CONTACT.resume);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop Blur & Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeResume}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-5xl h-[85vh] bg-surface-card border border-hairline rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-hairline-soft bg-canvas/40 backdrop-blur-md">
              <div>
                <h3 className="font-display text-[20px] text-ink font-light">Vedant Singh</h3>
                <p className="text-[12px] text-muted font-body uppercase tracking-wider">Curriculum Vitae</p>
              </div>

              <div className="flex items-center gap-3">
                {/* Download Button */}
                <a
                  href={CONTACT.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-hairline bg-surface-strong/60 hover:bg-surface-strong hover:text-ink text-muted transition-all duration-200 text-xs font-body font-medium"
                  title="Open in new window / Download"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Open Original</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={closeResume}
                  className="p-2 rounded-full text-muted hover:text-ink hover:bg-surface-strong transition-all duration-200"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body / Iframe Container */}
            <div className="flex-1 w-full bg-[#1e1e1e] relative">
              {/* Spinner & Shimmer Loading State */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-canvas gap-4 z-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="text-ink opacity-65"
                  >
                    <Loader2 size={36} />
                  </motion.div>
                  <p className="text-muted text-xs font-body tracking-wide">Loading Document...</p>
                </div>
              )}

              {/* Iframe */}
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

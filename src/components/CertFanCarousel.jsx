import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../constants";
import { ArrowUpRight, MousePointer2 } from "lucide-react";

const DRAG_BUFFER = 50;

const springTransition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
};

// Minimalist gradient themes
const cardTheme = (tag) => {
  if (tag === "AWS")
    return {
      bg: "linear-gradient(135deg, rgba(30,22,0,0.8) 0%, rgba(45,31,0,0.8) 100%)",
      accent: "#FF9900",
      accentSoft: "rgba(255,153,0,0.12)",
      border: "rgba(255,153,0,0.2)",
      glow: "0 32px 80px rgba(255,153,0,0.15), 0 0 0 1px rgba(255,153,0,0.2)",
      glowSide: "0 16px 40px rgba(255,153,0,0.05)",
      tagText: "#FF9900",
    };
  if (tag === "Salesforce")
    return {
      bg: "linear-gradient(135deg, rgba(0,26,45,0.8) 0%, rgba(0,38,61,0.8) 100%)",
      accent: "#00A1E0",
      accentSoft: "rgba(0,161,224,0.12)",
      border: "rgba(0,161,224,0.2)",
      glow: "0 32px 80px rgba(0,161,224,0.15), 0 0 0 1px rgba(0,161,224,0.2)",
      glowSide: "0 16px 40px rgba(0,161,224,0.05)",
      tagText: "#00A1E0",
    };
  return {
    bg: "linear-gradient(135deg, rgba(17,17,17,0.8) 0%, rgba(28,28,28,0.8) 100%)",
    accent: "#fff",
    accentSoft: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.15)",
    glow: "0 32px 80px rgba(0,0,0,0.4)",
    glowSide: "0 16px 40px rgba(0,0,0,0.2)",
    tagText: "#fff",
  };
};

export default function CertFanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hint, setHint] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setHint(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleNext = useCallback(
    () => setCurrentIndex((p) => (p + 1) % CERTIFICATIONS.length),
    []
  );
  const handlePrev = useCallback(
    () => setCurrentIndex((p) => (p - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length),
    []
  );

  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    if (info.offset.x > DRAG_BUFFER) handlePrev();
    else if (info.offset.x < -DRAG_BUFFER) handleNext();
  };

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      if (e.deltaY > 0 || e.deltaX > 0) handleNext();
      else if (e.deltaY < 0 || e.deltaX < 0) handlePrev();
    },
    [handleNext, handlePrev]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.addEventListener("wheel", handleWheel, { passive: false });
    return () => { if (el) el.removeEventListener("wheel", handleWheel); };
  }, [handleWheel]);

  const handleCardClick = (index) => {
    if (isDragging) return;
    if (index === currentIndex) {
      window.open(CERTIFICATIONS[currentIndex].link, "_blank", "noopener,noreferrer");
    } else {
      setCurrentIndex(index);
    }
  };

  const active = CERTIFICATIONS[currentIndex];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center"
        style={{ perspective: "1200px" }}
        aria-label="Certifications carousel"
      >
        {CERTIFICATIONS.map((cert, index) => {
          let offset = index - currentIndex;
          if (offset < -Math.floor(CERTIFICATIONS.length / 2)) offset += CERTIFICATIONS.length;
          if (offset > Math.floor(CERTIFICATIONS.length / 2)) offset -= CERTIFICATIONS.length;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);
          const theme = cardTheme(cert.tag);

          return (
            <motion.div
              key={cert.credentialId}
              className="absolute w-[65%] md:w-[40%] h-[260px] md:h-[340px] rounded-3xl overflow-hidden backdrop-blur-md"
              style={{
                zIndex: CERTIFICATIONS.length - absOffset,
                transformOrigin: "bottom center",
                cursor: "pointer",
                background: theme.bg,
                boxShadow: isCenter ? theme.glow : theme.glowSide,
                border: `1px solid ${theme.border}`,
              }}
              animate={{
                rotateZ: isCenter ? 0 : offset * 8,
                x: isCenter ? 0 : offset * 130,
                scale: isCenter ? 1 : 0.85 - absOffset * 0.05,
                opacity: absOffset > 2 ? 0 : isCenter ? 1 : 0.6,
              }}
              transition={springTransition}
              drag={isCenter ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              onClick={() => handleCardClick(index)}
              tabIndex={0}
              role="button"
              aria-label={
                isCenter
                  ? `Verify ${cert.title} — click to open credential`
                  : `Bring ${cert.title} to center`
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(index);
                }
              }}
            >
              {/* Subtle radial glow from accent colour */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${theme.accentSoft} 0%, transparent 60%)`,
                }}
              />

              {/* Minimalist Content */}
              <div className="absolute inset-0 p-5 flex flex-col items-center justify-center">
                {/* Top-right Tag (Optional, keeps it clean) */}
                <div className="absolute top-5 left-5">
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                    style={{ color: theme.tagText, borderColor: theme.border, background: theme.accentSoft }}
                  >
                    {cert.tag}
                  </span>
                </div>

                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: hint ? 1 : 0, y: hint ? 0 : -6 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-5 right-5 flex items-center gap-1.5 text-[10px] font-medium"
                    style={{ color: `${theme.tagText}90` }}
                  >
                    <MousePointer2 size={12} />
                    verify
                  </motion.div>
                )}

                {/* Center Badge Image */}
                <motion.img 
                  src={cert.badge} 
                  alt={cert.title}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl mt-4"
                  animate={{ scale: isCenter ? 1 : 0.9, y: isCenter ? 0 : 10 }}
                  transition={springTransition}
                />
              </div>

              {/* Active glow ring */}
              {isCenter && (
                <motion.div
                  layoutId="cert-active-ring"
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${theme.accent}40` }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Active cert info below */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 text-center flex flex-col items-center"
      >
        <h3 className="font-display font-light text-[22px] md:text-[24px] text-ink leading-tight mb-2 max-w-[500px] px-4">
          {active.title}
        </h3>
        <div className="flex items-center gap-3 flex-wrap justify-center mb-1.5">
          <span className="font-body text-[13px] text-muted">{active.issuer}</span>
          <span className="w-1 h-1 rounded-full bg-muted-soft inline-block" />
          <span className="font-body text-[13px] text-muted">Issued {active.issued}</span>
        </div>
        <div className="flex items-center gap-2 group mt-2 cursor-pointer" onClick={() => window.open(active.link, "_blank")}>
            <span className="text-xs font-medium text-ink group-hover:text-body transition-colors uppercase tracking-wider">
              Verify Credential
            </span>
            <ArrowUpRight size={14} className="text-muted group-hover:text-ink transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </motion.div>

      {/* Dot pagination */}
      <div className="mt-6 flex gap-2 items-center">
        {CERTIFICATIONS.map((_, index) => {
          const theme = cardTheme(CERTIFICATIONS[index].tag);
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to cert ${index + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: index === currentIndex ? "2rem" : "0.5rem",
                height: "0.5rem",
                background: index === currentIndex ? theme.accent : "var(--muted-soft)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

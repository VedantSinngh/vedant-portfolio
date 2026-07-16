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

// Per-issuer gradient theme
const cardTheme = (tag) => {
  if (tag === "AWS")
    return {
      bg: "linear-gradient(135deg, #1a1200 0%, #2d1f00 40%, #1a0f00 100%)",
      accent: "#FF9900",
      accentSoft: "rgba(255,153,0,0.12)",
      border: "rgba(255,153,0,0.25)",
      glow: "0 32px 80px rgba(255,153,0,0.15), 0 0 0 1px rgba(255,153,0,0.2)",
      glowSide: "0 16px 40px rgba(255,153,0,0.08)",
      tagText: "#FF9900",
    };
  if (tag === "Salesforce")
    return {
      bg: "linear-gradient(135deg, #001a2d 0%, #00263d 40%, #00182a 100%)",
      accent: "#00A1E0",
      accentSoft: "rgba(0,161,224,0.12)",
      border: "rgba(0,161,224,0.25)",
      glow: "0 32px 80px rgba(0,161,224,0.15), 0 0 0 1px rgba(0,161,224,0.2)",
      glowSide: "0 16px 40px rgba(0,161,224,0.08)",
      tagText: "#00A1E0",
    };
  return {
    bg: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
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
        className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center"
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
              className="absolute w-[78%] md:w-[50%] h-[260px] md:h-[340px] rounded-3xl overflow-hidden"
              style={{
                zIndex: CERTIFICATIONS.length - absOffset,
                transformOrigin: "bottom center",
                cursor: "pointer",
                background: theme.bg,
                boxShadow: isCenter ? theme.glow : theme.glowSide,
                border: `1px solid ${theme.border}`,
              }}
              animate={{
                rotateZ: isCenter ? 0 : offset * 6,
                x: isCenter ? 0 : offset * 110,
                scale: isCenter ? 1 : 0.82 - absOffset * 0.04,
                opacity: absOffset > 2 ? 0 : isCenter ? 1 : 0.72,
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
                  background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${theme.accentSoft} 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border"
                    style={{ color: theme.tagText, borderColor: theme.border, background: theme.accentSoft }}
                  >
                    {cert.tag}
                  </span>
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: hint ? 1 : 0, y: hint ? 0 : -6 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-1.5 text-[11px] font-medium"
                      style={{ color: `${theme.tagText}90` }}
                    >
                      <MousePointer2 size={12} />
                      verify
                    </motion.div>
                  )}
                </div>

                {/* Bottom */}
                <div>
                  <h3 className="text-xl md:text-2xl font-light text-white leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-[13px] mb-1" style={{ color: `${theme.tagText}99` }}>
                    {cert.issuer}
                  </p>
                  <p className="text-[12px] text-white/40 mb-4">
                    Issued {cert.issued}
                    {cert.expires ? ` · Expires ${cert.expires}` : ""}
                  </p>

                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15, ...springTransition }}
                      className="flex items-center gap-1.5 text-sm font-medium group"
                      style={{ color: theme.tagText }}
                    >
                      <span>View Credential</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </motion.div>
                  )}
                </div>
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
        className="mt-8 text-center"
      >
        <p className="text-muted text-xs font-body uppercase tracking-widest">
          ID: {active.credentialId}
        </p>
      </motion.div>

      {/* Dot pagination */}
      <div className="mt-5 flex gap-2 items-center">
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

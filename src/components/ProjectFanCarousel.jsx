import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowRight, MousePointer2 } from "lucide-react";

const DRAG_BUFFER = 50;

const springTransition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
};

export default function ProjectFanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hint, setHint] = useState(true);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Hide the click hint after 3 seconds
  useEffect(() => {
    const t = setTimeout(() => setHint(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    if (info.offset.x > DRAG_BUFFER) {
      handlePrev();
    } else if (info.offset.x < -DRAG_BUFFER) {
      handleNext();
    }
  };

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      if (e.deltaY > 0 || e.deltaX > 0) {
        handleNext();
      } else if (e.deltaY < 0 || e.deltaX < 0) {
        handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleWheel]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Enter") {
        navigate(`/projects/${projects[currentIndex].slug}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, navigate, currentIndex]);

  const handleCardClick = (index) => {
    if (isDragging) return;
    if (index === currentIndex) {
      navigate(`/projects/${projects[currentIndex].slug}`);
    } else {
      setCurrentIndex(index);
    }
  };

  const activeProject = projects[currentIndex];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel container */}
      <div
        ref={containerRef}
        className="relative w-full h-[380px] md:h-[460px] flex items-center justify-center"
        style={{ perspective: "1200px" }}
        aria-label="Project carousel"
      >
        {projects.map((project, index) => {
          let offset = index - currentIndex;
          // Wrap for circular feel
          if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
          if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          const zIndex = projects.length - absOffset;
          const rotateZ = isCenter ? 0 : offset * 6;
          const translateX = isCenter ? 0 : offset * 110;
          const scale = isCenter ? 1 : 0.82 - absOffset * 0.04;
          const opacity = absOffset > 2 ? 0 : isCenter ? 1 : 0.72;

          return (
            <motion.div
              key={project.slug}
              className="absolute w-[78%] md:w-[52%] h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl"
              style={{
                zIndex,
                transformOrigin: "bottom center",
                cursor: isCenter ? "pointer" : "pointer",
                boxShadow: isCenter
                  ? "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)"
                  : "0 16px 40px rgba(0,0,0,0.3)",
              }}
              animate={{
                rotateZ,
                x: translateX,
                scale,
                opacity,
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
                  ? `View ${project.title} — press Enter or click to open`
                  : `Bring ${project.title} to center`
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(index);
                }
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${project.image})`,
                  transform: isCenter ? "scale(1.04)" : "scale(1)",
                }}
              />

              {/* Gradient overlay — heavier at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                {/* Top: tag + hint */}
                <div className="flex items-start justify-between">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {project.tag}
                  </span>
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: hint ? 1 : 0, y: hint ? 0 : -6 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-1.5 text-white/60 text-[11px] font-medium"
                    >
                      <MousePointer2 size={12} />
                      click to open
                    </motion.div>
                  )}
                </div>

                {/* Bottom: title + subtitle + arrow */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-1.5 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-gray-400 line-clamp-2 mb-4">
                    {project.subtitle}
                  </p>

                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15, ...springTransition }}
                      className="flex items-center gap-2 text-white/80 text-sm font-medium group"
                    >
                      <span>View Project</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Center card glow ring */}
              {isCenter && (
                <motion.div
                  layoutId="active-ring"
                  className="absolute inset-0 rounded-3xl ring-2 ring-white/20 pointer-events-none"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Info below carousel */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 text-center"
      >
        <p className="text-muted text-sm font-body max-w-[440px] mx-auto px-4">
          {activeProject.subtitle}
        </p>
      </motion.div>

      {/* Dot pagination */}
      <div className="mt-6 flex gap-2 items-center">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-2 bg-ink"
                : "w-2 h-2 bg-muted-soft hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

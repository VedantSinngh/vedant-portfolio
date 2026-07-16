"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "../data/projects";

const DRAG_BUFFER = 50;

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export default function FanCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > DRAG_BUFFER) {
      handlePrev();
    } else if (info.offset.x < -DRAG_BUFFER) {
      handleNext();
    }
  };

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // Prevent default scrolling when hovering over carousel and using wheel
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const handleCardClick = (index: number) => {
    if (index === currentIndex) {
      router.push(`/projects/${projects[currentIndex].slug}`);
    } else {
      setCurrentIndex(index);
    }
  };

  const handleCardKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(index);
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-12">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden"
        style={{ perspective: 1000 }}
      >
        <AnimatePresence initial={false}>
          {projects.map((project, index) => {
            // Determine relative position
            let offset = index - currentIndex;
            // Handle wrap-around for a circular feel
            if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
            if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

            const isCenter = offset === 0;
            const isLeft = offset < 0;
            const isRight = offset > 0;

            // Base styles
            const zIndex = projects.length - Math.abs(offset);
            const rotateZ = isCenter ? 0 : offset * 5; // Fan out rotation
            const translateX = isCenter ? 0 : offset * 120;
            const scale = isCenter ? 1 : 0.85 - Math.abs(offset) * 0.05;
            const opacity = Math.abs(offset) > 2 ? 0 : 1;
            const blur = isCenter ? 0 : Math.abs(offset) * 2;

            return (
              <motion.div
                key={project.slug}
                className="absolute w-[85%] md:w-[60%] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                style={{
                  zIndex,
                  transformOrigin: "bottom center",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  rotateZ,
                  x: translateX,
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
                transition={springTransition}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                onClick={() => handleCardClick(index)}
                onKeyDown={(e) => handleCardKeyDown(e, index)}
                tabIndex={0}
                role="button"
                aria-label={`Project: ${project.title}. ${isCenter ? "Press Enter to view details." : "Press Enter to bring to center."}`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Fallback gradient if no image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Tag */}
                  <div className="self-end bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.tag}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dot Pagination */}
      <div className="mt-8 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

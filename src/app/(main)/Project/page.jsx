"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "../../../data/projectData";
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

export default function ProjectsFramerSlideshow() {
  const itemsPerPage = 2;
  const totalItems = projects.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  useEffect(() => {
    // Get width of visible container to calculate slide width
    function updateWidth() {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth / itemsPerPage);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const next = () => {
    if (currentIndex + 1 > totalItems - itemsPerPage) {
      // We reached the last slide - loop to start smoothly
      // Disable animation to jump instantly
      setIsAnimating(false);
      setCurrentIndex(0);
      // Re-enable animation after position reset (next tick)
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prev = () => {
    // Normal previous behavior with loop back to last slideset
    if (currentIndex - 1 < 0) {
      setCurrentIndex(totalItems - itemsPerPage);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6  bg-black text-white">
      <h1 className="text-5xl font-bold text-center mb-12">My Projects</h1>

      {/* Outer wrapper - fixed width and overflow hidden */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[1300px] overflow-hidden"
      >
        {/* Inner flex container - width depends on number of items */}
        <motion.div
          className="flex gap-8"
          style={{ width: slideWidth * totalItems }}
          animate={{ x: -slideWidth * currentIndex }}
          transition={{ type: "spring", stiffness: 120, damping: 30 }}
        >
          {projects.map((project) => {
            const [imgLoaded, setImgLoaded] = useState(false); // <== Moved inside map

            return (
              <div
                key={project.id}
                className="flex flex-col items-center px-4"
                style={{ width: slideWidth }}
              >
                {/* Title with bouncing circle */}
                <motion.div className="relative inline-block m-5">
                  <motion.span
                    className="absolute top-1 left-5 w-10 h-10 bg-[#845F8A] rounded-full z-0"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <h3 className="text-2xl font-semibold relative z-10 pl-10">
                    {project.title}
                  </h3>
                </motion.div>

                {/* Image container */}
                <div className="relative w-full h-[480px] group overflow-hidden rounded-lg cursor-pointer max-w-[600px]">
                  {/* Placeholder until image loads */}
                  {!imgLoaded && (
                    <Image
                      src="/placeholder.png"
                      alt="loading"
                      fill
                      style={{ objectFit: "cover" }}
                      className="absolute top-0 left-0 blur-sm rounded-lg z-0"
                    />
                  )}

                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {project?.imageLaptop && (
                      <Image
                        src={project.imageLaptop}
                        alt={project.title}
                        fill
                        onLoad={() => setImgLoaded(true)}
                        style={{ objectFit: "cover" }}
                        className={`transition-all duration-500 rounded-lg ${
                          imgLoaded ? "opacity-100" : "opacity-0"
                        } group-hover:blur-sm group-hover:opacity-70`}
                      />
                    )}
                  </motion.div>

                  {/* Overlay with link */}
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <Link
                      href={`/Project/${project.id}`}
                      className="text-white bg-[#845F8A] hover:bg-[#6da8d3] px-5 py-2 rounded-full font-semibold transition"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
          aria-label="Previous"
        >
          <MdOutlineKeyboardArrowLeft className="text-4xl text-[#845F8A]" />
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
          aria-label="Next"
        >
          <MdKeyboardArrowRight className="text-4xl text-[#845F8A]" />
        </button>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ImageCarousel = ({ images, title, interval = 4000 }) => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const timeoutRef = useRef(null);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      const newIndex = (prev + dir + images.length) % images.length;
      return [newIndex, dir];
    });
  };

  // Auto-slide every `interval` ms
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => paginate(1), interval);

    return () => clearTimeout(timeoutRef.current);
  }, [index, interval]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] sm:h-[600px] overflow-hidden my-10">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`${title} image ${index + 1}`}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Manual controls (optional) */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white z-10"
      >
        &#8592;
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white z-10"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;

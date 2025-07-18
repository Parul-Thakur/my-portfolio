import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-4"
      >
        My Projects
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-300 text-center mb-16"
      >
        Here are a few projects I've worked on recently. Want to see more?{" "}
        <span className="text-[#845F8A] hover:underline">
          Check them out below!
        </span>
      </motion.p>

      {/* Project Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Left: Project Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="overflow-hidden max-w-[500px]">
            <Image
              src="/laptop.png"
              alt="Project 1"
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>
        </motion.div>

        {/* Right: Project Info */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-start justify-center"
        >
          <h2 className="text-3xl font-bold mb-4">E-Commerce Web App</h2>
          <p className="text-gray-300 mb-6 leading-7">
            A full-featured e-commerce application built using React, Tailwind,
            and Firebase. It supports user authentication, real-time product
            updates, and responsive UI design for desktop and mobile.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#845F8A] hover:bg-[#6da8d3] text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            View Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

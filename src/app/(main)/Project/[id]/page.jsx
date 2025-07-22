"use client";

import React from "react";
import projects from "../../../../data/projectData";
import Navbar from "../../Navbar";
import Link from "next/link";
import ImageCarousel from "../../../component/ImageCarousel";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default  function ProjectDetailPage({ params }) {
  const { id } =  React.use(params);;
  const router = useRouter();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div className="p-8 text-center">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <button
        onClick={() => router.back()}
        className="absolute top-20 left-50 z-50 px-4 py-2 ] text-white  transition cursor-pointer"
      >
        <FaArrowLeft />
      </button>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black  h-[50vh] text-white flex flex-col items-center justify-center overflow-hidden"
      >
        <h2 className="text-4xl font-extrabold mb-6">{project.title}</h2>
        <p className="max-w-3xl mb-8 text-gray-300">{project.overview}</p>
        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#845F8A] hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition"
            >
              View GitHub
            </Link>
          )}
          {(project.liveDemo || project.videoDemo) && (
            <Link
              href={project.liveDemo || project.videoDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#845F8A] hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition"
            >
              {project.liveDemo ? "Live Demo" : "Video Demo"}
            </Link>
          )}
        </div>
      </motion.section>

      {/* =======================================PROJECT GALLERY======================================= */}
      <section className="bg-black  px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto "
        >
          {project?.images?.length > 0 ? (
            <ImageCarousel
              images={project.images}
              title={project.title}
              interval={5000}
            />
          ) : (
            <p className="text-white text-center">No images available.</p>
          )}
        </motion.div>
      </section>
      {/* =======================================PROJECT DESCRIPTION======================================= */}
      <section className="bg-black py-20 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-100 ">
            Project Overview
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed mb-6">
            {project.description ||
              "This project showcases key features and tools used to build a modern, responsive, and scalable web application. It was designed with performance, accessibility, and clean UI/UX principles in mind."}
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-200 cursor-pointer transition transform hover:text-indigo-400 hover:scale-105"
                >
                  <FaCheckCircle className="text-indigo-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
      {/* =================================================TOOLS========================================== */}
      <section className="bg-black dark:bg-gray-900 py-12 px-6 rounded-lg mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-100">
          Tools Used
        </h2>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
          {project.techStack.map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center w-24"
            >
              <div className="text-2xl sm:text-3xl text-white">{tool.icon}</div>
              <span className="text-sm text-gray-300 mt-2">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================================FOOTER============================================ */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Parul Thakur. All rights reserved.
          </p>

          {/* Right: Social Icons */}
          <div className="flex space-x-6 text-xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-gray-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

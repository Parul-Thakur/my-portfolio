"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Hero() {
  return (
    <div
      id="home"
      className="bg-black relative h-screen text-white p-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center text-white z-30 relative">
        <h1 className="text-center text-5xl font-bold tracking-wider">
          HEY THERE, I'M PARUL THAKUR
        </h1>
        <h3 className="text-center text-xl font-light tracking-wider py-7">
          A Result-Oriented Web Developer building and managing Websites and Web{" "}
          <br />
          Applications that leads to the success of the overall product
        </h3>
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/Parul-Thakur"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-gray-400 transition text-2xl lg:text-3xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/parulthakur21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-gray-400 transition text-2xl lg:text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Single Bright Faded Moon Layer at Bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-96 w-screen max-w-7xl overflow-hidden 
        before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#1a237e,transparent_80%)] before:opacity-60"
        style={{
          maskImage:
            "radial-gradient(circle at center, white 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, white 50%, transparent 100%)",
        }}
      >
        <div
          className="absolute animate-gradient top-1/2 -left-1/2 z-20 w-[200%] aspect-square rounded-full border-t-4 border-t-[#d0e8ff] bg-black
          shadow-[inset_0_2px_20px_#d0e8ff,0_-10px_80px_20px_#d0e8ffb3]"
        />
      </div>
    </div>
  );
}

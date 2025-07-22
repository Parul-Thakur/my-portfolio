"use client";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Parul Thakur. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Parul-Thakur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/parulthakur21/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ParulThakur21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaTwitter />
          </a>
        
          <a
            href="paru.thakur11oct@gmail.com"
            className="hover:text-gray-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

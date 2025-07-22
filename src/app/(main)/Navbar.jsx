"use client";

import React, { useEffect, useState } from "react";
import { navbarData, copyright } from "../../assets/index";

function Navbar() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // Adjust as needed
      }
    );

    navbarData.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-10 bg-black">
      <a href="/#home" className="text-white">
        <span className="text-3xl font-semibold text-[#845F8A]">P</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold ">
          Thakur
        </span>
      </a>

      <div className="flex flex-col gap-y-3 sm:gap-y-2">
        {navbarData.map((item, i) => (
          <a
            href={`/#${item.id}`}
            key={i}
            className={`group flex flex-col items-center gap-y-2 transition-all ${
              activeId === item.id ? "text-white scale-110" : "text-gray-500"
            }`}
          >
            <span className="text-2xl group-hover:scale-125 transition-all text-[#845F8A]">
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center ${
                activeId === item.id ? "opacity-100 translate-x-0" : ""
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>

      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">
          {copyright} 2022 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
}

export default Navbar;

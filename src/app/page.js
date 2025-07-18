'use client'

import Hero from "@/components/sub/Hero";
import Navbar from "@/components/Navbar";
import { useRef, useState } from "react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactPage from "@/components/Contacts";

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null)
   return (
    <>
      <Navbar />
      <div>
        <Hero />
        <About/>
        <Projects/>
        <ContactPage/>
      </div>
    </>
  );
}

"use client";


import { useRef, useState } from "react";
import About from "./(main)/About";
import Projects from "./(main)/Project/page";
import ContactPage from "./(main)/Contacts";
import Footer from "./(main)/Footer";
import Hero from "./(main)/Hero";
import Navbar from "./(main)/Navbar";

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);
  return (
    <>
      <Navbar/>
      <div>
        <Hero />
        <About />
        <Projects />
        <ContactPage />
        <Footer />
      </div>
    </>
  );
}

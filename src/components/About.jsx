import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function About() {
  const skills = ["HTML", "CSS", "JavaScript", "Java", "React", "Tailwind", "Git", "Next.js"];

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { threshold: 0.3 });
  const rightInView = useInView(rightRef, { threshold: 0.3 });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (leftInView) {
      leftControls.start({ x: 0, opacity: 1 });
    } else {
      leftControls.start({ x: -100, opacity: 0 });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start("visible");
    } else {
      rightControls.start("hidden");
    }
  }, [rightInView, rightControls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-black"
    >
      <h1 className="text-5xl font-bold text-white text-center mb-10">About Me</h1>

      <h3 className="text-lg font-semibold text-white text-center mb-6">
        Here you will find more information about me, what I do, and my current <br />
        skills mostly in terms of programming and technology
      </h3>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-center gap-16">
        
        {/* Left: Description */}
        <motion.div
          ref={leftRef}
          className="max-w-[700px] rounded-xl p-5"
          initial={{ x: -100, opacity: 0 }}
          animate={leftControls}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-5 text-center">Get to know me!</h2>
          <p className="text-gray-300 leading-7">
            Hi there, I'm a Frontend Focused Web Developer building and managing
            the Front-end of Websites and Web Applications that lead to the
            success of the overall product. Check out some of my work in the
            Projects section. I also like sharing content related to the things
            I’ve learned in Web Development to help others in the Dev Community.
            <br /><br />
            I'm open to job opportunities where I can contribute, learn, and grow.
            If you have a good opportunity that matches my skills, feel free to reach out.
          </p>
        </motion.div>

        {/* Right: Skills with staggered animation */}
        <motion.div
          ref={rightRef}
          className="flex flex-wrap justify-center gap-4 max-w-[400px]"
          variants={containerVariants}
          initial="hidden"
          animate={rightControls}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              className="px-4 py-2 rounded-full bg-[#845F8A] text-white font-medium shadow-md border border-gray-300 hover:bg-gray-100 transition"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;

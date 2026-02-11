"use client";

import Header from "./sections/Header";
import About from "./sections/About";
import Skill from "./sections/Skill";
import Works from "./sections/Works";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Header />
      <About />
      <Skill />
      <Experience />
      <Works />
      <Contact />
    </main>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

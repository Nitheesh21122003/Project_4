import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Nitheesh 👋</h1>
      <p className="text-lg max-w-xl text-center">
        A passionate developer building modern web apps with React and Tailwind CSS.
      </p>
    </section>
  );
}

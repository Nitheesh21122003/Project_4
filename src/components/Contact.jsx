import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! (Check console)");
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-200 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-lg p-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          rows="4"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg transition hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

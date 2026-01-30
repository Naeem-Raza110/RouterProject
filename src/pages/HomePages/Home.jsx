import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#010205] text-white relative">

      {/* Side lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      {/* Section 1 - Hero */}
      <section id="hero" className="flex flex-col items-center justify-center text-center px-6 py-32 pt-36 relative z-10">
        <h2 className="text-5xl font-bold leading-tight drop-shadow">
          Build Beautiful Experiences
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Craft modern, responsive, and fast interfaces with clean code.
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition">
          Get Started
        </button>
      </section>

      {/* Section 2 - About / Mission */}
      <section id="about" className="py-24 px-6 relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12">Our Mission</h3>
        <p className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
          Our goal is to empower developers and designers with tools and resources
          to build modern web applications with elegance and speed. We believe in clean code,
          fast performance, and interfaces that delight users.
        </p>
      </section>

      {/* Section 3 - Services / Offerings */}
      <section id="services" className="py-24 px-6 relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Web Development</h4>
            <p className="text-gray-300">Build responsive, modern websites using React, Tailwind, and more.</p>
          </div>
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">UI/UX Design</h4>
            <p className="text-gray-300">Craft user-friendly interfaces and smooth user experiences.</p>
          </div>
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Performance Optimization</h4>
            <p className="text-gray-300">Fast, optimized websites that load quickly and efficiently.</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Testimonials */}
      <section id="testimonials" className="py-24 px-6 relative z-10 bg-white/5 backdrop-blur-xl">
        <h3 className="text-3xl font-semibold text-center mb-12">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-900/50 rounded-xl shadow-xl text-center">
            <p className="text-gray-300 italic mb-3">"Amazing work! My site runs so fast and looks beautiful."</p>
            <span className="font-semibold text-white">- John D.</span>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl shadow-xl text-center">
            <p className="text-gray-300 italic mb-3">"Professional, reliable, and excellent communication."</p>
            <span className="font-semibold text-white">- Sarah K.</span>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl shadow-xl text-center">
            <p className="text-gray-300 italic mb-3">"Highly recommended for any frontend project!"</p>
            <span className="font-semibold text-white">- Michael B.</span>
          </div>
        </div>
      </section>

      {/* Section 5 - Call to Action */}
      <section id="cta" className="py-24 px-6 relative z-10 text-center">
        <h3 className="text-3xl font-semibold mb-6">Ready to Start Your Project?</h3>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">Contact us today and let's build something amazing together.</p>
        
        <Link to="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition">
          Get in Touch
        </Link>
      </section>

    </div>
  );
};

export default Home;

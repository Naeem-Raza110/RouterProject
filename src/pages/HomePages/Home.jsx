import React from "react";

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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Why Choose Us?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Fast</h4>
            <p className="text-gray-300">Optimized performance and quick loading.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Responsive</h4>
            <p className="text-gray-300">Looks great on phones, tablets, and desktops.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Modern</h4>
            <p className="text-gray-300">Clean layouts with a cinematic visual feel.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

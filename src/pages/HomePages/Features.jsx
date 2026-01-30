import React from "react";

const Features = () => {
  return (
    <div className="min-h-screen bg-[#010205] text-white relative">

      {/* Side lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      {/* Section 1 - Core Features */}
      <section id="features" className="py-24 px-6 relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Core Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Fast Performance</h4>
            <p className="text-gray-300">Enjoy smooth and optimized speed across every device.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Clean UI</h4>
            <p className="text-gray-300">A modern, cinematic interface designed for clarity and impact.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Fully Responsive</h4>
            <p className="text-gray-300">Looks perfect on mobile, tablet, and desktop screens.</p>
          </div>
        </div>
      </section>

      {/* Section 2 - Security */}
      <section id="security" className="py-24 px-6 relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12">Secure & Reliable</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Data Protection</h4>
            <p className="text-gray-300">Your information is encrypted and safe.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Reliable Uptime</h4>
            <p className="text-gray-300">Our services are available 24/7 with minimal downtime.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">User Privacy</h4>
            <p className="text-gray-300">We respect your privacy and keep your data confidential.</p>
          </div>
        </div>
      </section>

      {/* Section 3 - Customization */}
      <section id="customization" className="py-24 px-6 relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12">Customization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Themes</h4>
            <p className="text-gray-300">Easily switch between dark and light modes.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Layouts</h4>
            <p className="text-gray-300">Flexible layouts tailored for your needs.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Components</h4>
            <p className="text-gray-300">Reusable UI components for faster development.</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Support */}
      <section id="support" className="py-24 px-6 relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12">Support & Community</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Documentation</h4>
            <p className="text-gray-300">Comprehensive guides for all features.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Community Forums</h4>
            <p className="text-gray-300">Join discussions and get help from other users.</p>
          </div>

          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-3">Live Chat</h4>
            <p className="text-gray-300">Quick support directly from our team.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Features;

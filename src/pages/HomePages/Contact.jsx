import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#010205] text-white relative">

      {/* Side lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-full w-40 bg-white/5 blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <section className="px-6 py-24 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            We’d love to hear from you. Fill out the form and we’ll get back soon.
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="text-white font-semibold">Email:</span> support@mybrand.com
              </li>
              <li>
                <span className="text-white font-semibold">Phone:</span> +92 300 1234567
              </li>
              <li>
                <span className="text-white font-semibold">Address:</span> Gilgit, Pakistan
              </li>
              <li>
                <span className="text-white font-semibold">Working Hours:</span> Mon to Fri, 9 AM – 6 PM
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

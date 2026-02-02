import React from 'react'

function Customization() {
  return (
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
  )
}

export default Customization
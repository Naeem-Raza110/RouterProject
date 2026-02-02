import React from 'react'

function CoreFeatures() {
  return (
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
  )
}

export default CoreFeatures
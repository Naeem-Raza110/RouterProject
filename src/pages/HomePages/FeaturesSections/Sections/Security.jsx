import React from 'react'

function Security() {
  return (
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
  )
}

export default Security
import React from 'react'
import Container from '../../Container'

function Services() {
  return (
    <Container>
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
        </Container>
  )
}

export default Services
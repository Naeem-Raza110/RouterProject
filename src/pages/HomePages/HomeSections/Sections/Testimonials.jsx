import React from 'react'
import Container from '../../Container'

function Testimonials() {
  return (
    
   <section id="testimonials" className="py-24 px-6 relative z-10 bg-white/5 backdrop-blur-xl">
    <Container>
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
         </Container>
      </section>
       
  )
}

export default Testimonials
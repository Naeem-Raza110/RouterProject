import React from 'react'
import { Link } from 'react-router'
import Button from '../../../../components/Ui/Button';
import Container from '../../Container';
function CallToAction() {
  return (
    <Container>
       <section id="cta" className="py-24 px-6 relative z-10 text-center">
        <h3 className="text-3xl font-semibold mb-6">Ready to Start Your Project?</h3>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">Contact us today and let's build something amazing together.</p>
        
        <Link to="/contact">
     <Button title={"Get in Touch"} className="mt-8 py-2 px-6" />
        </Link>
      </section>
    </Container>
  )
}

export default CallToAction
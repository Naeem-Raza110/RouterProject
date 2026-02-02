import React from 'react'
import Button from '../../../../components/Ui/Button'
import { Link } from 'react-router'
import Container from '../../Container'
function Hero() {
  return (
    <Container>
      <section id="hero" className="flex flex-col items-center justify-center text-center px-6 py-32 pt-36 relative z-10">
        <h2 className="text-5xl font-bold leading-tight drop-shadow">
          Build Beautiful Experiences
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Craft modern, responsive, and fast interfaces with clean code.
        </p>
        <Link to="/contact">
          <Button title={"Get Started"} className="mt-10 py-2 px-6" />
            </Link>
      </section>
    </Container>
  )
}

export default Hero
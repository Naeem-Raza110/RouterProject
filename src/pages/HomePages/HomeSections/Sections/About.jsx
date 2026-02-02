import React from 'react'
import Container from '../../Container'

function About() {
    return (
        <Container>
        <section id="about" className="py-24 px-6 relative z-10">
            <h3 className="text-3xl font-semibold text-center mb-12">Our Mission</h3>
            <p className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
                Our goal is to empower developers and designers with tools and resources
                to build modern web applications with elegance and speed. We believe in clean code,
                fast performance, and interfaces that delight users.
            </p>
        </section>
        </Container>
    )
}

export default About
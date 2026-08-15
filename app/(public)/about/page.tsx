import React from 'react'

const About = () => {
  return (
    <section className="py-12 bg-black text-white"  >
        <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h1 className="text-3xl font-bold mb-4 text-white">About DevCommunity</h1>
            <p className="text-white leading-relaxed">
                DevCommunity is a platform to connect developers, view their posts, and explore various communities. It is designed from a team of passionate developers who understand the importance of collaboration and knowledge sharing in the tech world.
            </p>
            <h2 className= "text-xl font-bold text-white pt-2">Our Mission</h2>
            <p className="text-white leading-relaxed">
                Our mission is to empower developers by providing a space to learn, share, and grow together in the ever-evolving world of technology.
            </p>
        </div>
    </section>
  )
}

export default About
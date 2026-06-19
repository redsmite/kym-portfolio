import React, { useState, useEffect } from 'react'
import { Github, Linkedin, ChevronDown } from 'lucide-react'

const roles = [
  'Full-Stack Web Developer',
  'Network Administrator',
  'CCNA-Certified Professional',
  'Government ICT Officer',
  'React & Laravel Specialist',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => { setVisible(true) }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(c => c + 1) }, charIndex === 0 ? 500 : 60)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(c => c - 1) }, 30)
    } else {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 hero-gradient">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
           style={{ background: '#1a7a3a' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
           style={{ background: '#0d5ea6' }} />

      <div className={`relative z-10 text-center max-w-4xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* DENR badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white border border-denr-green/30 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-denr-green animate-pulse" />
          <span className="text-xs text-denr-green font-medium tracking-wide">DENR-NCR · Administrative Officer</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2 leading-tight">
          Josonvon Kym
          <br />
          <span style={{ background: 'linear-gradient(90deg, #0d5ea6, #1a7a3a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Carabeo
          </span>
        </h1>

        <div className="h-12 flex items-center justify-center mt-4 mb-8">
          <span className="font-mono text-lg md:text-2xl font-medium" style={{ color: '#0d5ea6' }}>
            {displayed}
            <span className="animate-blink" style={{ color: '#1a7a3a' }}>|</span>
          </span>
        </div>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Building digital infrastructure for the Philippine government at{' '}
          <span className="text-denr-green font-semibold">DENR-NCR</span>. Full-stack developer,
          network engineer, and advocate for public sector digital transformation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn-primary text-sm font-semibold shadow-sm">
            View Projects
          </a>
          <a href="#contact" className="btn-outline text-sm font-semibold">
            Get in Touch
          </a>
          <a href="https://github.com/redsmite" target="_blank" rel="noopener noreferrer"
             className="p-2.5 rounded-lg border border-gray-200 bg-white hover:border-denr-blue text-gray-500 hover:text-denr-blue transition-colors shadow-sm">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/josonvon-kym-carabeo-35708239a/" target="_blank" rel="noopener noreferrer"
             className="p-2.5 rounded-lg border border-gray-200 bg-white hover:border-denr-blue text-gray-500 hover:text-denr-blue transition-colors shadow-sm">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <a href="#projects" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-denr-blue transition-colors animate-bounce">
        <ChevronDown size={24} />
      </a>
    </section>
  )
}

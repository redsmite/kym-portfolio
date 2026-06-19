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

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c + 1)
      }, charIndex === 0 ? 500 : 60)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c - 1)
      }, 30)
    } else {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(74,173,91,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,173,91,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #4aad5b 0%, transparent 70%)' }} />

      <div className={`relative z-10 text-center max-w-4xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Terminal prompt badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-denr-green/30 bg-denr-muted/20">
          <span className="w-2 h-2 rounded-full bg-denr-light animate-pulse" />
          <span className="font-mono text-xs text-denr-light tracking-widest uppercase">Available for collaboration</span>
        </div>

        <h1 className="font-mono text-5xl md:text-7xl font-semibold mb-2 leading-tight">
          <span className="text-slate-300">Kym</span>
          <br />
          <span className="text-white">Carabeo</span>
        </h1>

        <div className="h-12 flex items-center justify-center mt-4 mb-8">
          <span className="font-mono text-lg md:text-2xl text-denr-light text-green-glow">
            {displayed}
            <span className="animate-blink">_</span>
          </span>
        </div>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
          Building digital infrastructure for the Philippine government at{' '}
          <span className="text-denr-light font-medium">DENR-NCR</span>. Full-stack developer,
          network engineer, and passionate advocate for public sector digital transformation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-denr-green hover:bg-denr-light text-white font-mono text-sm rounded transition-colors duration-200 flex items-center gap-2"
          >
            <span>./view-projects</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-denr-green/50 hover:border-denr-light text-slate-300 hover:text-white font-mono text-sm rounded transition-colors duration-200"
          >
            ./get-in-touch
          </a>
          <a
            href="https://github.com/redsmite"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-700 hover:border-denr-green/50 text-slate-400 hover:text-denr-light rounded transition-colors duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/josonvon-kym-carabeo-35708239a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-700 hover:border-denr-green/50 text-slate-400 hover:text-denr-light rounded transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-denr-light transition-colors animate-bounce">
        <ChevronDown size={24} />
      </a>
    </section>
  )
}

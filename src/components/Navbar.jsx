import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home',       label: 'Home' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills' },
  { href: '#about',      label: 'About' },
  { href: '#contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
               style={{ background: 'linear-gradient(135deg, #0d5ea6, #1a7a3a)' }}>
            <span className="text-white font-mono font-bold text-sm">K</span>
          </div>
          <span className="font-sans font-semibold text-gray-800 text-sm hidden sm:block">Kym Carabeo</span>
        </a>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
               className="text-sm text-gray-500 hover:text-denr-blue transition-colors font-medium">
              {link.label}
            </a>
          ))}
          <a href="https://github.com/redsmite" target="_blank" rel="noopener noreferrer"
             className="btn-primary text-sm">
            GitHub
          </a>
        </div>

        <button className="md:hidden text-gray-600 hover:text-denr-blue" onClick={() => setOpen(o => !o)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-md px-6 pb-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
               className="block py-3 text-sm text-gray-600 hover:text-denr-blue border-b border-gray-50 last:border-0 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

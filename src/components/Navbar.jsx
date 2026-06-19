import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/60' : ''}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono font-semibold text-denr-light text-sm tracking-wider">
          kym<span className="text-slate-500">@denr</span><span className="text-slate-600">:~$</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="font-mono text-xs text-slate-500 hover:text-denr-light transition-colors tracking-wide">
              {link.label}
            </a>
          ))}
          <a href="https://github.com/redsmite" target="_blank" rel="noopener noreferrer"
            className="px-4 py-1.5 font-mono text-xs border border-denr-green/40 text-denr-light hover:bg-denr-green/10 rounded transition-colors">
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(o => !o)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-950/95 border-b border-slate-800 px-6 pb-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="block py-3 font-mono text-sm text-slate-400 hover:text-denr-light border-b border-slate-800/50 last:border-0 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

import React from 'react'
import { Github, Linkedin, ExternalLink } from 'lucide-react'
import { SectionLabel } from './About'

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Get in Touch" />

          <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let's build something that{' '}
                <span className="text-denr-green">matters</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">
                Whether you're working on a government digitization initiative, need a full-stack web system,
                or want to talk networking and infrastructure — I'm open to connecting.
              </p>

              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/josonvon-kym-carabeo-35708239a/"
                   target="_blank" rel="noopener noreferrer"
                   className="card p-4 flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-denr-blue-pale flex items-center justify-center">
                    <Linkedin size={16} className="text-denr-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">LinkedIn</div>
                    <div className="text-gray-800 text-sm font-medium">josonvon-kym-carabeo</div>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-gray-300 group-hover:text-denr-blue transition-colors" />
                </a>

                <a href="https://github.com/redsmite"
                   target="_blank" rel="noopener noreferrer"
                   className="card p-4 flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Github size={16} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">GitHub</div>
                    <div className="text-gray-800 text-sm font-medium">github.com/redsmite</div>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-gray-300 group-hover:text-denr-blue transition-colors" />
                </a>
              </div>
            </div>

            {/* DENR-styled info card */}
            <div className="card p-0 overflow-hidden">
              {/* Header bar with DENR colors */}
              <div className="h-2" style={{ background: 'linear-gradient(90deg, #0d5ea6, #1a7a3a)' }} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                       style={{ background: 'linear-gradient(135deg, #e8f2fc, #e8f5ec)' }}>
                    <span className="font-bold text-lg" style={{ color: '#0d5ea6' }}>K</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Josonvon Kym V. Carabeo</div>
                    <div className="text-xs text-gray-400">Administrative Officer, DENR-NCR</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Role',          value: 'Full-Stack Developer & Network Admin' },
                    { label: 'Agency',        value: 'Department of Environment & Natural Resources' },
                    { label: 'Division',      value: 'ICT Infostructure & Connectivity' },
                    { label: 'Certification', value: 'CCNA — Cisco Certified Network Associate' },
                    { label: 'Status',        value: 'Open to collaboration' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-3 text-sm">
                      <span className="text-gray-400 w-28 flex-shrink-0">{label}</span>
                      <span className={`text-gray-800 font-medium ${label === 'Status' ? 'text-denr-green' : ''}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-400">
            © {new Date().getFullYear()} Josonvon Kym V. Carabeo · Built with React + Vite + Tailwind
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/redsmite" target="_blank" rel="noopener noreferrer"
               className="text-xs text-gray-400 hover:text-denr-blue transition-colors font-medium">GitHub</a>
            <a href="https://www.linkedin.com/in/josonvon-kym-carabeo-35708239a/" target="_blank" rel="noopener noreferrer"
               className="text-xs text-gray-400 hover:text-denr-blue transition-colors font-medium">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

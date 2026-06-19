import React from 'react'
import { Github, Linkedin, ExternalLink } from 'lucide-react'
import { SectionLabel } from './About'

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-navy-900/40">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="04 // contact" />

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-sans font-semibold text-white mb-4">
                Let's build something that <span className="text-denr-light">matters</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you're working on a government digitization initiative, need a full-stack web system,
                or want to talk networking and infrastructure — I'm open to connecting.
              </p>

              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/josonvon-kym-carabeo-35708239a/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card-glass rounded-xl hover:border-denr-green/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center">
                    <Linkedin size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">LinkedIn</div>
                    <div className="text-slate-300 text-sm">josonvon-kym-carabeo</div>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors" />
                </a>

                <a href="https://github.com/redsmite"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card-glass rounded-xl hover:border-denr-green/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-center">
                    <Github size={16} className="text-slate-300" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">GitHub</div>
                    <div className="text-slate-300 text-sm">github.com/redsmite</div>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Terminal card */}
            <div className="card-glass rounded-xl overflow-hidden">
              <div className="bg-navy-900/80 border-b border-slate-700/50 px-4 py-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-denr-light/70" />
                <span className="font-mono text-xs text-slate-500 ml-2">kym — terminal</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <p><span className="text-denr-light">$</span> <span className="text-slate-300">whoami</span></p>
                <p className="text-slate-400 pl-2">Josonvon Kym V. Carabeo</p>
                <p className="text-slate-400 pl-2">Administrative Officer, DENR-NCR</p>
                <p className="text-slate-400 pl-2">Full-Stack Developer &amp; Network Admin</p>
                <p className="mt-3"><span className="text-denr-light">$</span> <span className="text-slate-300">cat skills.txt | grep certified</span></p>
                <p className="text-slate-400 pl-2">CCNA — Cisco Certified Network Associate</p>
                <p className="mt-3"><span className="text-denr-light">$</span> <span className="text-slate-300">echo $STATUS</span></p>
                <p className="text-slate-400 pl-2">
                  <span className="text-denr-light animate-pulse">▊</span> Open to collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/60 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} Josonvon Kym V. Carabeo — Built with React + Vite + Tailwind
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/redsmite" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-slate-500 hover:text-denr-light transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/josonvon-kym-carabeo-35708239a/" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-slate-500 hover:text-denr-light transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

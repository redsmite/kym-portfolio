import React from 'react'
import { MapPin, Building2, Award } from 'lucide-react'

const highlights = [
  { icon: Building2, label: 'Employer', value: 'DENR-NCR, Philippines' },
  { icon: MapPin, label: 'Location', value: 'Quezon City, NCR' },
  { icon: Award, label: 'Certification', value: 'CCNA Certified' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <SectionLabel label="01 // about" />

        <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
          {/* Photo + info */}
          <div>
            <div className="relative inline-block mb-8">
              <div className="w-52 h-52 rounded-2xl overflow-hidden border-2 border-denr-green/30">
                {/* Placeholder - replace src with actual photo path after setup */}
                <div className="w-full h-full bg-navy-800 flex items-center justify-center">
                  <span className="font-mono text-denr-light text-4xl font-semibold">K</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-denr-muted/40 border border-denr-green/30 rounded-xl flex items-center justify-center">
                <Award size={22} className="text-denr-light" />
              </div>
            </div>

            <div className="space-y-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-denr-muted/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-denr-light" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block">{label}</span>
                    <span className="text-slate-300 text-sm">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl font-sans font-semibold text-white mb-6 leading-snug">
              Building the digital backbone of <span className="text-denr-light">Philippine government</span> systems
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
              <p>
                I'm a full-stack web developer and CCNA-certified network professional serving as Administrative Officer at{' '}
                <span className="text-slate-300 font-medium">DENR-NCR</span>, contributing to the agency's ongoing digital transformation. My work sits at the intersection of government operations, software engineering, and network infrastructure.
              </p>
              <p>
                My primary stack is JavaScript — React on the frontend, Node/Express on the backend — but I build production systems using Laravel, Django, FastAPI, and Docker as the project demands. I'm currently expanding into Python scripting and AI-assisted workflows to bring automation to government processes.
              </p>
              <p>
                On the networking side, I manage VLANs, Spanning Tree, DHCP, firewalls, and complex routing protocols (OSPF, EIGRP) for government networks, with a sharp focus on stability and security.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Laravel', 'Node.js', 'Docker', 'CCNA', 'Python', 'MySQL'].map(tag => (
                <span key={tag} className="px-3 py-1 font-mono text-xs border border-denr-green/25 text-denr-light rounded bg-denr-muted/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-denr-light tracking-widest uppercase">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-denr-green/30 to-transparent" />
    </div>
  )
}

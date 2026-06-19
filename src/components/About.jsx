import React from 'react'
import { MapPin, Building2, Award } from 'lucide-react'
import photo from '../assets/photo.jpg' 


const highlights = [
  { icon: Building2, label: 'Employer',       value: 'DENR-NCR, Philippines' },
  { icon: MapPin,    label: 'Location',       value: 'Quezon City, NCR' },
  { icon: Award,     label: 'Certification',  value: 'CCNA Certified' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="About Me" />

        <div className="grid md:grid-cols-2 gap-16 items-start mt-10">
          {/* Photo + quick facts */}
          <div>
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <div className="w-full h-full flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg, #e8f2fc, #e8f5ec)' }}>
                  <img 
                    src={photo} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-white border border-gray-100 shadow rounded-xl flex items-center justify-center">
                <Award size={20} className="text-denr-green" />
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-denr-blue-pale flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-denr-blue" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block font-medium">{label}</span>
                    <span className="text-gray-800 text-sm font-medium">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Building the digital backbone of{' '}
              <span className="text-denr-green">Philippine government</span> systems
            </h2>

            <div className="space-y-4 text-gray-500 leading-relaxed text-sm md:text-base">
              <p>
                I'm a full-stack web developer and CCNA-certified network professional serving as Administrative Officer at{' '}
                <span className="text-gray-800 font-semibold">DENR-NCR</span>, contributing to the agency's ongoing digital transformation. My work sits at the intersection of government operations, software engineering, and network infrastructure.
              </p>
              <p>
                My primary stack is JavaScript — React on the frontend, Node/Express on the backend — but I build production systems with Laravel, Django, FastAPI, and Docker as the project demands. I'm expanding into Python scripting and AI-assisted workflows to bring automation to government processes.
              </p>
              <p>
                On the networking side, I manage VLANs, Spanning Tree, DHCP, firewalls, and complex routing protocols (OSPF, EIGRP) for government networks, with a focus on stability and security.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Laravel', 'Node.js', 'Docker', 'CCNA', 'Python', 'MySQL'].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium border border-gray-200 bg-white text-gray-600 rounded-full">
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
    <div className="flex items-center gap-3 mb-2">
      <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #0d5ea6, #1a7a3a)' }} />
      <span className="text-xs font-bold text-denr-blue uppercase tracking-widest">{label}</span>
    </div>
  )
}

import React from 'react'
import { ExternalLink, Server, Globe } from 'lucide-react'
import { SectionLabel } from './About'

const projects = [
  {
    name: 'iCOPS',
    description: 'DENR-NCR i-Centralized Online Permitting and Services System.',
    url: 'https://denrncrsys.online:8208/',
    tags: ['Government', 'Web App', 'Internal'],
    type: 'gov',
  },
  {
    name: 'WIIMS',
    description: 'WRUS Integrated Information Management System — tracks and manages water permit and water user data for DENR-NCR.',
    url: 'https://denrncrsys.online:8014/',
    tags: ['Government', 'Inventory', 'Internal'],
    type: 'gov',
  },
  {
    name: 'COTS',
    description: 'Certificate of Transshipment Online System, streamlining transshipment certificates from Port lntegrated Clearance Office (PICO).',
    url: 'https://denrncrsys.online:8001/',
    tags: ['Government', 'Transactions', 'Internal'],
    type: 'gov',
  },
  {
    name: 'Fleet Management System',
    description: 'Vehicle fleet tracking and management system for government motor pool operations at DENR-NCR.',
    url: 'https://denrncrsys.online:8205/fleet/login/',
    tags: ['Government', 'Fleet', 'Internal'],
    type: 'gov',
  },
  {
    name: 'WRUS Asset Tracker',
    description: 'Asset tracking system for the Water Resources Unit, deployed on Firebase for real-time monitoring and reporting.',
    url: 'https://wrus-asset-tracking-system.web.app/',
    tags: ['Firebase', 'React', 'Asset Management'],
    type: 'public',
  },
  {
    name: 'CSC Reviewer PH',
    description: 'Civil Service Commission exam reviewer for Filipino applicants — a free public tool to help candidates prepare for government employment exams.',
    url: 'https://csc-reviewer-ph.web.app/',
    tags: ['Firebase', 'React', 'Education', 'Public'],
    type: 'public',
  },
  {
    name: 'Subnetting Exercise',
    description: 'Interactive subnetting practice tool for networking students and professionals studying for CCNA and similar certifications.',
    url: 'https://subnet-exercise.web.app/',
    tags: ['Firebase', 'Networking', 'Education'],
    type: 'public',
  },
]

const typeStyles = {
  gov: 'border-denr-green/20',
  public: 'border-blue-500/20',
}

const typeBadge = {
  gov: 'bg-denr-muted/20 text-denr-light border-denr-green/30',
  public: 'bg-blue-900/20 text-blue-400 border-blue-500/30',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel label="01 // projects" />

        <div className="flex items-end justify-between mt-6 mb-12 flex-wrap gap-4">
          <h2 className="text-3xl font-sans font-semibold text-white">
            Deployed systems & public tools
          </h2>
          <div className="flex gap-3 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-denr-light" /> Government
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-blue-400" /> Public
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-glass rounded-xl p-5 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-200 group border ${typeStyles[project.type]}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 border border-slate-700/50 flex items-center justify-center">
                    {project.type === 'gov'
                      ? <Server size={16} className="text-denr-light" />
                      : <Globe size={16} className="text-blue-400" />
                    }
                  </div>
                  
                  {/* LIVE INDICATOR BADGE */}
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-red-950/30 border border-red-500/20 rounded-md font-mono text-[10px] tracking-wider text-red-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    LIVE
                  </div>
                </div>

                <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors mt-1" />
              </div>

              <div>
                <h3 className="font-mono font-semibold text-white text-sm mb-2">{project.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className={`px-2 py-0.5 font-mono text-xs border rounded ${typeBadge[project.type]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
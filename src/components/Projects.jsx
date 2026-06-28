import React, { useState } from 'react'
import { ExternalLink, Server, Globe, Loader2 } from 'lucide-react'
import { SectionLabel } from './About'

const projects = [
  {
    name: 'iCOPS',
    description: 'DENR-NCR i-Centralized Online Permitting and Services System. Aimed to centralized all DENR-NCR services into one system.',
    url: 'https://denrncrsys.online:8208/',
    tags: ['Government', 'Web App', 'Public'],
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
    tags: ['Government', 'Certificate', 'Internal'],
    type: 'gov',
  },
  {
    name: 'CAMS',
    description: 'Consumable Asset Management System, Used by the procurement section to distribute and inventory of consumable items, aimed to centralized all the regional\'s consumable items',
    url: 'https://denrncrsys.online:8002/',
    tags: ['Government', 'Inventory', 'Internal'],
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
    description: 'Asset tracking system for the Water Resources Utilization Section, deployed on Firebase for real-time monitoring and reporting.',
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
  {
    name: 'Water Resouces Management Lecture - ENRA 2026',
    description: 'Interactive educational used to teach ENRA student with Quizzes, Power Point Presentation, Flash Cards, Learning Modules, Glossary, and Video Reference',
    url: 'https://wrus.vercel.app/',
    tags: ['React', 'Vercel', 'ENRA', 'Education'],
    type: 'public',
  },
]

export default function Projects() {
  const govProjects = projects.filter(p => p.type === 'gov')
  const publicProjects = projects.filter(p => p.type === 'public')

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="Deployed Projects" />

        <div className="flex items-end justify-between mt-4 mb-12 flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Government Systems & Personal Projects
          </h2>
          <div className="flex gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-denr-green" /> Government (DENR)
            </span>
            <span className="flex items-center gap-1.5 text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-denr-blue" /> Public
            </span>
          </div>
        </div>

        {/* Government systems */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-denr-green uppercase tracking-widest mb-5 flex items-center gap-2">
            <Server size={12} /> Government Systems
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {govProjects.map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* Public tools */}
        <div>
          <p className="text-xs font-semibold text-denr-blue uppercase tracking-widest mb-5 flex items-center gap-2">
            <Globe size={12} /> Personal Projects
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {publicProjects.map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const isGov = project.type === 'gov'
  const [isHovered, setIsHovered] = useState(false)
  const [iframeLoading, setIframeLoading] = useState(true)

  return (
    <div 
      className="relative z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIframeLoading(true) // reset loading state for next enter
      }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`card p-5 flex flex-col gap-3 group border border-gray-100 rounded-xl transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md active:scale-[0.98] ${
          isGov ? 'hover:border-denr-green' : 'hover:border-denr-blue'
        }`}
      >
        <div className="flex items-start justify-between">
          {/* Left Side Icon Container */}
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
            isGov ? 'bg-denr-green-pale group-hover:bg-denr-green/20' : 'bg-denr-blue-pale group-hover:bg-denr-blue/20'
          }`}>
            {isGov
              ? <Server size={15} className="text-denr-green" />
              : <Globe size={15} className="text-denr-blue" />
            }
          </div>

          {/* Right Side Status & External Link Indicator */}
          <div className="flex items-center gap-2 mt-0.5">
            <span className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-gray-400 group-hover:text-gray-600 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isGov ? 'bg-emerald-400' : 'bg-red-400'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${
                  isGov ? 'bg-emerald-500' : 'bg-red-500'
                }`}></span>
              </span>
              LIVE
            </span>
            
            <ExternalLink 
              size={13} 
              className={`text-gray-300 transition-colors ${
                isGov ? 'group-hover:text-denr-green' : 'group-hover:text-denr-blue'
              }`} 
            />
          </div>
        </div>

        {/* Card Content */}
        <div>
          <h3 className={`font-semibold text-gray-900 text-sm mb-1 group-hover:underline ${
            isGov ? 'group-hover:text-denr-green' : 'group-hover:text-denr-blue'
          }`}>
            {project.name}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed">{project.description}</p>
        </div>

        {/* Badge Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className={`px-2 py-0.5 text-xs rounded-full font-medium ${
              isGov ? 'bg-denr-green-pale text-denr-green' : 'bg-denr-blue-pale text-denr-blue'
            }`}>
              {tag}
            </span>
          ))}
        </div>
      </a>

      {/* ── LIVE INTERACTIVE PREVIEW POPUP ── */}
      {isHovered && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] w-72 h-44 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden pointer-events-none z-50 animate-in fade-in slide-in-from-bottom-2 duration-200 hidden md:block">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-gray-50 border-b border-gray-100 text-[10px] text-gray-400 font-mono truncate">
            <span>{project.url.replace('https://', '')}</span>
          </div>

          {/* Core Frame Container */}
          <div className="relative w-full h-full bg-gray-50">
            {iframeLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 gap-1.5">
                <Loader2 size={16} className="text-gray-400 animate-spin" />
                <span className="text-[10px] font-medium text-gray-400">Fetching preview...</span>
              </div>
            )}
            
            {/* The hidden canvas trick: Render a desktop viewport at 1152px width, then scale down using CSS scale() transformation to fit perfectly inside the 288px wide popover */}
            <iframe
              src={project.url}
              title={`${project.name} Preview`}
              className="w-[1152px] h-[640px] border-none origin-top-left"
              style={{
                transform: 'scale(0.25)', // 1152 * 0.25 = 288px
                width: '1152px',
                height: '640px',
              }}
              onLoad={() => setIframeLoading(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
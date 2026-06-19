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
    name: 'WRUS ENRA',
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
            Systems & public tools
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
            <Globe size={12} /> Public Tools
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
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-5 flex flex-col gap-3 group"
    >
      <div className="flex items-start justify-between">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
          isGov ? 'bg-denr-green-pale' : 'bg-denr-blue-pale'
        }`}>
          {isGov
            ? <Server size={15} className="text-denr-green" />
            : <Globe size={15} className="text-denr-blue" />
          }
        </div>
        <ExternalLink size={13} className="text-gray-300 group-hover:text-denr-blue transition-colors mt-1" />
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 text-sm mb-1">{project.name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className={`px-2 py-0.5 text-xs rounded-full font-medium ${
            isGov
              ? 'bg-denr-green-pale text-denr-green'
              : 'bg-denr-blue-pale text-denr-blue'
          }`}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

import React, { useState } from 'react'
import { SectionLabel } from './About'
import { Briefcase, GraduationCap, Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

// Calculates a human-readable duration between two dates.
// Pass endDate as null to use today (i.e. current role).
function calcDuration(startDate, endDate = null) {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  if (months < 0) { years--; months += 12 }
  const parts = []
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
  return parts.join(' ') || 'Less than a month'
}

const workExperienceRaw = [
  {
    title: 'Administrative Officer I',
    company: 'Department of Environment and Natural Resources – NCR',
    startDate: '2026-02-01',
    endDate: null, // null = current role, duration auto-updates
    periodLabel: 'Feb 2026 – Present',
    location: 'Quezon City, NCR, Philippines',
    type: 'Full-time',
    description: 'Records Management and Programmer — building and maintaining web systems for DENR-NCR\'s digital transformation initiatives.',
    skills: ['JavaScript', 'React', 'Laravel', 'Node.js', 'Docker', 'MySQL'],
  },
  {
    title: 'Land Management Inspector',
    company: 'Department of Environment and Natural Resources – NCR',
    startDate: '2023-04-01',
    endDate: '2026-02-01',
    periodLabel: 'Apr 2023 – Feb 2026',
    location: 'National Capital Region, Philippines',
    type: 'Full-time',
    description: 'Records Management and Field Inspection for land management operations.',
    skills: ['Records Management', 'Field Inspection', 'Documentation'],
  },
  {
    title: 'Technical Support Specialist',
    company: 'DENR-NCR',
    startDate: '2021-02-01',
    endDate: '2023-04-01',
    periodLabel: 'Feb 2021 – Apr 2023',
    location: 'National Capital Region, Philippines',
    type: 'Full-time',
    description: 'Technical troubleshooting of hardware and software, network administration, and computer programming.',
    skills: ['Network Admin', 'Hardware Support', 'Programming', 'Troubleshooting'],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    startDate: '2018-08-01',
    endDate: '2019-10-01',
    periodLabel: 'Aug 2018 – Oct 2019',
    location: 'Quezon City, NCR, Philippines',
    type: 'Freelance · Hybrid',
    description: 'Software development and web application projects for various clients.',
    skills: ['Web Development', 'Software Development'],
  },
]

// Derive current flag and live duration at render time
const workExperience = workExperienceRaw.map(job => ({
  ...job,
  current: job.endDate === null,
  duration: calcDuration(job.startDate, job.endDate),
}))

const education = [
  {
    school: 'STI Colleges',
    degree: 'Bachelor of Science in Information Technology',
    field: 'Information Technology',
    icon: '🎓',
  },
]

const certifications = [
  {
    name: 'CCNA 200-301 Bootcamp',
    issuer: 'RivanAI Cybersecurity Inc.',
    date: 'Feb 2026',
    credentialId: '748264801154',
    url: null,
    category: 'networking',
    highlight: true,
  },
  {
    name: 'Cisco Certified Network Associate (CCNA) R&S',
    issuer: 'Cisco',
    date: 'Feb 2020',
    url: null,
    category: 'networking',
    highlight: true,
  },
  {
    name: 'Network Technician Career Path',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2025',
    url: 'https://www.credly.com/badges/340810a8-090a-45eb-b370-e63f450e856e',
    category: 'networking',
  },
  {
    name: 'Junior Cybersecurity Career Path',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2026',
    url: 'https://www.credly.com/badges/8e2e3db6-cc81-411c-87dc-62d7c933a747',
    category: 'security',
  },
  {
    name: 'Fortinet Certified Fundamentals Cybersecurity',
    issuer: 'Fortinet',
    date: 'Mar 2026',
    url: 'https://www.credly.com/badges/34f2c87b-78ad-4fd8-ad03-f1dffb1f2115',
    category: 'security',
  },
  {
    name: 'Threat Landscape 3.0',
    issuer: 'Fortinet',
    date: 'Mar 2026',
    url: 'https://www.credly.com/badges/166c174a-78b8-4c3b-8d85-55f4f89564ae',
    category: 'security',
  },
  {
    name: 'ISC2 Candidate',
    issuer: 'ISC2',
    date: 'Jan 2026',
    url: 'https://www.credly.com/badges/7dfee31d-0ffd-4aef-aeb7-a6a13cb57eea',
    category: 'security',
  },
  {
    name: 'Data Science Essentials with Python',
    issuer: 'Cisco Networking Academy',
    date: 'Apr 2026',
    url: 'https://www.credly.com/badges/2bbf64da-a84c-4c22-b021-beeec330b88a',
    category: 'python',
  },
  {
    name: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    date: 'Apr 2026',
    url: 'https://www.credly.com/badges/bada56a6-caaa-48f3-93bb-b4f24e0c5844',
    category: 'python',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Apr 2026',
    url: 'https://www.credly.com/badges/573b0387-52c1-4c31-89d2-f54823e06117',
    category: 'python',
  },
  {
    name: 'IBM Skillbuild AI Fundamentals',
    issuer: 'IBM',
    date: 'Feb 2026',
    url: 'https://www.credly.com/badges/0dffb609-52f4-4692-819d-dddcf116a02e',
    category: 'ai',
  },
  {
    name: 'Linux Essentials Certification',
    issuer: 'Cisco Networking Academy',
    date: 'Apr 2026',
    url: 'https://www.credly.com/badges/00abe2c2-1815-4924-93eb-0655ed46811c',
    category: 'linux',
  },
  {
    name: 'Javascript Essentials 2',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    url: 'https://www.credly.com/badges/c5cf40b9-f075-4ed9-bc00-047c65964af3',
    category: 'web',
  },
  {
    name: 'Javascript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2025',
    url: 'https://www.credly.com/badges/c2688804-4cee-44f3-8086-5c2874d07494',
    category: 'web',
  },
  {
    name: 'CSS Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2025',
    url: 'https://www.credly.com/badges/03838656-10a8-48d6-9d5d-47a8bbdf7060',
    category: 'web',
  },
  {
    name: 'HTML Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2025',
    url: 'https://www.credly.com/badges/57729e22-f5e5-4659-870b-4b4c81ca3c6c',
    category: 'web',
  },
]

const categoryMeta = {
  networking: { label: 'Networking',    color: '#0d5ea6', bg: '#e8f2fc' },
  security:   { label: 'Cybersecurity', color: '#b91c1c', bg: '#fef2f2' },
  python:     { label: 'Python / Data', color: '#1a7a3a', bg: '#e8f5ec' },
  ai:         { label: 'AI',            color: '#6d28d9', bg: '#f5f3ff' },
  linux:      { label: 'Linux',         color: '#92400e', bg: '#fffbeb' },
  web:        { label: 'Web Dev',       color: '#0d5ea6', bg: '#e8f2fc' },
}

const CERT_PREVIEW = 6

export default function Experience() {
  const [showAllCerts, setShowAllCerts] = useState(false)
  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, CERT_PREVIEW)

  return (
    <section id="experience" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="Experience & Education" />

        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-14">
          Background & credentials
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* ── Work Experience (left 2/3) ── */}
          <div className="lg:col-span-2 space-y-0">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={15} className="text-denr-blue" />
              <span className="text-xs font-bold text-denr-blue uppercase tracking-widest">Work Experience</span>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-200" />

              <div className="space-y-0">
                {workExperience.map((job, i) => (
                  <div key={i} className="relative flex gap-5 pb-8 last:pb-0">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 mt-1">
                      <div className={`w-[38px] h-[38px] rounded-full border-2 flex items-center justify-center ${
                        job.current
                          ? 'border-denr-blue bg-denr-blue-pale'
                          : 'border-gray-200 bg-white'
                      }`}>
                        <Briefcase size={14} className={job.current ? 'text-denr-blue' : 'text-gray-400'} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 rounded-xl p-4 border ${
                      job.current ? 'border-denr-blue/20 bg-white shadow-sm' : 'border-gray-100 bg-white'
                    }`}>
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
                            {job.current && (
                              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-denr-green-pale text-denr-green">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-denr-blue font-medium mt-0.5">{job.company}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-xs text-gray-500 font-medium">{job.periodLabel}</div>
                          <div className="text-xs text-gray-400">{job.duration}</div>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{job.description}</p>

                      <div className="flex items-center gap-1.5 mt-1 mb-2">
                        <span className="text-xs text-gray-400">{job.location}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-400">{job.type}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {job.skills.map(s => (
                          <span key={s} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500 font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={15} className="text-denr-green" />
                <span className="text-xs font-bold text-denr-green uppercase tracking-widest">Education</span>
              </div>

              {education.map((ed, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white">
                  <div className="w-12 h-12 rounded-xl bg-denr-blue-pale flex items-center justify-center text-xl flex-shrink-0">
                    {ed.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{ed.degree}</h3>
                    <p className="text-xs text-denr-blue font-medium mt-0.5">{ed.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Certifications (right 1/3) ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={15} className="text-denr-green" />
              <span className="text-xs font-bold text-denr-green uppercase tracking-widest">Certifications</span>
            </div>

            <div className="space-y-2">
              {visibleCerts.map((cert, i) => {
                const meta = categoryMeta[cert.category]
                const inner = (
                  <div
                    key={i}
                    className={`group flex items-start gap-3 p-3 rounded-xl border transition-all duration-150 ${
                      cert.highlight
                        ? 'border-denr-blue/25 bg-denr-blue-pale/40'
                        : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
                    } ${cert.url ? 'cursor-pointer' : ''}`}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: meta.bg }}
                    >
                      <Award size={12} style={{ color: meta.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <p className="text-xs font-semibold text-gray-800 leading-snug">{cert.name}</p>
                        {cert.url && (
                          <ExternalLink size={11} className="text-gray-300 group-hover:text-denr-blue transition-colors flex-shrink-0 mt-0.5" />
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{cert.issuer}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="px-1.5 py-0.5 text-[10px] font-medium rounded"
                          style={{ background: meta.bg, color: meta.color }}
                        >
                          {meta.label}
                        </span>
                        <span className="text-[10px] text-gray-400">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                )

                return cert.url ? (
                  <a key={i} href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                )
              })}
            </div>

            {certifications.length > CERT_PREVIEW && (
              <button
                onClick={() => setShowAllCerts(v => !v)}
                className="mt-4 w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-500 hover:border-denr-blue hover:text-denr-blue transition-colors bg-white"
              >
                {showAllCerts ? (
                  <><ChevronUp size={13} /> Show less</>
                ) : (
                  <><ChevronDown size={13} /> Show all {certifications.length} certifications</>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

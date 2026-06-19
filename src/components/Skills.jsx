import React, { useState } from 'react'
import { SectionLabel } from './About'

const skillGroups = [
  {
    category: 'Development & Tools',
    color: 'denr',
    skills: [
      'React', 'React Native', 'Node.js / Express', 'Laravel', 'Django', 'WordPress', "JQuery",
      'FastAPI', 'Docker', 'GitHub', 'Kotlin / Gradle', 'SQL',
    ]
  },
  {
    category: 'Networking',
    color: 'blue',
    skills: [
      'VLAN / VTP', 'Spanning Tree (STP)', 'OSPF / EIGRP / RIP', 'DHCP / DNS',
      'Load Balancing', 'Port Aggregation', 'ACL', 'VPN / SSH / FTP',
      'IPv4 / IPv6 / Subnetting', 'TCP/IP Stack',
    ]
  },
  {
    category: 'Cloud & Deployment',
    color: 'purple',
    skills: [
      'Firebase', 'Supabase', 'Vercel', 'Netlify',
    ]
  },
  {
    category: 'Cybersecurity',
    color: 'red',
    skills: [
      'Firewall Config', 'Nmap', 'MITRE ATT&CK', 'Kali Linux',
      'Wireshark', 'SANS Threat Intelligence',
    ]
  },
  {
    category: 'Automation & AI',
    color: 'yellow',
    skills: [
      'Python Libraries', 'PowerShell Scripting',
      'Claude Code', 'GitHub Copilot', 'AI-Assisted Dev',
    ]
  },
  {
    category: 'Government Admin',
    color: 'slate',
    skills: [
      'Records Management', 'Documentation',
      'Procurement Coordination', 'Budget Preparation & Monitoring',
    ]
  },
]

const colorMap = {
  denr:   { tag: 'border-denr-green/30 bg-denr-muted/15 text-denr-light',    header: 'text-denr-light',    dot: 'bg-denr-light' },
  blue:   { tag: 'border-blue-500/30 bg-blue-900/15 text-blue-400',          header: 'text-blue-400',      dot: 'bg-blue-400' },
  purple: { tag: 'border-purple-500/30 bg-purple-900/15 text-purple-400',    header: 'text-purple-400',    dot: 'bg-purple-400' },
  red:    { tag: 'border-red-500/30 bg-red-900/15 text-red-400',             header: 'text-red-400',       dot: 'bg-red-400' },
  yellow: { tag: 'border-yellow-500/30 bg-yellow-900/15 text-yellow-400',    header: 'text-yellow-400',    dot: 'bg-yellow-400' },
  slate:  { tag: 'border-slate-500/30 bg-slate-800/30 text-slate-400',       header: 'text-slate-400',     dot: 'bg-slate-400' },
}

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="py-24 px-6 bg-navy-900/40">
      <div className="max-w-5xl mx-auto">
        <SectionLabel label="03 // skills" />

        <h2 className="text-3xl font-sans font-semibold text-white mt-6 mb-12">
          A broad stack, built for government-scale problems
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const c = colorMap[group.color]
            const isActive = active === group.category
            return (
              <div
                key={group.category}
                onMouseEnter={() => setActive(group.category)}
                onMouseLeave={() => setActive(null)}
                className={`card-glass rounded-xl p-5 transition-all duration-200 cursor-default ${isActive ? 'border-opacity-40 scale-[1.01]' : ''}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <h3 className={`font-mono text-xs font-medium tracking-wider uppercase ${c.header}`}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className={`px-2 py-1 font-mono text-xs border rounded ${c.tag}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { SectionLabel } from './About'

const skillGroups = [
  {
    category: 'Development & Tools',
    color: 'blue',
    skills: ['React', 'React Native', 'Node.js / Express', 'Laravel', 'Django', 'FastAPI', 'Docker', 'GitHub', 'Kotlin / Gradle', 'SQL'],
  },
  {
    category: 'Networking',
    color: 'green',
    skills: ['VLAN / VTP', 'Spanning Tree', 'OSPF / EIGRP / RIP', 'DHCP / DNS', 'Load Balancing', 'Port Aggregation', 'ACL', 'VPN / SSH / FTP', 'IPv4 / IPv6', 'Subnetting'],
  },
  {
    category: 'Cloud & Deployment',
    color: 'blue',
    skills: ['Firebase', 'Supabase', 'Vercel', 'Netlify'],
  },
  {
    category: 'Cybersecurity',
    color: 'red',
    skills: ['Firewall Config', 'Nmap', 'MITRE ATT&CK', 'Kali Linux', 'Wireshark', 'SANS Threat Intel'],
  },
  {
    category: 'Automation & AI',
    color: 'purple',
    skills: ['Python Libraries', 'PowerShell Scripting', 'Claude Code', 'GitHub Copilot', 'AI-Assisted Dev'],
  },
  {
    category: 'Government Admin',
    color: 'gray',
    skills: ['Records Management', 'Documentation', 'Procurement Coordination', 'Budget Monitoring'],
  },
]

const colorMap = {
  blue:   { bg: '#e8f2fc', text: '#0d5ea6', border: '#bdd6f5', dot: '#0d5ea6' },
  green:  { bg: '#e8f5ec', text: '#1a7a3a', border: '#b2dfc0', dot: '#1a7a3a' },
  red:    { bg: '#fef2f2', text: '#b91c1c', border: '#fecaca', dot: '#ef4444' },
  purple: { bg: '#f5f3ff', text: '#6d28d9', border: '#ddd6fe', dot: '#7c3aed' },
  gray:   { bg: '#f7f8fa', text: '#4a5568', border: '#e2e8f0', dot: '#718096' },
}

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="Skills & Expertise" />

        <div className="flex items-end justify-between mt-4 mb-12 flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            A broad stack, built for government-scale problems
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const c = colorMap[group.color]
            const isActive = active === group.category
            return (
              <div
                key={group.category}
                onMouseEnter={() => setActive(group.category)}
                onMouseLeave={() => setActive(null)}
                className={`card p-5 cursor-default ${isActive ? 'scale-[1.01]' : ''}`}
                style={isActive ? { borderColor: c.border, boxShadow: `0 4px 20px ${c.bg}` } : {}}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: c.dot }} />
                  <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: c.text }}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-full border"
                          style={{ background: c.bg, color: c.text, borderColor: c.border }}>
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

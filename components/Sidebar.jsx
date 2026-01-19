'use client'
import React, { useState, useEffect } from 'react'
import { Home, User, Briefcase, Mail, Code2, Github, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import TextLogo from './TextLogo'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero')

  // Icons for Navigation
  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'services', icon: Code2, label: 'Services' },
    { id: 'work', icon: Briefcase, label: 'Work' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ]

  // Social Links (Bottom of sidebar)
  const socialItems = [
    { icon: Github, href: 'https://github.com/miles781/' },
    { icon: Twitter, href: 'https://x.com/IgogoE39012' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/igogo-ebenezer-47a483358/' },
  ]

  return (
    <>
      {/* --- DESKTOP SIDEBAR (Fixed Left) --- */}
      <motion.aside 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="hidden md:flex flex-col justify-between items-center fixed left-0 top-0 bottom-0 w-24 bg-page/95 backdrop-blur-xl border-r border-white/5 z-50 py-8"
      >
        {/* Top: Logo Icon (Simplified) */}
        <a href="#hero" className="w-10 h-10 flex items-center justify-center bg-card rounded-xl border border-white/10 text-primary hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all duration-300">
          <span className="font-mono font-bold text-xl">E</span>
        </a>

        {/* Middle: Navigation Pills */}
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className="relative group flex items-center justify-center"
            >
              {/* Active Indicator Line */}
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -left-[1.65rem] w-1 h-8 bg-primary rounded-r-full" 
                />
              )}
              
              <div className={`p-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}>
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>

              {/* Tooltip */}
              <span className="absolute left-14 px-2 py-1 bg-card border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom: Socials */}
        <div className="flex flex-col gap-4">
          {socialItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors"
            >
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </motion.aside>

      {/* --- MOBILE BOTTOM BAR (Fixed Bottom) --- */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-4 left-4 right-4 h-16 bg-card/90 backdrop-blur-lg border border-white/10 rounded-2xl z-50 flex items-center justify-around px-2 shadow-2xl"
      >
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActiveSection(item.id)}
            className={`p-2 rounded-full transition-all ${
              activeSection === item.id ? 'text-primary bg-primary/10' : 'text-slate-400'
            }`}
          >
            <item.icon className="w-5 h-5" />
          </a>
        ))}
      </motion.nav>
    </>
  )
}

export default Sidebar
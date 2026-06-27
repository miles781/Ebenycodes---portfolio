'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Cpu, Workflow } from 'lucide-react' 

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232DD4BF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary font-mono text-2xl">01.</span> 
                About Me
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6 text-lg text-slate-400 font-sans leading-relaxed">
                <p>
                    <span className="text-white font-semibold">Hello!</span> I'm Ebenezer, a <span className="text-primary">Full-Stack & AI Product Engineer</span> from Calabar, Nigeria. I build production-grade mobile apps and intelligent web systems — focused on solving real institutional and market problems across Africa.
                </p>
                <p>
                    I've shipped <span className="text-white">university-scale mobile platforms</span> (clearance systems, exam management for 10 roles across 135 screens), <span className="text-white">quantitative fintech tools</span> (regime detection engines, momentum dashboards), and <span className="text-white">consumer apps</span> (food delivery, edtech SaaS) — all for real clients and organizations.
                </p>
                <p>
                    I work at the intersection of <span className="text-primary">AI-assisted product engineering</span> and systems architecture — using React Native, Next.js, FastAPI, Supabase, and LLM integration to build software that actually ships and solves problems.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-2">
                    <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                        <Cpu className="w-3 h-3 text-primary" /> React Native
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                        <Workflow className="w-3 h-3 text-primary" /> Next.js
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                        <Cpu className="w-3 h-3 text-primary" /> FastAPI
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                        <Workflow className="w-3 h-3 text-primary" /> LLMs
                    </span>
                </div>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="p-8 bg-card border border-white/5 rounded-2xl relative overflow-hidden hover:border-primary/30 transition-colors duration-500">
                    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"/>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                            <div className="w-3 h-3 rounded-full bg-green-500"/>
                        </div>
                        <div className="text-xs font-mono text-slate-500">config.ts</div>
                    </div>
                    
                    <div className="font-mono text-sm space-y-3">
                        <div>
                            <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = <span className="text-white">{`{`}</span>
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">name:</span> <span className="text-green-400">'Ebenezer Igogo'</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">location:</span> <span className="text-green-400">'Calabar, Nigeria'</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">mobile:</span> [<span className="text-orange-400">'React Native'</span>, <span className="text-orange-400">'Expo'</span>, <span className="text-orange-400">'TypeScript'</span>],
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">web:</span> [<span className="text-cyan-400">'Next.js'</span>, <span className="text-cyan-400">'FastAPI'</span>, <span className="text-cyan-400">'Supabase'</span>],
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">clients:</span> [<span className="text-pink-400">'Unical'</span>, <span className="text-pink-400">'Springcore Africa'</span>, <span className="text-pink-400">'Angelo Academy'</span>],
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">focus:</span> <span className="text-green-400">'African Market SaaS + AI Products'</span>
                        </div>
                        <div className="text-white">{`};`}</div>
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
                        <Workflow className="w-24 h-24 text-white" />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default About

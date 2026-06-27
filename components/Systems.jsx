'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Server, Network, Zap, Database, Terminal, ArrowUpRight } from 'lucide-react'

const Systems = () => {
  return (
    <section id="systems" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary font-mono text-2xl">03.</span> 
                Deep Dive
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl text-lg">
                A close look at one real system — the problem, the architecture, and the outcome.
            </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/10 pb-4">
              <div>
                  <div className="text-primary font-mono text-sm mb-1">CASE_STUDY_01</div>
                  <h3 className="text-3xl font-bold text-white">SmartClear X</h3>
                  <p className="text-slate-400 text-lg">AI-Driven University Clearance Platform</p>
              </div>
              <div className="hidden md:flex gap-2 mt-4 md:mt-0">
                    <div className="px-2 py-1 rounded bg-slate-800 border border-white/5 text-xs font-mono text-slate-500">REAL PROJECT</div>
                    <div className="px-2 py-1 rounded bg-slate-800 border border-white/5 text-xs font-mono text-green-500">DELIVERED</div>
              </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 aspect-video group-hover:border-primary/30 transition-colors duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 gap-4 p-6">
                        <Terminal className="w-12 h-12 text-slate-600" />
                        <p className="text-slate-600 text-xs font-mono text-center">Screenshots coming soon</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                    {['React Native', 'Expo', 'TypeScript', 'Expo Router', 'AI/LLM'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-slate-800 border border-white/5 text-slate-300 text-xs font-mono hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-white/5">
                    <p className="text-slate-500 text-xs font-mono mb-1">CLIENT</p>
                    <p className="text-white text-sm font-semibold">University of Calabar — Commissioned by staff member</p>
                    <p className="text-slate-500 text-xs font-mono mt-3 mb-1">STATUS</p>
                    <p className="text-green-400 text-sm font-semibold">MVP Delivered · Interest from 2 additional universities</p>
                </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors">
                    <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                        <ShieldCheck className="w-4 h-4 text-red-400" /> The Problem
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Nigerian universities run student clearance on paper — a process that takes weeks, loses documents, and blocks graduation. Staff at University of Calabar commissioned a digital solution.
                    </p>
                </div>

                <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors">
                    <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                        <Server className="w-4 h-4 text-purple-400" /> The Architecture
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Multi-role mobile platform: Students, Department Officers, Bursary, Library, and Admin each get role-scoped screens. AI layer handles document validation and status prediction.
                    </p>
                </div>

                <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors md:col-span-2">
                    <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                        <Network className="w-4 h-4 text-primary" /> System Flow
                    </h4>
                    <div className="p-3 bg-slate-900 rounded border border-white/5 font-mono text-xs text-primary/80 overflow-x-auto">
                        {`> Student Request → Department Queue → AI Document Check → Approval Chain → Clearance Certificate`}
                    </div>
                </div>

                <div className="md:col-span-2 relative pl-6 border-l-2 border-primary">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
                    <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                        <Zap className="w-4 h-4 text-yellow-400" /> Outcome
                    </h4>
                    <p className="text-slate-300 text-lg">
                        MVP delivered and demonstrated to commissioning staff at University of Calabar. Interest received from staff at two additional Nigerian universities.
                    </p>
                </div>

            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-mono text-sm hover:bg-primary/10 transition-colors">
            Want a system like this built? Let's talk
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Systems

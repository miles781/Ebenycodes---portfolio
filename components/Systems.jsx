'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Server, Network, Zap, Database, Terminal } from 'lucide-react'

const systemsData = [
  {
    id: 1,
    title: 'SmartClear X',
    subtitle: 'AI-Driven University Clearance Platform',
    problem: 'Nigerian universities run student clearance on paper and manual department visits — a process that takes weeks, loses documents, and blocks graduation. A Unical staff member commissioned a digital solution.',
    architecture: 'Multi-role mobile architecture: Students, Department Officers, Bursary, Library, and Admin each get role-scoped screens. AI layer handles document validation and clearance status prediction.',
    agents: 'Student Request → Department Queue → AI Document Check → Approval Chain → Clearance Certificate.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'AI/LLM'],
    outcome: 'MVP delivered and demonstrated to commissioning staff at University of Calabar. Interest received from staff at two additional Nigerian universities.'
  },
  {
    id: 2,
    title: 'RAMCE',
    subtitle: 'Regime-Aware Momentum Composite Engine',
    problem: 'Angelo Trading Academy needed a system to track regime shifts across 25 financial instruments — crypto, forex, commodities, and synthetic indices — and surface actionable momentum signals for traders.',
    architecture: 'Next.js frontend + FastAPI backend + Supabase database. Quantitative pipeline runs GARCH volatility modeling, Hurst exponent analysis for trend persistence, and Shannon entropy for market randomness detection.',
    agents: 'Data Ingestion → Regime Classifier → Momentum Scorer → Signal Aggregator → Dashboard Renderer.',
    techStack: ['Next.js', 'FastAPI', 'Supabase', 'Python', 'GARCH', 'PostgreSQL'],
    outcome: 'Production-grade system serving Angelo Trading Academy. Covers 25 instruments across 4 asset classes with real-time regime classification.'
  },
  {
    id: 3,
    title: 'Smart Exam Ecosystem',
    subtitle: '10-Role University Examination Platform',
    problem: 'University examination management in Nigerian institutions involves 10+ distinct stakeholder roles with no unified digital system — leading to exam leakages, attendance fraud, and result tampering.',
    architecture: '135-screen React Native application with strict role-based access control. Each of the 10 roles (Student, Invigilator, HOD, Dean, Registrar, VC, and more) gets a completely scoped interface with appropriate permissions.',
    agents: 'Role Auth → Scoped Dashboard → Exam Assignment → Real-time Monitoring → Result Processing → Certificate Generation.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Role-Based Auth', 'Mock API'],
    outcome: 'Full MVP prototype with 135 screens completed. Built for University of Calabar context — positioned for institutional procurement across Nigerian tertiary institutions.'
  }
]

const Systems = () => {
  return (
    <section id="systems" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary font-mono text-2xl">03.</span> 
                Featured Systems
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl text-lg">
                Production-grade systems built for <span className="text-white">real institutions and organizations</span> — with documented architecture, honest scope, and verifiable outcomes.
            </p>
        </div>

        <div className="space-y-24">
          {systemsData.map((system, index) => (
            <motion.div 
              key={system.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/10 pb-4">
                  <div>
                      <div className="text-primary font-mono text-sm mb-1">SYSTEM_ID_0{system.id}</div>
                      <h3 className="text-3xl font-bold text-white">{system.title}</h3>
                      <p className="text-slate-400 text-lg">{system.subtitle}</p>
                  </div>
                  <div className="hidden md:flex gap-2">
                        <div className="px-2 py-1 rounded bg-slate-800 border border-white/5 text-xs font-mono text-slate-500">REAL PROJECT</div>
                        <div className="px-2 py-1 rounded bg-slate-800 border border-white/5 text-xs font-mono text-green-500">DELIVERED</div>
                  </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                <div className="lg:col-span-5">
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 aspect-video group-hover:border-primary/30 transition-colors duration-500">
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                             <Terminal className="w-16 h-16 text-slate-700" />
                        </div>
                        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {system.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-slate-800 border border-white/5 text-slate-300 text-xs font-mono hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                            <ShieldCheck className="w-4 h-4 text-red-400" /> Problem Context
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {system.problem}
                        </p>
                    </div>

                    <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                            <Server className="w-4 h-4 text-purple-400" /> Architecture
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {system.architecture}
                        </p>
                    </div>

                    <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors md:col-span-2">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                            <Network className="w-4 h-4 text-primary" /> System Workflow
                        </h4>
                        <div className="p-3 bg-slate-900 rounded border border-white/5 font-mono text-xs text-primary/80 overflow-x-auto">
                            {`> ${system.agents}`}
                        </div>
                    </div>

                    <div className="md:col-span-2 relative pl-6 border-l-2 border-primary">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
                        <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                            <Zap className="w-4 h-4 text-yellow-400" /> Outcome
                        </h4>
                        <p className="text-slate-300 text-lg">
                            {system.outcome}
                        </p>
                    </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-32 p-10 rounded-3xl bg-card border border-white/5 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <Database className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-bold text-white mb-4">Engineering Philosophy</h3>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
                "I don't just write scripts; I architect <span className="text-primary">living systems</span>. My approach combines rigorous engineering with real-world problem context — building software that solves institutional and market problems that generic tools simply cannot address."
            </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Systems

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Settings2, BrainCircuit, LayoutDashboard, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

const processSteps = [
  {
    id: '01',
    title: 'Problem Framing',
    description: 'Deep dive into business challenges to identify AI opportunities with measurable impact.',
    icon: Lightbulb,
    activities: ['Stakeholder Interviews', 'Workflow Mapping', 'KPI Definition'],
    output: 'Opportunity Assessment Doc'
  },
  {
    id: '02',
    title: 'System Design',
    description: 'Architecting the agentic swarm and data flow infrastructure.',
    icon: Settings2,
    activities: ['Agent Role Definition', 'Data Pipeline Design', 'Tech Stack Selection'],
    output: 'System Architecture Blueprint'
  },
  {
    id: '03',
    title: 'Agent Development',
    description: 'Coding the reasoning engines and tool-use capabilities of the agents.',
    icon: BrainCircuit,
    activities: ['Prompt Engineering', 'Tool Integration', 'Memory Systems'],
    output: 'Functional Agent Core'
  },
  {
    id: '04',
    title: 'Interface (UI/UX)',
    description: 'Building the "Agentic UI" that allows users to collaborate with the system.',
    icon: LayoutDashboard,
    activities: ['Adaptive Components', 'Real-time States', 'Feedback Loops'],
    output: 'Interactive Frontend'
  },
  {
    id: '05',
    title: 'Deployment',
    description: 'Launching, monitoring, and refining based on real-world interaction data.',
    icon: Zap,
    activities: ['CI/CD Pipeline', 'Eval Frameworks', 'Performance Tuning'],
    output: 'Production Release'
  }
]

const Process = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="text-primary font-mono text-2xl">05.</span> 
                The Process
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                A rigorous, scientific approach to building <span className="text-white">non-deterministic software</span>.
            </p>
        </div>

        {/* The Pipeline Visualization */}
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2"></div>

            <div className="space-y-12">
                {processSteps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Content Side */}
                            <div className={`flex-1 w-full ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                <div className={`p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 relative group`}>
                                    <div className={`absolute top-6 ${isEven ? 'right-6' : 'left-6'} opacity-10 group-hover:opacity-20 transition-opacity`}>
                                        <step.icon className="w-12 h-12 text-primary" />
                                    </div>
                                    
                                    <div className="text-primary font-mono text-sm mb-2">PHASE_{step.id}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4">{step.description}</p>
                                    
                                    {/* Activities Pill List */}
                                    <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                                        {step.activities.map((act, i) => (
                                            <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wide font-bold text-slate-500 bg-page rounded border border-white/5">
                                                {act}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Center Node */}
                            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-page border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                            </div>

                            {/* Spacer for the other side */}
                            <div className="flex-1 hidden md:block"></div>
                        </motion.div>
                    )
                })}
            </div>
        </div>

        {/* Deliverable Output */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>FINAL_OUTPUT: Production-Grade Autonomous System</span>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Process
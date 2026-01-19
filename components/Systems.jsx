'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Server, Network, Code2, Zap, Database, Terminal } from 'lucide-react'
import Image from 'next/image'

const systemsData = [
  {
    id: 1,
    title: 'Autonomous Support Platform',
    subtitle: 'Multi-Agent Orchestration',
    // Ensure these image paths exist in your public folder, or use placeholders
    image: '/work-1.png', 
    problem: 'Enterprise customers needed 24/7 support with complex, multi-step issue resolution requiring coordination.',
    architecture: 'Hub-and-Spoke architecture: Central reasoning engine coordinates specialized agents for Triage, QA, and Liaison.',
    agents: 'Triage Agent → Technical Specialist → Customer Liaison → Quality Assurance.',
    techStack: ['Next.js', 'OpenAI API', 'LangChain', 'Pinecone', 'Redis'],
    outcome: 'Reduced resolution time by 92% (5 days → 2 hours). Handled 87% of inquiries autonomously.'
  },
  {
    id: 2,
    title: 'Intelligent Analytics Core',
    subtitle: 'Automated BI Pipeline',
    image: '/work-2.png',
    problem: 'Business teams were drowning in data. Only 22% of available data was effectively utilized for decision making.',
    architecture: 'Real-time processing pipeline using Kafka and TensorFlow for pattern detection and anomaly flagging.',
    agents: 'Data Quality Sentinel → Pattern Matcher → Insight Synthesizer → Visualization Renderer.',
    techStack: ['Python', 'TensorFlow', 'D3.js', 'PostgreSQL', 'FastAPI'],
    outcome: 'Increased data utilization to 89%. Identified $2.3M in cost-saving opportunities in the first quarter.'
  },
  {
    id: 3,
    title: 'Adaptive Commerce Engine',
    subtitle: 'Real-time Personalization',
    image: '/work-3.png',
    problem: 'Static product displays led to low conversion rates (1.8%) and high cart abandonment (68%).',
    architecture: 'Edge-computed personalization engine modifying UI components based on user clickstream and intent.',
    agents: 'Behavior Analyst → Inventory Optimizer → Pricing Dynamic → UX Mutator.',
    techStack: ['Next.js', 'Vercel Edge', 'Firebase', 'Stripe', 'TensorFlow.js'],
    outcome: 'Conversion rate jumped to 4.7%. Cart abandonment dropped by 42% via predictive incentives.'
  }
]

const Systems = () => {
  return (
    <section id="systems" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary font-mono text-2xl">03.</span> 
                Featured Systems
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl text-lg">
                Production-grade AI architectures demonstrating <span className="text-white">agentic coordination</span>, <span className="text-white">real-time processing</span>, and measurable <span className="text-white">business impact</span>.
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
              {/* System Header (Project Name) */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/10 pb-4">
                  <div>
                      <div className="text-primary font-mono text-sm mb-1">SYSTEM_ID_0{system.id}</div>
                      <h3 className="text-3xl font-bold text-white">{system.title}</h3>
                      <p className="text-slate-400 text-lg">{system.subtitle}</p>
                  </div>
                  {/* Decorative Tech Bits */}
                  <div className="hidden md:flex gap-2">
                        <div className="px-2 py-1 rounded bg-slate-800 border border-white/5 text-xs font-mono text-slate-500">v2.4.0</div>
                        <div className="px-2 py-1 rounded bg-slate-800 border border-white/5 text-xs font-mono text-green-500">ACTIVE</div>
                  </div>
              </div>

              {/* Main Grid: Visual vs Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Visual / Screenshot Area */}
                <div className="lg:col-span-5">
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 aspect-video group-hover:border-primary/30 transition-colors duration-500">
                        {/* Placeholder for actual image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                             <Terminal className="w-16 h-16 text-slate-700" />
                        </div>
                        
                        {/* If you have real images, uncomment below: */}
                        {/* <Image 
                            src={system.image} 
                            alt={system.title} 
                            fill 
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                        /> 
                        */}
                        
                        {/* Overlay Grid */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {system.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-slate-800 border border-white/5 text-slate-300 text-xs font-mono hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Technical Specs Area */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Problem */}
                    <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                            <ShieldCheck className="w-4 h-4 text-red-400" /> Problem Context
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {system.problem}
                        </p>
                    </div>

                    {/* Architecture */}
                    <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                            <Server className="w-4 h-4 text-purple-400" /> Architecture
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {system.architecture}
                        </p>
                    </div>

                    {/* Agents */}
                    <div className="bg-card/50 p-6 rounded-xl border border-white/5 hover:bg-card transition-colors md:col-span-2">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                            <Network className="w-4 h-4 text-primary" /> Agent Workflow
                        </h4>
                        <div className="p-3 bg-slate-900 rounded border border-white/5 font-mono text-xs text-primary/80 overflow-x-auto">
                            {`> ${system.agents}`}
                        </div>
                    </div>

                    {/* Outcome (Highlighted) */}
                    <div className="md:col-span-2 relative pl-6 border-l-2 border-primary">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
                        <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                            <Zap className="w-4 h-4 text-yellow-400" /> Impact Outcome
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

        {/* Closing Summary */}
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
                "I don't just write scripts; I architect <span className="text-primary">living systems</span>. My approach combines rigorous backend engineering with adaptive, agentic interfaces to solve problems that traditional software simply cannot address."
            </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Systems
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, MessageSquare, Bot, Sparkles, Monitor, MousePointerClick, UserCog, Workflow } from 'lucide-react'

const AgenticUI = () => {
  return (
    <section id="agentic" className="py-24 relative overflow-hidden">
      
      {/* Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
                <Sparkles className="w-3 h-3" />
                <span>NEXT-GEN INTERFACE</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
                Agentic UI Explained
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Moving beyond static screens to interfaces that <span className="text-white">reason</span>, <span className="text-white">adapt</span>, and <span className="text-white">act</span> on your behalf.
            </p>
        </div>

        {/* The Comparison Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            
            {/* Left: Traditional UI (Static) */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 relative overflow-hidden group"
            >
                <div className="absolute top-4 right-4 text-xs font-mono text-slate-500">LEGACY_MODE</div>
                <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-700 rounded-xl mb-6">
                    <Monitor className="w-16 h-16 text-slate-600 mb-4" />
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-slate-400 text-sm">
                        <MousePointerClick className="w-4 h-4" />
                        <span>Waiting for input...</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Traditional UI</h3>
                <p className="text-slate-400 text-sm">Passive interfaces that wait for explicit user commands. Static, dumb, and requires constant human guidance.</p>
            </motion.div>

            {/* Right: Agentic UI (Active) */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-3xl bg-slate-900 border border-primary/20 relative overflow-hidden group shadow-[0_0_30px_rgba(45,212,191,0.05)]"
            >
                <div className="absolute top-4 right-4 text-xs font-mono text-primary animate-pulse">ACTIVE_MODE</div>
                
                {/* Visual Representation of "Thinking" */}
                <div className="relative flex flex-col items-center justify-center h-64 bg-slate-950 rounded-xl mb-6 border border-primary/10 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    
                    {/* Floating Nodes Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                    </div>
                    
                    <Bot className="w-16 h-16 text-primary relative z-10 mb-4" />
                    
                    <div className="flex flex-col gap-2 relative z-10 w-3/4">
                        <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 border border-primary/20 rounded-lg backdrop-blur-md">
                            <BrainCircuit className="w-4 h-4 text-primary" />
                            <span className="text-xs text-primary font-mono typing-effect">Analyzing intent...</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 border border-primary/20 rounded-lg backdrop-blur-md translate-x-4 opacity-80">
                            <Workflow className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs text-emerald-400 font-mono">Executing workflow...</span>
                        </div>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    Agentic UI <Sparkles className="w-4 h-4 text-yellow-400" />
                </h3>
                <p className="text-slate-400 text-sm">Proactive interfaces that reason about goals, anticipate needs, and execute tasks autonomously.</p>
            </motion.div>

        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-white/5 hover:bg-white/5 transition-colors">
                <UserCog className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Adaptive UX</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Layouts that morph based on user context and current task requirements.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-white/5 hover:bg-white/5 transition-colors">
                <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Natural Language</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Control complex software systems using simple, conversational English.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-white/5 hover:bg-white/5 transition-colors">
                <Bot className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Auto-Pilot</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Delegate tedious workflows to background agents while you focus on strategy.</p>
            </div>
        </div>

      </div>
    </section>
  )
}

export default AgenticUI
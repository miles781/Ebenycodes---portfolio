'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Network, Code2, Lightbulb, Target, Cpu } from 'lucide-react'

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
                Core Philosophy
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: The Manifesto */}
            <div className="space-y-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-6"
                >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-primary">
                        <BrainCircuit className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Systems over Features</h3>
                        <p className="text-slate-400 leading-relaxed">
                            I don't just build isolated features. I architect <span className="text-primary">interconnected ecosystems</span> where data flows intelligently between components, creating value greater than the sum of its parts.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex gap-6"
                >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-primary">
                        <Network className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Agentic First</h3>
                        <p className="text-slate-400 leading-relaxed">
                            The future is non-deterministic. I build software that can <span className="text-primary">reason</span>, handle ambiguity, and take autonomous action to solve complex user problems.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-6"
                >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-primary">
                        <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Robust Engineering</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Experimental AI needs industrial-grade rails. I focus heavily on <span className="text-primary">type safety</span>, observability, and fail-safe mechanisms to make AI products reliable.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: The Quote Block */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50"></div>
                <div className="relative bg-card border border-white/10 p-10 rounded-2xl">
                    <Cpu className="w-12 h-12 text-primary mb-6" />
                    <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
                        "The goal isn't just to make software smarter. It's to make it <span className="text-primary">useful</span>."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                        <div>
                            <div className="text-white font-bold">Ebenezer Igogo</div>
                            <div className="text-slate-500 text-sm">AI Product Engineer</div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Philosophy
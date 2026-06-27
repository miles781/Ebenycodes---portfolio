'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, ArrowRight, Coffee, Cpu } from 'lucide-react'

const CTA = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 space-y-16">

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl blur-2xl opacity-50 pointer-events-none"></div>
          <Cpu className="w-10 h-10 text-primary mx-auto mb-6 opacity-70" />
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
            "The goal isn't just to make software smarter. It's to make it <span className="text-primary">useful</span>."
          </blockquote>
          <p className="text-slate-500 font-mono text-sm">— Ebenezer Igogo, AI Product Engineer</p>
        </motion.div>

        {/* CTA Terminal */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl relative"
        >
            <div className="bg-slate-950 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs font-mono text-slate-500">user@ebenycode:~/init-collab</div>
            </div>

            <div className="p-8 md:p-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-6 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    SYSTEM READY
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Have a product idea or<br/>
                    <span className="text-primary">a problem to solve?</span>
                </h2>

                <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                    I build mobile apps, web systems, and AI-powered tools for <span className="text-white">startups, institutions, and founders</span> — especially across Africa. Let's talk about your project.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="px-8 py-4 bg-primary text-slate-900 font-bold rounded-lg hover:bg-primaryHover transition-all flex items-center gap-2 group">
                        <Terminal className="w-5 h-5" />
                        <span>Start a Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a href="mailto:ebenezer@aiproductengineer.com" className="px-8 py-4 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 border border-white/5 transition-all flex items-center gap-2">
                        <Coffee className="w-5 h-5 text-slate-400" />
                        <span>Send a Message</span>
                    </a>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-6 text-xs font-mono text-slate-500">
                    <span>STATUS: ONLINE</span>
                    <span>RESPONSE TIME: &lt; 24hrs</span>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  )
}

export default CTA

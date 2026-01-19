'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, ArrowRight, Coffee } from 'lucide-react'

const CTA = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl relative"
        >
            {/* Terminal Window Header */}
            <div className="bg-slate-950 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs font-mono text-slate-500">user@ebenycode:~/init-collab</div>
            </div>

            <div className="p-8 md:p-12 text-center">
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-6 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    SYSTEM READY
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Ready to engineer <br/>
                    <span className="text-primary">intelligent systems?</span>
                </h2>

                <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                    Stop building static websites. Start building <span className="text-white">autonomous software</span>. 
                    Let's discuss how Agentic UI can transform your product.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="px-8 py-4 bg-primary text-slate-900 font-bold rounded-lg hover:bg-primaryHover transition-all flex items-center gap-2 group">
                        <Terminal className="w-5 h-5" />
                        <span>Initialize Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a href="mailto:sirigogoebenezer@gmail.com" className="px-8 py-4 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 border border-white/5 transition-all flex items-center gap-2">
                        <Coffee className="w-5 h-5 text-slate-400" />
                        <span>Let's Chat</span>
                    </a>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-6 text-xs font-mono text-slate-500">
                    <span>STATUS: ONLINE</span>
                    <span>PING: 24ms</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA 
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowRight, Terminal } from 'lucide-react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      
      <div className="absolute top-20 right-10 opacity-[0.03] font-mono font-bold text-9xl text-white select-none pointer-events-none">
        {`{ }`}
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group perspective-1000"
        >
            <div className="relative w-full max-w-md mx-auto bg-card/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Terminal className="w-6 h-6 text-primary" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                        OPEN TO WORK
                    </div>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border-2 border-white/5 group-hover:border-primary/50 transition-colors">
                     <Image 
                        src={assets.profile_img || '/assets/user-image.png'} 
                        alt="Ebenezer"
                        fill
                        className="object-cover object-top"
                        priority
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-page/80 to-transparent" />
                     
                     <div className="absolute bottom-4 left-4">
                        <h2 className="text-white font-bold text-xl">Ebenezer Igogo</h2>
                        <p className="text-primary text-sm font-mono">AI Product Engineer</p>
                     </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
                    <div className="text-center">
                        <div className="text-white font-bold text-lg">5+</div>
                        <div className="text-slate-500 text-xs uppercase tracking-wider">Years</div>
                    </div>
                    <div className="text-center border-l border-white/5">
                        <div className="text-white font-bold text-lg">20+</div>
                        <div className="text-slate-500 text-xs uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center border-l border-white/5">
                        <div className="text-white font-bold text-lg">100%</div>
                        <div className="text-slate-500 text-xs uppercase tracking-wider">Commitment</div>
                    </div>
                </div>

                <a href="/resume.pdf" download className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-page font-bold hover:bg-primary hover:text-white transition-all duration-300">
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                </a>
            </div>

            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-left space-y-6"
        >
            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Online & Ready</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                <span className="text-slate-500 text-4xl block mb-2">Hey, I'm</span>
                Ebenezer
                <span className="block text-slate-700 mt-2">Igogo.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                A <strong className="text-white">Full-Stack & AI Product Engineer</strong> from Nigeria. I build production mobile apps, intelligent web systems, and AI-powered tools — for real clients across Africa and beyond.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="px-8 py-4 bg-primary text-page font-bold rounded-lg hover:bg-primaryHover transition-colors flex items-center gap-2">
                    Let's Talk <Mail className="w-4 h-4" />
                </a>
                <a href="#work" className="px-8 py-4 bg-card border border-white/10 text-white rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
                    View My Work <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection

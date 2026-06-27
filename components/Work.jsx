'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Box, BarChart3, ShoppingBag, PieChart, MessageSquare, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { workData } from '@/assets/assets'

const iconMap = {
    Cpu: Cpu,
    Zap: Zap,
    Square: Box,
    BarChart3: BarChart3,
    ShoppingBag: ShoppingBag,
    PieChart: PieChart,
    MessageSquare: MessageSquare
}

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-primary font-mono text-2xl">02.</span> 
                    Selected Work
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                <p className="text-slate-400 max-w-xl">
                    A curated selection of <span className="text-white">production systems</span> and <span className="text-white">AI-powered applications</span> built for real clients and organizations.
                </p>
            </div>
            
            <a href="https://github.com/miles781" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                <span className="font-mono text-sm">View Full Archive</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {workData.map((project, index) => {
                const isWide = index === 0 || index === 3
                const gridClass = isWide ? 'md:col-span-2' : 'md:col-span-1'

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative rounded-3xl overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-all duration-500 ${gridClass}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="absolute inset-0">
                            <Image 
                                src={project.bgImage} 
                                alt={project.title} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/80 to-transparent opacity-90" />
                        </div>

                        <div className="absolute top-6 left-6 z-10">
                            <span className="px-2 py-1 text-xs font-mono rounded bg-black/40 backdrop-blur-sm border border-white/10 text-slate-300">
                                {project.category}
                            </span>
                        </div>

                        <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-page transition-colors duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <motion.div 
                                animate={{ y: hoveredIndex === index ? -10 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm line-clamp-2 mb-4 group-hover:text-slate-200 transition-colors">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech?.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-primary backdrop-blur-sm">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech?.length > 3 && (
                                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-slate-400">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <span className="text-xs text-slate-500 font-mono">
                                        {project.client}
                                    </span>
                                    <span className={`px-2 py-0.5 text-xs font-mono rounded-full border ${
                                        project.status === 'In Production' || project.status === 'Live'
                                            ? 'border-green-500/30 text-green-400 bg-green-500/10'
                                            : 'border-primary/30 text-primary bg-primary/10'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>

                            </motion.div>
                        </div>

                    </motion.div>
                )
            })}
        </div>

      </div>
    </section>
  )
}

export default Work

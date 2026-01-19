'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className='group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300'
      style={{
        gridColumn: project.gridSpan === 'full' ? '1 / -1' : 'auto',
        gridRow: project.gridSpan === 'double' ? 'span 2' : 'auto'
      }}
    >
      {/* Image Container */}
      <div className='relative w-full h-48 overflow-hidden bg-slate-900'>
        <Image
          src={project.bgImage}
          alt={project.title}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100'
        />
        
        {/* Overlay Gradient (for text readability if needed, or style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60" />

        {/* Floating Action Icon */}
        <div className='absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
            <ArrowUpRight className='w-4 h-4 text-primary' />
        </div>
      </div>

      {/* Card Content */}
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors'>
          {project.title}
        </h3>
        
        <p className='text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow'>
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className='flex flex-wrap gap-2 mt-auto'>
          {project.tech?.map((tech, techIndex) => (
            <span
              key={techIndex}
              className='px-2 py-1 rounded bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-300 uppercase tracking-wide group-hover:border-primary/20 group-hover:text-primary transition-colors'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
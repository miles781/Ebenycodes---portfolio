'use client'

import { serviceData, techIcons } from '@/assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Zap, Box, Target, Code, GraduationCap, Mail, User, ArrowUpRight, Terminal } from 'lucide-react'

// Icon Mapping
const iconMap = {
  AgenticUI: Cpu,
  AIPowered: Zap,
  NextJS: Box,
  ProductStrategy: Target,
  Code: Code,
  GraduationCap: GraduationCap,
  Cpu: Cpu,
  Mail: Mail,
  User: User
}

const ServiceCard = ({ icon, title, description, techStack, link }) => {
  const LucideIconComponent = iconMap[icon] || Code // Fallback icon
  
  return (
    <motion.div 
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-white/5 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]"
      whileHover={{ y: -5 }}
    >
      {/* Header Area */}
      <div className="p-6 relative z-10">
        
        {/* Icon & Badge */}
        <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors text-slate-400">
                {LucideIconComponent && <LucideIconComponent className="w-6 h-6" strokeWidth={1.5} />}
            </div>
            
            {/* Link Icon */}
            <a href={link} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                <ArrowUpRight className="w-5 h-5" />
            </a>
        </div>

        {/* Title & Desc */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {description}
        </p>
        
        {/* Tech Stack Pills */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((tech, index) => {
              // We can map tech names to icons here if needed, or just use text
              return (
                <span
                  key={index}
                  className="px-2 py-1 rounded bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-300 uppercase tracking-wide group-hover:border-primary/20 transition-colors"
                >
                  {tech}
                </span>
              )
            })}
          </div>
        )}
      </div>

      {/* Background Hover Effect (Subtle Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

const EnhancedServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Background Decor (Code Bracket) */}
      <div className="absolute top-10 left-10 text-slate-800 text-9xl font-bold font-mono opacity-20 pointer-events-none select-none">
        services[]
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
            <Terminal className="w-3 h-3" />
            <span>OFFERINGS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Services
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Engineering scalable <span className="text-primary">AI solutions</span> and high-performance web architectures.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceData.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

export default EnhancedServices
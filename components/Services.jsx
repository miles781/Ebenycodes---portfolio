'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Box, Target, ArrowRight, Code2, Layout, Database } from 'lucide-react'
import { serviceData } from '@/assets/assets' // Ensure this data exists

const Services = () => {
  // Helper to map string icon names to components
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'AgenticUI': return <Cpu className='w-10 h-10 text-primary' strokeWidth={1.5} />;
      case 'AIPowered': return <Zap className='w-10 h-10 text-primary' strokeWidth={1.5} />;
      case 'NextJS': 
      case 'NextJSDev': return <Box className='w-10 h-10 text-primary' strokeWidth={1.5} />;
      case 'ProductStrategy': return <Target className='w-10 h-10 text-primary' strokeWidth={1.5} />;
      default: return <Code2 className='w-10 h-10 text-primary' strokeWidth={1.5} />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="text-primary font-mono text-2xl">04.</span> 
                My Services
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                I help ambitious teams build <span className="text-white">autonomous software</span>. From strategy to deployment, I engineer systems that think and adapt.
            </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.map((service, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="mb-6 p-4 rounded-xl bg-slate-900 border border-white/5 w-fit group-hover:scale-110 transition-transform duration-300 relative z-10">
                        {getIcon(service.icon)}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>
                        
                        <a href={service.link} className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primaryHover transition-colors group/link">
                            Learn More 
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  )
}

export default Services
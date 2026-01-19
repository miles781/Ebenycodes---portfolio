'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Layout, Server, Cpu, Globe } from 'lucide-react'

const skills = [
    { name: 'Frontend', icon: Layout, color: 'bg-blue-500', desc: 'React, Next.js, Tailwind' },
    { name: 'Backend', icon: Server, color: 'bg-green-500', desc: 'Node.js, Python, PostgreSQL' },
    { name: 'AI/ML', icon: Cpu, color: 'bg-purple-500', desc: 'TensorFlow, OpenAI, Agents' },
    { name: 'Web3', icon: Globe, color: 'bg-orange-500', desc: 'Solidity, Ethers.js' },
    { name: 'Architecture', icon: Code2, color: 'bg-red-500', desc: 'System Design, APIs' },
    { name: 'Data', icon: Database, color: 'bg-cyan-500', desc: 'SQL, NoSQL, Vector DB' },
]

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
             <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                MY ARSENAL
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="text-primary">{`</>`}</span> Skills & Technologies
             </h2>
        </div>

        {/* The Circle Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center group"
                >
                    {/* Circle Icon */}
                    <div className={`w-20 h-20 rounded-full ${skill.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
                        <skill.icon className="w-8 h-8 text-white" />
                        
                        {/* Ring Effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                    </div>

                    {/* Text */}
                    <h3 className="text-white font-bold mb-1">{skill.name}</h3>
                    <p className="text-slate-500 text-xs text-center max-w-[120px]">{skill.desc}</p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  )
}

export default Capabilities 
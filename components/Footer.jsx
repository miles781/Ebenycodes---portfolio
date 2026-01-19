'use client'
import React from 'react'
import TextLogo from './TextLogo'

const Footer = () => {
  return (
    <footer className='py-10 border-t border-white/5 bg-slate-950 mt-12'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        
        <div className="flex items-center gap-4">
            <TextLogo />
            <span className="text-slate-700 text-xl font-light hidden md:inline">|</span>
            <span className="text-slate-500 text-sm font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                SYSTEM_ONLINE v2.5
            </span>
        </div>

        <div className="text-slate-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} Ebenezer Igogo. All systems operational.
        </div>
      </div>
    </footer>
  )
}

export default Footer
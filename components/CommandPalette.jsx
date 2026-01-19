'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, User, Code, Briefcase, Mail, 
  FileText, Github, Linkedin, Moon, 
  Command, Search, ArrowRight 
} from 'lucide-react'

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)

  // Define actions
  const commands = [
    { id: 'home', name: 'Go to Home', action: () => window.location.hash = '#hero', icon: Home },
    { id: 'about', name: 'View About', action: () => window.location.hash = '#about', icon: User },
    { id: 'services', name: 'See Services', action: () => window.location.hash = '#services', icon: Code },
    { id: 'work', name: 'Browse Work', action: () => window.location.hash = '#work', icon: Briefcase },
    { id: 'contact', name: 'Contact Me', action: () => window.location.hash = '#contact', icon: Mail },
    { id: 'resume', name: 'Download Resume', action: () => window.open('/resume.pdf', '_blank'), icon: FileText },
    { id: 'github', name: 'GitHub Profile', action: () => window.open('https://github.com/miles781', '_blank'), icon: Github },
    { id: 'linkedin', name: 'LinkedIn Profile', action: () => window.open('https://linkedin.com/in/igogo-ebenezer', '_blank'), icon: Linkedin },
  ]

  // Filter commands based on search
  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(query.toLowerCase())
  )

  // Handle Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }
      
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex(prev => prev < filteredCommands.length - 1 ? prev + 1 : 0)
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex(prev => prev > 0 ? prev - 1 : filteredCommands.length - 1)
        } else if (e.key === 'Enter') {
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            handleSelect(filteredCommands[selectedIndex])
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filteredCommands])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSelect = (command) => {
    command.action()
    setIsOpen(false)
    setQuery('')
    setSelectedIndex(0)
  }

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className='fixed bottom-6 right-6 z-50 hidden md:block'>
        <button
          onClick={() => setIsOpen(true)}
          className='group flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:border-primary/50 transition-all duration-300'
        >
          <span className="bg-white/10 p-1 rounded">
            <Command className='w-3 h-3 text-slate-400 group-hover:text-white' />
          </span>
          <span className='text-xs font-mono text-slate-400 group-hover:text-primary'>CMD + K</span>
        </button>
      </div>

      {/* The Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60]'
              onClick={() => setIsOpen(false)}
            />

            {/* Palette Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className='fixed top-[20%] left-1/2 transform -translate-x-1/2 w-full max-w-xl z-[70] px-4'
            >
              <div className='bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden'>
                
                {/* Header / Input */}
                <div className='flex items-center gap-3 p-4 border-b border-white/5'>
                  <Search className="w-5 h-5 text-slate-500" />
                  <input
                    ref={inputRef}
                    type='text'
                    placeholder='Type a command or search...'
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setSelectedIndex(0)
                    }}
                    className='flex-1 bg-transparent text-white placeholder-slate-600 outline-none font-mono text-sm'
                  />
                  <div className='text-[10px] bg-white/5 px-2 py-1 rounded text-slate-500 font-mono'>ESC</div>
                </div>

                {/* Results List */}
                <div className='max-h-[300px] overflow-y-auto p-2'>
                  {filteredCommands.length > 0 ? (
                    filteredCommands.map((command, index) => (
                      <button
                        key={command.id}
                        onClick={() => handleSelect(command)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-all duration-200 ${
                          selectedIndex === index 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-slate-400 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                            <command.icon className={`w-4 h-4 ${selectedIndex === index ? 'text-primary' : 'text-slate-500'}`} />
                            <span className={selectedIndex === index ? 'font-semibold' : ''}>{command.name}</span>
                        </div>
                        
                        {selectedIndex === index && (
                            <ArrowRight className="w-4 h-4 opacity-50" />
                        )}
                      </button>
                    ))
                  ) : (
                    <div className='p-8 text-center text-slate-500 text-sm font-mono'>
                      No commands found.
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className='p-2 border-t border-white/5 bg-slate-950/50 flex justify-between items-center text-[10px] text-slate-600 font-mono px-4'>
                    <span>Dashboard v2.5</span>
                    <div className="flex gap-2">
                        <span>↑↓ Navigate</span>
                        <span>↵ Select</span>
                    </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default CommandPalette 
'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = useState("idle") // idle, submitting, success, error
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus("submitting")
    setResult("Sending data packets...")
    
    try {
      const formData = new FormData(event.target)
      // Make sure to double check your Web3Forms Access Key here
      formData.append("access_key", "37db300d-d537-4d7e-b29d-9a5128f7eb6d")
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setResult("Message received. Protocol initiated.")
        setStatus("success")
        event.target.reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        console.log("Error", data)
        setResult(data.message)
        setStatus("error")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setResult("Connection failed. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section id='contact' className='py-24 relative'>
      <div className='container mx-auto px-6 max-w-3xl'>
        
        {/* Header */}
        <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>Execute Connection</h2>
            <p className='text-slate-400'>Fill out the parameters below to initiate a conversation.</p>
        </div>

        <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            <form onSubmit={onSubmit} className="relative z-10 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-primary uppercase tracking-wider">User.Name</label>
                        <input 
                            name='name' 
                            type='text' 
                            placeholder='Jane Doe' 
                            required
                            className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-primary uppercase tracking-wider">User.Email</label>
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='jane@example.com' 
                            required
                            className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono text-primary uppercase tracking-wider">Payload.Message</label>
                    <textarea 
                        name='message' 
                        rows='5' 
                        placeholder='Describe your project parameters...' 
                        required
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono resize-none"
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button 
                        type='submit' 
                        disabled={status === 'submitting'}
                        className="w-full bg-primary text-slate-900 font-bold py-4 rounded-lg hover:bg-primaryHover transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Transmitting...</span>
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Status Message */}
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center font-mono text-sm mt-4 flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 className="w-4 h-4" />
                            {result}
                        </motion.div>
                    )}
                    {status === 'error' && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center font-mono text-sm mt-4 flex items-center justify-center gap-2"
                        >
                            <XCircle className="w-4 h-4" />
                            {result}
                        </motion.div>
                    )}
                </AnimatePresence>

            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 
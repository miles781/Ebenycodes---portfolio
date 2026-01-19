'use client'

import { useEffect, useState } from "react";

// --- Layout & Utility Components ---
import Sidebar from "@/components/Sidebar";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";

// --- Core Section Components ---
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities"; // Your "Skills" section
import Work from "@/components/Work";

// --- AI & Specialization Components ---
import AgenticUI from "@/components/AgenticUI";
import Systems from "@/components/Systems";

// --- Methodology & Services ---
import Process from "@/components/Process";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";

// --- Conversion Components ---
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to true for the "Sinan" dark aesthetic

  // Theme Toggle Logic (Preserved but optimized for default Dark)
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <div className={`min-h-screen bg-page text-slate-400 selection:bg-primary/30 selection:text-primary ${isDarkMode ? 'dark' : ''}`}>
      
      {/* 1. Global Background Pattern (Topography / Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 2. Global Utilities */}
      <CommandPalette />

      {/* 3. Navigation (The Rail) */}
      {/* Sidebar is fixed on Desktop, likely bottom/hidden on Mobile */}
      <Sidebar />

      {/* 4. Main Content Area */}
      {/* md:pl-20 pushes content right on desktop to make room for sidebar */}
      {/* pl-0 ensures full width on mobile */}
      <main className="relative z-10 md:pl-24 transition-all duration-300 ease-in-out">
        
        {/* The "Dashboard" Scroll Flow */}
        <div className="max-w-[1600px] mx-auto">
            
            <HeroSection id="hero" />
            
            <div className="space-y-0"> {/* Remove vertical gaps, let components handle padding */}
                <About id="about" />
                <Capabilities id="capabilities" />
                <Work id="work" />
                
                {/* Deep Dive Section */}
                <div className="relative">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none -z-10" />
                   <AgenticUI id="agentic" />
                   <Systems id="systems" />
                </div>

                <Process id="process" />
                <Philosophy id="philosophy" />
                <Services id="services" />
                
                {/* Closing Sequence */}
                <CTA />
                <Contact id="contact" />
            </div>

            <Footer />
        </div>

      </main>
    </div>
  );
} 
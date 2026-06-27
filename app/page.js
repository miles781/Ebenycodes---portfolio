'use client'

import { useEffect, useState } from "react";

import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

import HeroSection from "@/components/HeroSection";
import EnhancedServices from "@/components/EnhancedServices";
import Work from "@/components/Work";
import Systems from "@/components/Systems";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)

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
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <CommandPalette />
      <Sidebar />

      <main className="relative z-10 md:pl-24 transition-all duration-300 ease-in-out">
        <div className="max-w-[1600px] mx-auto">
          
          <HeroSection id="hero" />
          
          <div className="space-y-0">
            <EnhancedServices id="services" />
            <Work id="work" />
            <Systems id="systems" />
            <About id="about" />
            <CTA />
            <Contact id="contact" />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

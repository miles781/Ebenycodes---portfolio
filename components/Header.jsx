import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
 


const Header = () => {
  return (
    <div className=' w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
items-center justify-center'>
  <br />
  <br />
  <br />
  <br /> 
  <br />
  <br />
  <br/>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale:1}} 
      transition={{duration:0.9, type: 'spring', stiffness:100}}
      >
      <Image src={assets.profile_img} alt='' className='rounded w-32'/>
       </motion.div> 
      <br />
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}} 
      transition={{duration:0.7, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'> Hi I'm Igogo Ebenezer 
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3> 

      <motion.h1
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}} 
      transition={{duration:0.8, delay: 0.5}}
       className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
         frontend web developer based in Nigeria.</motion.h1>
      
       <motion.p
       initial={{opacity: 0}}
       whileInView={{opacity: 1}} 
       transition={{duration:0.7, delay: 0.3}}
        className='max-w-2xl mx-auto font-ovo'> I am a frontend developer from calabar, Nigeria with 
        over 5 years of experience and a tutor at Angelo Technology
        </motion.p>
    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'> 
        <motion.a 
         initial={{y: -30, opacity: 0}}
         whileInView={{y: 0, opacity: 1}} 
         transition={{duration:0.7, delay: 1}}
        href='#contact'  
        className='px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-2 dark:bg-transparent' > contact me   <Image src={assets.right_arrow_white} alt='' 
        className='w-4'/> </motion.a>
      
        <motion.a
         initial={{y: -30, opacity: 0}}
         whileInView={{y: 0, opacity: 1}} 
         transition={{duration:0.7, delay: 1.2}}
         href='/Ebenezer-resume.pdf' download 
         className='px-10 py-3 border rounded-full border-gray-500
          flex items-center gap-2  bg-white dark:text-black'>  my resume   <Image src={assets.download_icon} alt=''
         className='w-4'/> </motion.a>
    </div>
    </div>
  )
}

export default Header
 
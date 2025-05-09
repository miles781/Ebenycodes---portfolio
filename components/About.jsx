import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from 'motion/react';
const About = ({isDarkMode }) => {
  return (
    
    <motion.div id='about' className='w-full px-[12%] py-20 scroll-mt-20 '
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 1}}
    >
     
      <br />
      <br />
      <div className='container mx-auto'>
        <motion.h4
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.3 }}
        className='text-center mb-2 text-lg font-ovo '> Introduction </motion.h4>
        <motion.h2
         initial={{opacity: 0, y: -20}}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration: 1, delay: 0.5 }}

         className='text-center text-5xl font-ovo '> About me </motion.h2>
        <motion.div
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1}}
        transition={{duration:0.81 }}

         className='flex w-full flex-col lg:flex-row items-center gap-10 my-8'>
          <motion.div
          initial={{opacity: 0, scale:0.9}}
          whileInView={{opacity: 1, scale:1}}
          transition={{duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none mt-10 lg:mt-16 flex-shrink-0'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl object-cover h-200'/>
          </motion.div>
          <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8 }}
           className='flex-1 mt-10 lg:mt-16 flex flex-col justify-center'>
            <p className='mb-10 max-w-2xl font-ovo text-lg leading-8 '>
            As a seasoned Frontend developer with 5+ years of experience,
             I've successfully mentored and guided individuals,
              driven organizational contributions, and fostered emerging talents in web development.
            </p>
            <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-2xl'>
              {infoList.map(( {icon, iconDark, title, description}, index)=>(
                <motion.li
                whileInView={{scale:1.05}}
                key={index} className='border-[0.5px] border-gray-400 rounded-xl cursor-pointer
                 p-4 hover:bg-lightHover hover:-translate-y-1 duration-500
                  hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50'>
                  <Image src={isDarkMode ? iconDark : icon}  alt={title} className='w-5 mt-2'/>
                  <div>
                    <h3 className='my-2 font-semibold text-gray-700 text-sm dark:text-white'>{title} </h3> 
                    <p className='text-gray-600 text-xs  dark:text-white/80'>{description}</p> 
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
            initial={{opacity: 0, y: -20}}
            whileInView={{y: 0, opacity: 1,}}
            transition={{duration: 1.3, delay: 0.5 }}
            className='my-6 text-gray-700 font-ovo  dark:text-white/80'> Tools I use </motion. h4>
            
            <motion.ul
            initial={{opacity: 0,}}
            whileInView={{opacity: 1, }}
            transition={{duration: 1.5, delay: 0.6 }}
            className='flex items-center gap-3 sm:gap-5 '> 
              {toolsData.map((tool, index)=>(
                <motion.li
                whileHover={{scale: 1.05}}   
                className='flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1
                 duration-500'
                 key={index}> 
                 <Image src={tool} alt='Tool' className='w-5 
                 sm:w-7'/>
                </motion.li>
              )) }
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
      
    </motion.div>
  );
}

export default About;
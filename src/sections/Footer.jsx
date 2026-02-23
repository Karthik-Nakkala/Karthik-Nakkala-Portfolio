import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const socials=[
  {Icon:FaLinkedin, label:"Linkedin", href:'https://linkedin.com/in/karthik-nakkala-528a32340'},
  {Icon:FaGithub, label:"Github", href:'https://github.com/Karthik-Nakkala'}
]


const glowVariants={
  initial:{
    scale:1,y:0,filter:'drop-shadow(0 0 0 rgba(0,0,0,0))'
  },
  hover:{
    scale:1.2,y:-3,
    filter:"drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 20px rgba(255,255,255,0.6))",
    transition : {type:"spring",stiffness:300,damping:15}
  },
  tap:{scale:0.95,y:0,transition:{duration:0.08} }
}



const Footer = () => {
  return (
    <footer  className='relative overflow-hidden bg-black'>

      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.35),transparent_70%)]'/>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]'/>

      <motion.div className='relative z-10 px-3 sm:px-5 lg:px-6 py-10 md:py-13 flex flex-col items-center text-center space-y-4'
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8}}
      >

        <h1 className='font-semibold leading-none text-white text-center select-none'
        style={{
          fontSize:'clamp(1.92rem,3.2vw,8.96rem)',
          letterSpacing:'0.02em',
          lineHeight:0.9,
          padding:"0 1.92vw",
          whiteSpace:'nowrap',
          textShadow:'0 1.28px 11.52px rgba(0,0,0,0.45)'
         }}>
          Karthik Nakkala
        </h1>
        <div className='h-0.5 w-15 md:w-20 rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400'/>


          <div className='flex gap-3 text-xl md:text-2xl justify-center lg:justify-start'>
          
                        {socials.map(({Icon,label,href})=>(
                          <motion.a 
                          href={href}
                          key={label}
                          target='_blank'
                          aria-label={label}
                          rel='noopener noreferrer'
                          variants={glowVariants}
                          initial="initial"
                          whileHover="hover"
                          whileTap="tap"
                          className='text-gray-300'
                          >
                            <Icon/>
                            
                          </motion.a>
                        ))}

                        </div>

                        <p className='text-gray-300 italic max-w-xl text-sm'>
                          “Excellence is never an accident. It is the result of high intention, sincere effort, and intelligent execution.”
                        </p>

                        <p className='text-xs text-gray-400'>
                          &copy;{new Date().getFullYear()} Karthik Nakkala. All rights reserved
                        </p>


      </motion.div>

    </footer>
  )
}

export default Footer
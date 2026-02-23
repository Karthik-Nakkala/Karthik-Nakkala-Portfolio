import React, { useEffect, useState } from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { href } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import avatar from '../assets/avator.png'

const socials=[
  {Icon:FaLinkedin, label:"Linkedin", href:'https://linkedin.com/in/karthik-nakkala-528a32340'},
  {Icon:FaGithub, label:"Github", href:'https://github.com/Karthik-Nakkala'}
]

const glowVariants={
  initial:{ scale:1,y:0,filter:'drop-shadow(0 0 0 rgba(0,0,0,0))' },
  hover:{
    scale:1.2,y:-3,
    filter:"drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 20px rgba(255,255,255,0.6))",
    transition : {type:"spring",stiffness:300,damping:15}
  },
  tap:{scale:0.95,y:0,transition:{duration:0.08} }
}

const Home = () => {
  const roles=useMemo(()=>['Web Developer','Software Developer']);
  const [index,setIndex]=useState(0);
  const [subIndex,setSubIndex]=useState(0);
  const [deleting,setDeleting]=useState(false);

  useEffect(()=>{
    const current=roles[index];
    const timeout=setTimeout(()=>{
      if(!deleting && subIndex<current.length) setSubIndex(v=>v+1);
      else if(!deleting && subIndex===current.length) setTimeout(()=>setDeleting(true),1200);
      else if(deleting && subIndex>0) setSubIndex(v=>v-1);
      else if(deleting && subIndex===0){
        setDeleting(false);
        setIndex(p=>(p+1)%roles.length);
      }
    },deleting?40:60);
    return ()=>clearTimeout(timeout);
  },[subIndex,index,deleting,roles])

  return (
    <section id='home' className='w-full h-screen relative bg-black overflow-hidden'>
      <ParticlesBackground/>
      
      <div className='absolute inset-0'>
        <div className='absolute -top-32 -left-32 w-[40vw] h-[40vw] max-w-80 max-h-80 rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[100px] animate-pulse' />
        <div className='absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-80 max-h-80 rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[100px] animate-pulse delay-500' />
      </div>

      <div className='relative z-10 h-full w-full max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center h-full text-center lg:text-left relative'>
          <div className='w-full lg:pr-12 mx-auto max-w-xl'>
            <motion.div className='mb-2 text-lg sm:text-xl lg:text-2xl font-semibold text-white tracking-wide min-h-[1.6em]'>
              <span>{roles[index].substring(0,subIndex)}</span>
              <span className='inline-block w-0.5 ml-1 bg-white animate-pulse align-middle' style={{height:'1em'}} />
            </motion.div>

            <motion.h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'>
              Hello, I'm
              <br/>
              <span className='text-white font-bold text-4xl sm:text-5xl lg:text-6xl lg:whitespace-nowrap'>
                Karthik Nakkala
              </span>
            </motion.h1>

            <motion.p className='mt-4 text-sm sm:text-base text-gray-300 max-w-lg mx-auto lg:mx-0'>
              I design and develop modern, scalable applications that merge technical excellence with user-focused experiences.
            </motion.p>

            <motion.div className='mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4'>
              <a href="#projects" className='px-5 py-2 rounded-full font-medium text-base text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all'>View My Work</a>
              <a href="/karthik_updated_resume.pdf" className='px-5 py-2 rounded-full text-base font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all' download>My Resume</a>
            </motion.div>

            <div className='mt-6 flex gap-4 text-xl justify-center lg:justify-start'>
              {socials.map(({Icon,label,href})=>(
                <motion.a href={href} key={label} target='_blank' variants={glowVariants} initial="initial" whileHover="hover" className='text-gray-300'><Icon/></motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className='relative hidden lg:block'>

          <div className='absolute top-1/2 -translate-y-1/2 right-4'
               style={{ width:'300px', height:'490px', borderRadius:'50%', filter:'blur(40px)', opacity:0.25, background:'conic-gradient(from 0deg, #1cd8d2,#00bf8f,#302b63,#1cd8d2)' }} />
          <motion.img src={avatar} alt="Karthik Nakkala" className='absolute top-1/2 -translate-y-1/2 right-0 object-contain'
                      style={{ width:'400px', maxHeight:'80vh' }}
                      initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} />
        </div>
      </div>
    </section>
  )
}

export default Home
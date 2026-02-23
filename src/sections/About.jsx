import React from 'react'
import {motion, spring} from "framer-motion"
import myPhoto from '../assets/hd_karthik_image.png'



const About = () => {

  const stats=[
    {label:"speciality",value:"Full Stack"},
    {label:"Focus",value:"Performance & UX"}
  ]

  const glows=[
    "-top-6 -left-6 w-[224px] h-[224px] opacity-20 blur-[74px]",
    "bottom-0 right-6 w-[260px] h-[260px] opacity-15 blur-[87px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-1/2 w-[136px] h-[136px] opacity-10 blur-[62px]"
  ]
  return (
    <section id='about'
    className='min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden'>

      <div className='absolute inset-0 pointer-events-none'>
        {glows.map((c,i)=>(
          <div key={i} className={`absolute rounde-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
        ))}
      </div>

      <div className='relative z-10 max-w-4xl w-full mx-auto px-4 md:px-6 lg:px-8 py-12 flex flex-col gap-8'>

        <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-5"
        initial={{opacity:0,y:24}}
        whileInView={{opacity:1,y:-10}}
        transition={{duration:0.6}}
        viewport={{once:true,amount:0.4}}
        >

          <motion.div className='relative w-30 h-30 md:w-42 md:h-42 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25'
          whileHover={{scale:1.02}}
          transition={{type:"spring", damping:18 , stiffness:200}}
          >
            
            <img src={myPhoto} alt="profile"/>
          </motion.div>

          <div className='flex-1 flex flex-col justify-center text-center md:text-left'>
            <h2 className='text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>
              Karthik Nakkala
            </h2>
            <p className='mt-1.5 text-sm sm:text-base text-white/90 font-semibold'>
            Full Stack Developer
            </p>
            <p className='mt-2.5 text-gray-300 leading-relaxed text-xs sm:text-sm max-w-2xl md:max-w-3xl'>
             React-focused full-stack developer with expertise in Tailwind CSS and Framer Motion for crafting polished, interactive UIs, backed by Node.js, Express, MongoDB, RestfulAPI real-time applications. I deliver production-ready React solutions that combine performance, design precision, and seamless user experiences.

            </p>

            <div className='mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 max-w-xl'>
              {stats.map((item,i)=>(
                <motion.div key={i} className='rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-center'
                initial={{opacity:0,y:10}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:0.05*i,duration:0.4}}
                viewport={{once:true,amount:0.3}}
                >

                  <div className='text-xs text-gray-400'>{item.label}</div>
                  <div className='text-sm font-semibold'>{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className='mt-3 flex flex-col sm:flex-row gap-2 sm:gap-2.5 justify-center md:justify-start'>
              <a href="#projects" className='inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-3.5 py-2 hover:bg-gray-200 transition text-sm'>View Projects</a>
              <a href="#contact" className='inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-3.5 py-2 hover:bg-white/20 transition text-sm'>Get In Touch</a>
            </div>

          </div>

        </motion.div>

        <motion.div className='text-center md:text-left'
        initial={{opacity:0,x:-30}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        viewport={{once:true,amount:0.4}}>
          <h3 className='text-xl sm:text-2xl font-bold text-white mb-2'>
            About Me
          </h3>
          <p className='text-gray-300 leading-relaxed text-xs sm:text-sm'>
            I’m a web enthusiast with a deep passion for crafting engaging digital experiences. Designing interactive web activities and solving complex problems excite me, and I thrive on turning ideas into fast, scalable, and visually polished solutions. My focus is always on performance and user experience — building websites that don’t just look good, but feel smooth and responsive.
          </p>
          <p className='mt-2.5 text-gray-400 text-xs sm:text-sm'>Beyond coding, I enjoy exploring creative ways to optimize workflows, refine UI/UX details, and push the boundaries of what modern web technologies can achieve. For me, every project is an opportunity to learn, innovate, and deliver something impactful.
            </p> 
        </motion.div>

      </div>

    </section>
  )
}

export default About
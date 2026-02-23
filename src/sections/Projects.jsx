import React from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from './Project'
import pharmaProject from '../assets/drug-contrpller-project-cover-image.png'

const Projects = () => {
  const projects = [
    { name: 'Pharma Drug Controller', accessLink: 'https://safedose-manager.vercel.app/', coverImageUrl: pharmaProject, description: 'PharmaGuard is an AI-powered pharmacogenomic risk prediction tool designed to analyze patient VCF data and identify potential drug metabolism risks.', buildSkills: 'React, Tailwind Css, Framer Motion' },
    { name: 'Pharma Drug Controller', accessLink: 'https://safedose-manager.vercel.app/', coverImageUrl: pharmaProject, description: 'PharmaGuard is an AI-powered pharmacogenomic risk prediction tool designed to analyze patient VCF data and identify potential drug metabolism risks.', buildSkills: 'React, Tailwind Css, Framer Motion' },
    { name: 'Pharma Drug Controller', accessLink: 'https://safedose-manager.vercel.app/', coverImageUrl: pharmaProject, description: 'PharmaGuard is an AI-powered pharmacogenomic risk prediction tool designed to analyze patient VCF data and identify potential drug metabolism risks.', buildSkills: 'React, Tailwind Css, Framer Motion' },
  ]

  const glows = [
    "top-0 left-1/4 w-[335px] h-[335px] opacity-20 blur-[87px]",
    "bottom-6 right-0 w-[268px] h-[268px] opacity-10 blur-[80px]"
  ]

  return (
    <section id='projects' className='min-h-screen w-full relative bg-black text-white overflow-hidden py-16'>
      {/* Dynamic Background Glows */}
      <div className='absolute inset-0 pointer-events-none'>
        {glows.map((c, i) => (
          <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
        ))}
      </div>

      <div className='relative z-10 max-w-5xl mx-auto px-4'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className='text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>
            Featured Projects
          </h2>
          <p className='text-gray-400 mt-3 max-w-xl mx-auto text-sm'>
            A collection of technical solutions focused on performance, genetic data analysis, and seamless user interfaces.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
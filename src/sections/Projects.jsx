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
    "top-0 left-1/4 w-[500px] h-[500px] opacity-20 blur-[130px]",
    "bottom-10 right-0 w-[400px] h-[400px] opacity-10 blur-[120px]"
  ]

  return (
    <section id='projects' className='min-h-screen w-full relative bg-black text-white overflow-hidden py-24'>
      {/* Dynamic Background Glows */}
      <div className='absolute inset-0 pointer-events-none'>
        {glows.map((c, i) => (
          <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
        ))}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className='text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>
            Featured Projects
          </h2>
          <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
            A collection of technical solutions focused on performance, genetic data analysis, and seamless user interfaces.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
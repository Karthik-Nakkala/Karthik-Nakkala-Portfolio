import { motion } from 'framer-motion';
import { useState } from 'react';

export const ProjectCard = ({ project }) => {

  const [expander,setExpander]=useState(false);

  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-sm overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl transition-all duration-300 hover:shadow-cyan-500/20"
    >
      {/* Image Container */}
      <div className="relative h-32 w-full overflow-hidden">
        <img 
          src={project.coverImageUrl} 
          alt='Pharma cover'
          className="w-full h-full object-cover transition-transform duration-500 "
        />
        <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
          New
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-white tracking-tight">
          {project.name}
        </h2>

        
        
        <p className={`text-gray-300 hover:cursor-pointer text-xs leading-relaxed ${!expander?'line-clamp-2':''}`} onClick={()=>setExpander(!expander)}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
           <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md border border-cyan-400/20">
             {project.buildSkills}
           </span>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="w-full mt-3"
        >
          <a 
            href={project.accessLink} 
            target='_blank' 
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-2 rounded-xl transition-all shadow-lg shadow-blue-500/30"
          >
            View Project
          </a>
        </motion.button>
      </div>
    </motion.div>
  );
};
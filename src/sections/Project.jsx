import { motion } from 'framer-motion';

export const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-sm overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-cyan-500/20"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={project.coverImageUrl} 
          alt='Pharma cover'
          className="w-full h-full object-cover transition-transform duration-500 "
        />
        <div className="absolute top-3 right-3 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          New
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          {project.name}
        </h2>
        
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
           <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-md border border-cyan-400/20">
             {project.buildSkills}
           </span>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4"
        >
          <a 
            href={project.accessLink} 
            target='_blank' 
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-2.5 rounded-xl transition-all shadow-lg shadow-blue-500/30"
          >
            View Project
          </a>
        </motion.button>
      </div>
    </motion.div>
  );
};
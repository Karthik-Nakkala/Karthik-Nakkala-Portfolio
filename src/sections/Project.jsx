import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const ProjectCard = ({ project, index }) => {
  const [expander, setExpander] = useState(false);

  // Split skills string into array
  const skillsArray = project.buildSkills
    ? project.buildSkills.split(',').map((s) => s.trim())
    : [];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.min(index * 0.05, 0.25)
      }}
      style={{ willChange: "transform, opacity" }}
      whileHover={{ y: -6 }}
      className="w-full max-w-sm flex flex-col justify-between overflow-hidden bg-white/5 border border-white/10 hover:border-[#1cd8d2]/40 rounded-2xl shadow-xl transition-colors duration-300 relative group"
    >
      {/* Top Gradient Decorative Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-60 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Cover Image Container */}
        <div className="relative h-44 w-full overflow-hidden bg-black/40">
          <img
            src={project.coverImageUrl}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />
          {/* Cover Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          
          <div className="absolute top-3 right-3 bg-[#1cd8d2]/20 backdrop-blur-md text-[#1cd8d2] border border-[#1cd8d2]/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            {project.name.toLowerCase().includes("datedev") ? "Featured" : "Project"}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 space-y-3.5">
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#1cd8d2] transition-colors">
            {project.name}
          </h3>

          {/* Description Block with Smooth Layout Transition */}
          <div className="relative">
            <motion.p
              layout="position"
              className={`text-gray-300 text-xs leading-relaxed transition-all duration-300 ${
                !expander ? 'line-clamp-2' : ''
              }`}
            >
              {project.description}
            </motion.p>
            
            <button
              onClick={() => setExpander(!expander)}
              className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-[#00bf8f] hover:text-[#1cd8d2] transition-colors"
            >
              {expander ? (
                <>Show Less <FaChevronUp className="text-[9px]" /></>
              ) : (
                <>Read More <FaChevronDown className="text-[9px]" /></>
              )}
            </button>
          </div>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-white/5">
            {skillsArray.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="text-[10px] font-medium text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md border border-cyan-400/20 transition-all hover:bg-cyan-400/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button Action */}
      <div className="p-5 pt-0">
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="w-full mt-2"
        >
          <a
            href={project.accessLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full text-center bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] hover:from-[#1cd8d2] hover:to-[#1cd8d2] text-black hover:text-black font-semibold py-2.5 rounded-xl transition-all shadow-[0_0_12px_rgba(28,216,210,0.25)] hover:shadow-[0_0_20px_rgba(28,216,210,0.45)] text-sm"
          >
            Launch Project <FaExternalLinkAlt className="text-xs" />
          </a>
        </motion.button>
      </div>
    </motion.div>
  );
};
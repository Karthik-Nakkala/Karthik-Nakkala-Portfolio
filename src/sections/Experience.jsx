import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaExternalLinkAlt, FaCalendarAlt, FaBuilding, FaCheckCircle, FaLaptopCode, FaNodeJs } from 'react-icons/fa';
import { SiVuedotjs, SiNuxtdotjs, SiReact, SiExpress, SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si';

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Dashloc",
    period: "Apr 2026 – Jun 2026",
    type: "Internship",
    icon: FaBriefcase,
    techIcon: SiVuedotjs,
    branchSide: "left", // On desktop, card opens on the left branch
    highlights: [
      "Architected scalable, modular frontend interfaces leveraging Vue.js 3 and Nuxt.js, establishing clean component patterns to enhance codebase maintainability.",
      "Engineered a robust design system with 25+ reusable Vue components, dramatically eliminating redundant UI code across analytics dashboards.",
      "Orchestrated seamless RESTful API communication and enhanced user experience via route code-splitting, asset lazy loading, and automated module imports."
    ],
    skills: ["Vue.js 3", "Nuxt.js", "RESTful APIs", "Component Architecture", "Performance Optimization", "JavaScript"]
  },
  {
    id: 2,
    role: "Full-Stack Developer & Creator",
    company: "DateDev Platform",
    period: "Featured Full-Stack Project",
    accessLink: "https://datedev.shop/",
    type: "Production Experience",
    icon: FaLaptopCode,
    techIcon: SiReact,
    branchSide: "right", // On desktop, card opens on the right branch
    highlights: [
      "Architected and deployed DateDev — a developer networking platform featuring a Tinder-style swipe UI for discovering tech collaborators.",
      "Implemented secure cookie-based authentication, user profile management, connection requests, and protected routing.",
      "Utilized Redux Toolkit for complex state synchronization across swipe cards, matches, and interactive user feeds.",
      "Built scalable RESTful APIs with Node.js, Express, and MongoDB, handling secure data flow and user relationship mapping."
    ],
    skills: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Framer Motion"]
  }
];

const Experience = () => {
  const glows = [
    "top-10 left-10 w-[300px] h-[300px] opacity-15 blur-[90px]",
    "bottom-10 right-10 w-[280px] h-[280px] opacity-15 blur-[85px]"
  ];

  return (
    <section id="experience" className="min-h-screen w-full relative bg-black text-white py-20 overflow-hidden">
      {/* Theme Glowing Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
            Work & Development Experience
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            My professional journey, software engineering internship, and full-stack project execution.
          </p>
        </motion.div>

        {/* Tree & Branches Timeline Container */}
        <div className="relative">
          {/* Central Trunk (Line down the middle on lg screens, left on mobile) */}
          <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#1cd8d2] via-[#00bf8f] to-[#302b63] rounded-full opacity-40 shadow-[0_0_12px_#00bf8f]" />

          <div className="space-y-14 lg:space-y-20">
            {experiences.map((exp, index) => {
              const isLeft = exp.branchSide === "left";
              const MainIcon = exp.icon;
              const TechIcon = exp.techIcon;

              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between"
                >
                  {/* Central Tree Trunk Node (Pulsing Circle with Icon) */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    style={{ willChange: "transform, opacity" }}
                    transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.05 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                  >
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-[#1cd8d2] shadow-[0_0_15px_#1cd8d2] group">
                      <TechIcon className="text-xl text-[#1cd8d2] group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 rounded-full border border-[#00bf8f] animate-ping opacity-30 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Desktop Connecting SVG Branch Line */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 z-10 ${
                      isLeft ? "right-1/2 pr-6" : "left-1/2 pl-6"
                    }`}
                    style={{ width: "calc(50% - 24px)" }}
                  >
                    <svg
                      className="w-full h-8 overflow-visible"
                      viewBox="0 0 100 20"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d={isLeft ? "M 100 10 C 60 10, 40 10, 0 10" : "M 0 10 C 40 10, 60 10, 100 10"}
                        stroke="url(#branch-gradient)"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.8 }}
                        style={{ willChange: "opacity" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, amount: 0.2 }}
                      />
                      <defs>
                        <linearGradient id="branch-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1cd8d2" />
                          <stop offset="50%" stopColor="#00bf8f" />
                          <stop offset="100%" stopColor="#302b63" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Branch Card Container (Alternating on lg screens) */}
                  <div
                    className={`w-full pl-16 lg:pl-0 lg:w-[45%] ${
                      isLeft ? "lg:mr-auto lg:text-right" : "lg:ml-auto lg:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      style={{ willChange: "transform, opacity" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1] // Soft, weightless cubic-bezier deceleration
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
                      className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[#1cd8d2]/40 transition-colors duration-300 shadow-xl backdrop-blur-sm relative group"
                    >
                      {/* Subtly Glowing Top Border Accent */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-60 rounded-t-xl group-hover:opacity-100 transition-opacity" />

                      {/* Header Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-[#1cd8d2] border border-[#1cd8d2]/30 flex items-center gap-1.5">
                          <MainIcon className="text-xs" /> {exp.type}
                        </span>

                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <FaCalendarAlt className="text-[#00bf8f]" /> {exp.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 mb-4 flex-wrap">
                        <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] flex items-center gap-1">
                          <FaBuilding className="text-sm text-[#00bf8f]" /> {exp.company}
                        </span>



                        {exp.accessLink && (
                          <a
                            href={exp.accessLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[#1cd8d2] hover:underline ml-1"
                          >
                            Visit <FaExternalLinkAlt className="text-[10px]" />
                          </a>
                        )}
                      </div>

                      {/* Key Achievements / Points */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 text-left mb-5">
                        {exp.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheckCircle className="text-[#1cd8d2] mt-0.5 shrink-0 text-xs sm:text-sm" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-md border border-cyan-400/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

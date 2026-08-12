import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./Project";
import pharmaProject from "../assets/drug-contrpller-project-cover-image.png";
import portfolioImage from "../assets/portfolio_cover_image.png";
import weatherProjectOverview from "../assets/weather project overview.png";
import projectManagement from "../assets/project management.png";
import toDoList from "../assets/TO-DO-LIST.png";
import imagesGallary from "../assets/images gallary.png";
import zorvynFinance from "../assets/zorvyn finanace.png";
import DateDevCover from "../assets/datedevCoverImage.png";

const Projects = () => {
  const projects = [
    {
      name: "DateDev",
      accessLink: "https://datedev.shop/",
      coverImageUrl: DateDevCover,
      description:
        "Date_Dev — Developer Networking Platform: Built a full-stack social networking platform that enables developers to discover and connect with potential collaborators through a Tinder-style swipe interface. Implemented secure cookie-based authentication, developer profile management, connection requests, Redux-based state management, protected routing, and responsive animated UI using React, Node.js, Express, MongoDB, Tailwind CSS, and Framer Motion",
      buildSkills:
        "Nodejs,ExpressJs,MongoDB,ReactJS,Redux Tool Kit,Javascript,TailwindCss,Framer Motion",
    },
    {
      name: "Project-Management",
      accessLink: "https://velozityprojectmanagement.netlify.app/",
      coverImageUrl: projectManagement,
      description:
        "This project is a full‑featured project management dashboard built from scratch with React, TypeScript, and Redux Toolkit. Its standout feature is a fully custom drag‑and‑drop system implemented without any external libraries—complete with mouse/touch support, a dynamic placeholder, drop‑zone highlighting, and smooth snap‑back. The list view uses a custom virtual scrolling engine to render 500+ tasks with zero performance degradation, while the timeline view provides a horizontal Gantt chart for task scheduling. Real‑time collaboration is simulated with avatar indicators that follow mock users across tasks, and all filters sync to the URL for shareable, bookmarkable views. The application achieved a perfect 100 Lighthouse performance score, showcasing advanced frontend engineering and a deep focus on user experience",
      buildSkills: "React with TypeScript,Redux Toolkit,Tailwind CSS",
    },
    {
      name: "Zorvyn Finance - Premium Personal Finance Dashboard",
      accessLink: "https://zorvyn-project-wine.vercel.app/",
      coverImageUrl: zorvynFinance,
      description:
        "Built a modern, high-fidelity fintech dashboard with real-time balance tracking, dynamic charts, role-based access (Admin/Viewer), CSV export, and LocalStorage persistence for Zorvyn FinTech internship assignment.",
      buildSkills:
        "React 18, Redux Toolkit, Tailwind CSS v4, Recharts, TanStack Table v8",
    },

    {
      name: "Personal Portfolio",
      accessLink: "https://karthiknakkalaportfolio.netlify.app/",
      coverImageUrl: portfolioImage,
      description:
        'A high-performance, responsive web application designed to showcase technical expertise and project architecture. Developed with a "mobile-first" philosophy, the site features optimized asset loading, custom CSS animations, and a modular component structure for easy scalability. It serves as a central hub for my digital identity, integrating API-driven contact forms and a curated gallery of full-stack applications',
      buildSkills: "React, Tailwind Css, Framer Motion",
    },

    {
      name: "Weather predicter",
      accessLink: "https://weather-predicter-opal.vercel.app/",
      coverImageUrl: weatherProjectOverview,
      description:
        "A sleek, modern weather forecasting application designed for real-time climate monitoring. This tool leverages geolocation and external weather APIs to provide users with hyper-local weather data, including air quality, visibility, and 5-day forecasts, all wrapped in a responsive, high-performance interface",
      buildSkills: "Html,css,javascript",
    },

    {
      name: "Image Gallary",
      accessLink: "https://celebraregallary-ebon.vercel.app/",
      coverImageUrl: imagesGallary,
      description:
        "A simple image gallary application which focusses on responsive across multiple screens and build with a features like make iany image as your favourite without re-render any component and storing those favourite images locally and after even refreshes those images were not removes from favourite section, build it with local storage",
      buildSkills: "React,tailwind css",
    },
  ];

  const glows = [
    "top-0 left-1/4 w-[335px] h-[335px] opacity-20 blur-[87px]",
    "bottom-6 right-0 w-[268px] h-[268px] opacity-10 blur-[80px]",
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full relative bg-black text-white overflow-hidden py-16"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            A collection of technical solutions focused on performance, genetic
            data analysis, and seamless user interfaces.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

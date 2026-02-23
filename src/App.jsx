import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testtimonials from "./sections/Testtimonials";
import IntroAnimations from "./components/IntroAnimations";



export default function App(){
  const [introDone,setIntroDone]=useState(false);
  
  return (
    <>

    {!introDone && <IntroAnimations onFinish={()=>setIntroDone(true)}/>}

    {introDone && (

    
    <div className="gradient relative text-white">
      <CustomCursor/>
      {/* <ParticlesBackground/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>)}
    </>
  )
}

import React, { useEffect, useState } from 'react'

const CustomCursor = () => {

  const [position,setPosition]=useState({x:0,y:0});

  useEffect(()=>{

    const moveHandler=(e)=>{
      setPosition({ x : e.clientX , y:e.clientY });
    }

    window.addEventListener('mousemove',moveHandler)

    return ()=>{
      window.removeEventListener('mousemove',moveHandler);
    }

  },[])

  return (
    <div className='pointer-events-none fixed top-0 left-0 z-999'
    style={{transform:`translate(${position.x-24}px,${position.y-24}px)`}}
    >
      <div 
      className='w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-2xl opacity-80 '
      />
    </div>
  )
}

export default CustomCursor
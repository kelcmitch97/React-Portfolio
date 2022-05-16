import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home= () => {
  return (
    <div name='home' className='w-full h-screen bg-[#006d77]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#e29578]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#edf6f9]'>Kelcie Mitchelmore</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#83c5be]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#83c5be] py-4 max-w-[700px]'></p>
        <div>

           <Link to="projects" spy={true} smooth={true} duration={500}>
           <button className='text-[#edf6f9] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e29578] hover:border-[#e29578]'>View Projects 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3'/>
          </span>
          
           </button>
        </Link>
      </div>
      </div>

    </div>
  )
}

export default Home;
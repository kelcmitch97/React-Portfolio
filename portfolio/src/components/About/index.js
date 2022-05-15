import React from 'react'
import Avatar from '../../assets/portfolio.PNG'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#006d77] text-[#edf6f9]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e29578]'>About</p>
            </div>
            <div>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <img src={Avatar} style={{ width: '300px' }} className='rounded-full'></img>
                </div>
                <div className='sm:text-right '>
                    <p className='text-4xl font-bold pb-4 text-[#e29578]'>Hi, I'm Kelcie!</p>
                    <p className='align-middle'>I am a full stack web developer looking to build and create a 
                      better user experience on the web. I recently earned a certificate
                      in full stack development from the University of Toronto Bootcamp, with newly developed skills in Javascript, Node.js, React.js and more. </p>
                </div>

            </div>
      </div>
    </div>
  )
}

export default About;
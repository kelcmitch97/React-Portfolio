import React from 'react';
import Project1Img from '../../assets/project1.jpg';
import Project2Img from '../../assets/project2.png';

const Projects = () => {
  return (
    <div name='projects' className='bg-[#006d77] w-full md:h-screen text-[#edf6f9]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-[#e29578]'>Projects</p>
              <p className='py-6'>Check out some of my recent projects</p>
          </div>
          {/* Container for Cards */}
          <div className='grid sm:grid-cols-2 md:grid-col-3 gap-4'>
              {/* Grid item */}
              <div style={{backgroundImage: `url(${Project1Img})`}} className='shadow-lg shadow-[#144145] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider '>
                        Html/CSS/JS Application
                      </span>
                      <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Code</button>
                        </a>            
                      </div>
                  </div>
              </div>

              <div style={{backgroundImage: `url(${Project2Img})`}} className='shadow-lg shadow-[#144145] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider '>
                        MySQL Application
                      </span>
                      <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Code</button>
                        </a>            
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </div>
  )
}

export default Projects;
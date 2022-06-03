import React from 'react';
import Project1Img from '../../assets/project1.jpg';
import Project2Img from '../../assets/project2.png';
import Project3Img from '../../assets/project3.png';
import Project4Img from '../../assets/project4.png';
import Project5Img from '../../assets/project5.png';
import Project6Img from '../../assets/project6.png';
import Project7Img from '../../assets/project7.jpg';


const Projects = () => {
  return (
    <div id='projects' name='projects' className='bg-[#006d77] w-full md:h-screen text-[#edf6f9]'>
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
                        <a href="https://h0rsesh0e.github.io/movieMusicMagic/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/H0RSESH0E/movieMusicMagic" target='_blank'>
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
                        <a href="https://therewillbecode.herokuapp.com/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kelcmitch97/thereWillBeCode" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Code</button>
                        </a>            
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${Project3Img})`}} className='shadow-lg shadow-[#144145] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider '>
                        PWA Application
                      </span>
                      <div className='pt-8 text-center'>
                        <a href="https://budget-tracker-kelcie.herokuapp.com/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kelcmitch97/19-budget-tracker" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Code</button>
                        </a>            
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${Project4Img})`}} className='shadow-lg shadow-[#144145] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider '>
                        PWA Application
                      </span>
                      <div className='pt-8 text-center'>
                        <a href="https://kelcmitch97.github.io/food-festival/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kelcmitch97/food-festival" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Code</button>
                        </a>            
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${Project5Img})`}} className='shadow-lg shadow-[#144145] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider '>
                        HTML/CSS/JS Portfolio
                      </span>
                      <div className='pt-8 text-center'>
                        <a href="https://kelcmitch97.github.io/newportfolio/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kelcmitch97/newportfolio" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Code</button>
                        </a>            
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${Project6Img})`}} className='shadow-lg shadow-[#144145] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider '>
                      Object Oriented Progamming
                      </span>
                      <div className='pt-8 text-center'>
                        <a href="/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kelcmitch97/10-team-profile-generator" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Code</button>
                        </a>            
                      </div>
                  </div>
              </div>

              <div style={{backgroundImage: `url(${Project7Img})`}} className='shadow-lg shadow-[#144145] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/* Hover */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider '>
                      MyAttic MERN Stack Project
                      </span>
                      <div className='pt-8 text-center'>
                        <a href="https://myattic-therewillbecodetoo.herokuapp.com/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#e29578] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/kelcmitch97/myattic" target='_blank'>
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


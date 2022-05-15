import React from 'react'
import resume from '../../assets/KelcieMitchelmore_Resume_2022.pdf'
import {HiArrowNarrowRight} from 'react-icons/hi'

 const Resume = () => {
  return (
    <div name='resume' className='bg-[#006d77] w-full md:h-screen text-[#edf6f9]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
    
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e29578]'>Skills</p>
            </div>
         
          
            <div className='max-w-[1000px] w-full px-4'>
                <div className='text-4xl'>
                    <p className='p-2'><u>Front-End:</u> HTML, CSS JavaScript, jQuery, React.js</p>
                    <p className='p-2'><u>Back-End:</u> Node.js, Express.js, MySQL, MongoDB</p>
                    <p className='p-2'><u>Tools:</u> Git, Github, Heroku, JawsDB</p>
                </div>
                <div>
                    <p className='py-6'>Download my full resume here: </p>
                </div>
                <div>
                    <a href={resume} download='KelcieMitchelmore_Resume_2022.pdf'>
                        <button className='text-[#edf6f9] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e29578] hover:border-[#e29578]'>Resume 
                            <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                            </span>
                        </button>
                     </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume;
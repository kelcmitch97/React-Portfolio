import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#006d77] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/3f840aab-1948-44fd-b449-a15e9d8dce7f' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#e29578] text-[#edf6f9]'>Contact Me</p>
            <p className='text-[#edf6f9] py-4'> Submit the form below or send me an email - kelciemitchelmore@gmail.com</p>
          </div>
          <input className='bg-[#edf6f9] p-2' type='text' placeholder='Name' name='name'/>
          <input className='bg-[#edf6f9] my-4 p-2' type='email' placeholder='Email' name='email'/>
          <textarea className='bg-[#edf6f9] p-2' name='message' rows='10' placeholder='Message'></textarea>
          <button className='text-[#edf6f9] border-2 hover:bg-[#e29578] hover:border-[#e29578] px-4 py-3 my-8 mx-auto'>Lets Chat!</button>
      </form>
    </div>
  )
}

export default Contact;

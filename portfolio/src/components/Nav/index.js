import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Nav = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#006d77] text-[#edf6f9]'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '50px' }} />
      </div>

      {/* NavBar */}
  
        <ul className='hidden md:flex'>
          <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
          </li>
          <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
          </li>
          <li>
          <Link to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
          </li>
          <li>
          <Link to="resume" spy={true} smooth={true} duration={500}>
          Resume
        </Link>
          </li>
          <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
          </li>
        </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#006d77] flex flex-col justify-center items-center'
        }>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="resume" spy={true} smooth={true} duration={500}>
          Resume
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
          </li>
      </ul>

      {/* Socials Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-[#ffddd2]'
            href='https://www.linkedin.com/in/kelciemitchelmore/' target="_blank" rel="noopener noreferrer">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-[#ffddd2]'
            href='https://github.com/kelcmitch97' target="_blank" rel="noopener noreferrer">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-[#ffddd2]'
            href='https://twitter.com/?lang=en' target="_blank" rel="noopener noreferrer">
              Twitter <FaTwitter size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;

import { React, useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {


  return (
    <div>
    
      <Nav />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact /> 
    </div>
  );
}

export default App;

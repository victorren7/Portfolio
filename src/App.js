import React from 'react';
import styled from 'styled-components'
import Scroll from 'react-scroll'

import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

import './App.css';

const ScrollLink = Scroll.Link;
const ScrollElement = Scroll.Element;

const App = () => {

  return (
    <div className="App">
    <header>
      <Nav>
        <SmoothScroll smooth to='HOME'>
          <span> Home </span>
        </SmoothScroll>
        <SmoothScroll smooth to='ABOUT'>
          <span> About </span>
        </SmoothScroll>
        <SmoothScroll smooth to='EDUCATION'>
          <span> Education</span>
        </SmoothScroll >
        <SmoothScroll smooth to='SKILLS'>
          <span> Skills</span>
        </SmoothScroll>
        <SmoothScroll smooth to='CONTACT'>
          <span> Contact Me</span>
        </SmoothScroll>
      </Nav>
    </header>
      <ScrollElement name='HOME'>
        <Home/>
      </ScrollElement>
      <ScrollElement name='ABOUT'>
        <About/>
      </ScrollElement>
      <ScrollElement name='EDUCATION'>
        <Education/>
      </ScrollElement>
      <ScrollElement name='SKILLS'>
        <Skills/>
      </ScrollElement>
      <ScrollElement name='CONTACT'>
        <Contact/>
      </ScrollElement>
    </div>
  );
  
}



const Nav = styled.nav`
 display: grid;
 grid-auto-flow: column;
 padding-top: 25px;
 width: 700px;
 margin: auto;
`

const SmoothScroll = styled(ScrollLink)`
  duration: 500;
  cursor: pointer;
`


export default App;

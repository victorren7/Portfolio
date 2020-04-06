import React from 'react';
import styled from 'styled-components'
import Scroll from 'react-scroll'
import map from 'lodash/map'

import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

import {screenSize} from './Utils/screenSize'
import './App.css';

const home = <Home/>
const about = <About/>
const education = <Education/>
const skills = <Skills/>
const contact = <Contact/>

const ScrollLink = Scroll.Link;
const ScrollElement = Scroll.Element;

const links = [
  {title:'Home', path:'HOME', component: home},
  {title:'About', path:'ABOUT', component: about},
  {title:'Education', path:'EDUCATION',component: education},
  {title:'Skills', path:'SKILLS', component: skills},
  {title: 'Contact Me', path:'CONTACT', component: contact},
]
console.log(links)

const App = () => {

  return (
    <div className="App">
      <header>
        <Nav>
          {map(links,(link,index) => {
            return(
              <SmoothScroll smooth to={link.path} key={index}>
                <span>{link.title}</span>
              </SmoothScroll>
            )
          })}
        </Nav>
      </header>
      {map(links, (link,index) => {
        return(
          <ScrollElement name={link.path} key={index}>
            {link.component}
          </ScrollElement>
        )
      })}
    </div>
  );
  
}



const Nav = styled.nav`
 @media ${screenSize.underDesktop} { 
  width: 100vh;
 }
 display: grid;
 grid-auto-flow: column;
 padding-top: 25px;
 margin: auto;
 text-align: center;
 @media
`

const SmoothScroll = styled(ScrollLink)`
  duration: 500;
  cursor: pointer;
`


export default App;

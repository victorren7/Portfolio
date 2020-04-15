import React from 'react';

import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

import Html from './Assets/html5-(1).png'
import Redux from './Assets/redux.png'
import Reatcs from './Assets/react-jsx.png'
import Css from './Assets/css3.png'
import Sass from './Assets/sass.png'
import StyledComponents from './Assets/styled-components.png'
import Bootstrap from './Assets/bootstrap.png'
import Javascript from './Assets/javascript-(1).png'

const home = <Home/>;
const about = <About/>;
const education = <Education/>;
const skills = <Skills/>;
const contact = <Contact/>;

export const links = [
  {title:'Home', path:'HOME', component: home},
  {title:'About', path:'ABOUT', component: about},
  {title:'Education', path:'EDUCATION',component: education},
  {title:'Skills', path:'SKILLS', component: skills},
  {title: 'Contact Me', path:'CONTACT', component: contact},
];

export const htmlIcons = [
  {title: 'HTML5', alt:'', src: Html },
  {title: 'JSX', alt:'', src: Reatcs},
];

export const cssIcons = [
  {title: 'CSS', alt:'html', src: Css },
  {title: 'SASS', alt:'jsx', src: Sass},
  {title: 'Styled Components', alt:'styled-components', src: StyledComponents},
  {title: 'Bootstrap', alt:'bootstrap', src: Bootstrap },
];

export const javascriptIcons = [
  {title: 'Javascript', alt:'javascript', src: Javascript},
  {title: 'React', alt:'react', src: Reatcs},
  {title: 'Redux', alt:'redux', src: Redux},
];


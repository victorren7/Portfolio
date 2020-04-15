import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import map from 'lodash/map';

import { links } from './constants';

import {screenSize} from './Utils/screenSize';
import './App.css';



const ScrollLink = Scroll.Link;
const ScrollElement = Scroll.Element;



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
};



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
`;

const SmoothScroll = styled(ScrollLink)`
  duration: 500;
  cursor: pointer;
`;


export default App;

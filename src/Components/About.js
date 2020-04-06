import React from 'react'
import styled from 'styled-components'

import {Container} from '../Utils/global.css'

const About = () => {
  return (
		<Wrapper>
			<Corner>
				<H2>Hello!</H2>
			</Corner>
			<Base>
				<Paragraph>
					Hello! My name is Victor Renderos. 
				</Paragraph>	
				<Paragraph>
					I have lived in the Portland Metro Area for all my life. I am a fan of the cold weather, but have an appreciation for warm sunny beaches. Another passion of mine is learning about different cultures. My goal is to work on new projects in different parts of the world. 
				</Paragraph>
				<Paragraph>
					As a junior web developer, I am always looking for new challenges. Whether it be learning new languages or relocating from this lovely city.
				</Paragraph>
				<Paragraph> 
					I am Javascript frontend engineer. I specialize in React and have experience in Redux and styled-components.
				</Paragraph>
				
				
			</Base>
		</Wrapper>
	)
};

const Wrapper = styled(Container)`
  height: 400px;
`

const Corner = styled.div`
	width: 200px;
	height: 40px;
	background-color: aquamarine;
`

const H2 = styled.h2`
margin: 0 0 0 10px;
`

const Base = styled.div`
	text-align: left;
	margin: auto;
	padding-top: 25px;
	width: 650px;
`

const Paragraph = styled.p`
	font-size: 18px;
`

export default About;
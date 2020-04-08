import React from 'react'
import styled from 'styled-components'

import {Container} from '../Utils/global.css'
import {screenSize} from '../Utils/screenSize'

import linkedin from '../Assets/linkedIn(1).png'
import github from '../Assets/github.png'

const Contact = () => {
	return (
		<Wrapper>
			<Corner>
			<H2>Contact</H2>
			</Corner>
			<Base>
				<Row>
					<Paragraph bold>Location</Paragraph>
					<Paragraph>Portland, Oregon</Paragraph>
				</Row>
				<Row>
					<Paragraph bold>
						Email
					</Paragraph>
					<Email href='mailto:renderos.victor@gmail.com'>
						renderos.victor@gmail.com
					</Email>
				</Row>
				<Row gridGap>
					<Paragraph bold>
						Social Media
					</Paragraph>
					<Grid>
						<a href='https://www.linkedin.com/in/victorrenderos/' target='_blank' rel="noopener noreferrer">
							<Image src={linkedin} alt='linkdin' />
						</a>
						<a href='https://github.com/victorren7' target='_blank' rel="noopener noreferrer">
							<Image src={github} alt='github' />
						</a>
					</Grid>
				</Row>
			</Base>
		</Wrapper>
	)
}

const Wrapper = styled(Container)`
  height: 220px;
	background-color: #F0F0F0;
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
	display: grid;
	grid-auto-flow: column;
	justify-content: center;
	grid-gap: 14%;
	text-align: center;
	margin-top:40px;
  @media ${screenSize.tablet} { 
		grid-gap: 30%;
	}
`

const Row = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: ${props => props.gridGap ? '7px' : 0};
	text-align: left;
`

const Grid = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-content: center;
	grid-gap: 20px;
`

const Paragraph = styled.p`
	margin: 0;
	font-weight: ${props => props.bold ? 600 : 400}
`

const Email = styled.a`
	color: lightslategrey;
	text-decoration: none;
` 

const Image = styled.img`
	width: 30px;
`

export default Contact;
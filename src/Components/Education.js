import React from 'react'
import styled from 'styled-components'

import {Container} from '../Utils/global.css'

const Education = () => {
	return (
		<Wrapper>
			<Corner>
				<H2>Education</H2>
			</Corner>
				<Card> 
					<Header>
					<H2card>TREEHOUSE</H2card>
					<Flex>
						<Span>Fullstack Javascript</Span>
						<Span>2019</Span>
					</Flex>
					</Header>
					<ul>
						<LI>Completed 16,160 points</LI>
						<LI>138 badges</LI>
						<LI>12 Units and projects completed</LI>
					</ul>
				</Card>
				<Body>
					<Link href='https://www.credential.net/1937a1a7-cfa0-4eba-8a8d-894e66b751bb' target='_blank'>Credential ID </Link>
					<Link href='https://teamtreehouse.com/victor07' target='_blank'>Treehouse Profile</Link>
				</Body>
		</Wrapper>
	)
}

const Wrapper = styled(Container)`
  height: 500px;
	border-top: lightgray 2px solid;
`

const Corner = styled.div`
	width: 200px;
	height: 40px;
	background-color: aquamarine;
`

const H2 = styled.h2`
	margin: 0 0 0 10px;
`

const Card = styled.div`
	margin: 45px auto auto;
	height: 250px;
	width: 400px;
	border-radius: 3px;	
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

`

const Header = styled.div`
	padding: 1px 0 10px 10px;
	border-bottom: 1px solid lightgray;	
`

const Flex = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	margin: 0 5px 00;
`
	
const H2card = styled.h2`
	color: #515769;
	font-weight: 300;
	margin: 10px 0;
`

const Span = styled.span`
	color: #F08080;
`

const LI = styled.li`
	margin: 12px;
	font-size: 18px;	
`

const Body = styled.div`
	display: grid;
	text-align: center;
	margin: 10px; 0;
	grid-auto-flow: row;
`

const Link = styled.a`
	text-decoration: none;
	color: lightslategrey;
	font-weight: 400;
	padding: 10px 0;
`

export default Education;
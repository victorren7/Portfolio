import React from 'react'
import styled from 'styled-components'

import cropped from '../Assets/cropped.jpg'
import { Container } from '../Utils/global.css'

const Home = () => {
	return (
		<HomeContainer>
			<Title>Victor Renderos</Title>
			<Content> Frontend Javascript</Content>
			<Image src={cropped} alt='self-potrait' />
		</HomeContainer>
	)
}

const HomeContainer = styled(Container)`
	margin: auto;
	background: linear-gradient(45deg, #282c34 50%, #ffdc9d 50%);
	height: 500px;
	text-align: center;
`;

const Title = styled.h1`
	padding-top: 25px;
	color: cadetblue
`;
const Content = styled.h4`
	color: rosybrown
`

const Image = styled.img`
	width: 300px;
	border-radius: 140px;
`;

export default Home;
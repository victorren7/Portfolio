import React from 'react'
import styled from 'styled-components'
import cropped from '../Assets/cropped.jpg'

const Home = () => {
	return (
		<Container>
			<Title>Victor Renderos</Title>
			<Content> Frontend Javascript</Content>
			<Image src={cropped} alt='self-potrait' />

		</Container>
	)
}

const Container = styled.div`
	margin: auto;
	background: #282c34;
	height: 500px;
	text-align: center;
`
const Title = styled.h1`
	padding-top: 25px;
	color: cadetBlue
`
const Content = styled.h4`
	color: cadetBlue
`

const Image = styled.img`
	width: 300px;
	border-radius: 140px;
`

export default Home;
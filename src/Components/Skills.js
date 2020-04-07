import React from 'react'
import styled from 'styled-components'

import {Container} from '../Utils/global.css'

import Html from '../Assets/html5-(1).png'
import redux from '../Assets/redux.png'
import reatcs from '../Assets/react-jsx.png'
import css from '../Assets/css3.png'
import sass from '../Assets/sass.png'
import styledComponents from '../Assets/styled-components.png'
import bootstrap from '../Assets/bootstrap.png'
import javascript from '../Assets/javascript-(1).png'

const Skills = () => {
  return (
		<SkillsWrapper>
			<Corner>
				<H2>Skills</H2>
			</Corner>
			<Card>
				<Content>
					<H4>HTML</H4>
					<Columns>
						<Row>
							<Image src={Html} alt='html'/>
							HTML5
						</Row>
						<Row>
							<Image src={reatcs} alt='jsx' />
							JSX
						</Row>
					</Columns>
				</Content>
			</Card>
			<Card>
				<Content>
					<H4>CSS</H4>
					<Columns>
						<Row>
							<Image src={css} alt='css'/>
							CSS
						</Row>
						<Row>
							<Image src={sass} alt='sass' />
							SASS
						</Row>
						<Row>
							<Image src={styledComponents} alt='styled-components' />
							Styled Components
						</Row>
						<Row>
							<Image src={bootstrap} alt='bootstrap' />
							Bootstrap
						</Row>
					</Columns>
				</Content>
			</Card>
			<Card>
				<Content>
					<H4>Javascript</H4>
					<Columns>
						<Row>
							<Image src={javascript} alt='javascript'/>
							Javascript
						</Row>
						<Row>
							<Image src={reatcs} alt='react' />
							React
						</Row>
						<Row>
							<Image src={redux} alt='redux' />
							Redux
						</Row>
					</Columns>
				</Content>
			</Card>
		</SkillsWrapper>
  )
}

const SkillsWrapper = styled(Container)`
	border-top: lightgray 2px solid;
`

const Corner = styled.div`
	width: 200px;
	height: 50px;
	background-color: aquamarine;
`

const H2 = styled.h2`
margin: 0 0 0 10px;
`

const Card = styled.div`
	max-width: 70%;
	margin: 30px auto 30px;
	border-radius: 2px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
	`
const Content = styled.div`
	padding: 20px;
`

const H4 = styled.h4`
	border-bottom: 1px solid #ddd;
	margin-bottom: 20px;
	padding-bottom: 10px;
`

const Columns = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-content: left;
	grid-gap: 25px;
`

const Row = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 5px;
	text-align: center;
	justify-items: center;
`

const Image = styled.img`
	width: 90px;
`

export default Skills;
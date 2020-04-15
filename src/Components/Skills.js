import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';

import { Container } from '../Utils/global.css';
import Corner from '../Utils/Corner'
import {htmlIcons, cssIcons, javascriptIcons } from '../constants';

import { screenSize } from '../Utils/screenSize';

const Skills = () => {
  return (
		<SkillsWrapper>
			<Corner title={'Skills'}/>
			<Card>
				<Content>
					<H4>HTML</H4>
					<Columns>
					{map(htmlIcons, (content, index) => {
						return(
							<Row key={index}>
								<Image src={content.src} alt={content.alt}/>
								{content.title}
							</Row>
						)
					})}
					</Columns>
				</Content>
			</Card>
			<Card>
				<Content>
					<H4>CSS</H4>
					<Columns>
						{map(cssIcons, (content, index) => {
							return(
								<Row key={index}>
									<Image src={content.src} alt={content.alt}/>
									{content.title}
								</Row>
							)
						})}
					</Columns>
				</Content>
			</Card>
			<Card>
				<Content>
					<H4>Javascript</H4>
					<Columns>
						{map(javascriptIcons, (content, index) => {
							return(
								<Row key={index}>
									<Image src={content.src} alt={content.alt}/>
									{content.title}
								</Row>
							)
						})}
					</Columns>
				</Content>
			</Card>
		</SkillsWrapper>
  );
};

const SkillsWrapper = styled(Container)`
	border-top: lightgray 2px solid;
`;

const Card = styled.div`
	max-width: 70%;
	margin: 30px auto 30px;
	border-radius: 2px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
	@media ${screenSize.desktop} { 
		max-width: 50%;
	}
`;

const Content = styled.div`
	padding: 20px;
`;

const H4 = styled.h4`
	border-bottom: 1px solid #ddd;
	margin-bottom: 20px;
	padding-bottom: 10px;
`;

const Columns = styled.div`
	@media ${screenSize.underSmallPhone} {
		display: flex;
	};
	display: grid;
	grid-auto-flow: column;
	justify-content: left;
	grid-gap: 25px;
`;

const Row = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 5px;
	text-align: center;
	justify-items: center;
`;

const Image = styled.img`
	width: 90px;
`;

export default Skills;
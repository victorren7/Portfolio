import React from 'react';
import styled from 'styled-components';

const Corner = ({title}) => {
  return (
    <Wrapper>
      <H2>{title}</H2>
    </Wrapper>
  )
};

const Wrapper = styled.div`
	width: 200px;
	height: 50px;
  background-color: aquamarine;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const H2 = styled.h2`
	margin: 0 0 0 10px;
`;

export default Corner;
import styled, { css } from 'styled-components';
import {screenSize} from './screenSize'

export const Container = styled.div`
  width: 100vh;
  @media ${screenSize.desktop} { 
		width: 100%;
	}
`

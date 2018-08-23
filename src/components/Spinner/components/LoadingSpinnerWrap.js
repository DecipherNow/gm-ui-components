import styled from "styled-components";

import { FONT_STACK_BASE } from 'style/styleVariables';

export const LoadingSpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONT_STACK_BASE};
  margin: auto;
  flex: 0 0 auto;
  
  ${props => props.orientation === 'vertical' ? (`
    text-align: center;
    flex-direction: column;
  `) : (`
    text-align: left;
    flex-direction: row;
  `)}
`;

export default LoadingSpinnerWrap;
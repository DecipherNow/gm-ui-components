import styled from "styled-components";
import { theme } from "style/theme";

export const LoadingSpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  margin: auto;
  flex: 0 0 auto;

  ${props =>
    props.orientation === "vertical"
      ? `
    text-align: center;
    flex-direction: column;
  `
      : `
    text-align: left;
    flex-direction: row;
  `};
`;

LoadingSpinnerWrap.defaultProps = {
};

export default LoadingSpinnerWrap;

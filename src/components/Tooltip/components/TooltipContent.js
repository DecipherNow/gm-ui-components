import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const TooltipContent = styled.div`
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_SM};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  z-index: ${({ theme }) => theme.ZINDEX_TOOLTIP};
  padding: ${spacingScale(1)};
  width: ${spacingScale(20)};
  opacity: 0;
  position: absolute;
  text-align: left;
  transition: opacity 0.5s, visibility 0.5s;
  white-space: normal;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  margin: ${spacingScale(1)};
  word-wrap: break-word;

  ${props =>
    props.visible
      ? `
          opacity: 1;
          visibility: visible;
        `
      : `
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        `};
`;

TooltipContent.defaultProps = {
};

export default TooltipContent;

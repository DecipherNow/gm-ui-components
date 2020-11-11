import styled, { css } from "styled-components";
import { theme } from "style/theme";

const TooltipWrap = styled.div`
  display: inline-block;
  position: relative;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};

  :hover > :last-child {
    ${props =>
      !props.hideTooltip &&
      css`
        opacity: 1;
        visibility: visible;
        z-index: ${({ theme }) => theme.ZINDEX_TOOLTIP};
      `};
  }
`;

TooltipWrap.defaultProps = {
};

export default TooltipWrap;

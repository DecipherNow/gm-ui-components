import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const TAB_WIDTH_BASE = "1%";

// Note: Edge requires the overflow: hidden property to maintian
// equal sized cards. flex-basis is not sufficient!
const Wrap = styled.div`
  background: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_REGULAR};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  flex: 1 1 ${TAB_WIDTH_BASE};
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_SM};
  min-height: ${spacingScale(8)};
  position: relative;
  transition: all 0.15s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: ${spacingScale(10)};
  margin: ${spacingScale(0.25)};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
    opacity: 0;
  }
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};
  }
`;

Wrap.defaultProps = {
};

export default Wrap;

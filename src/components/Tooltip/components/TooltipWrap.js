import styled from "styled-components";
import { lighten } from "polished";

import { COLOR_BLACK, ZINDEX_TOOLTIP } from "../../../style/styleVariables";

const TooltipWrap = styled.div`
  border-bottom: 1px solid ${lighten(0.85, COLOR_BLACK)};
  cursor: help;
  display: inline-block;
  position: relative;

  :hover > :last-child {
    opacity: 1;
    visibility: visible;
    z-index: ${ZINDEX_TOOLTIP};
  }
`;

export default TooltipWrap;

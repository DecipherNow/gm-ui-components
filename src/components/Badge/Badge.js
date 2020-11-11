import styled from "styled-components";
import { readableColor, darken } from "polished";

import { spacingScale } from "style/styleFunctions";
// import { keen, keenDark } from "style/theme";

// Create invertColorScheme function;

const Badge = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_SEMIBOLD};
  text-align: center;
  display: flex;
  align-items: center;
  line-height: 0.9;
  height: fit-content;
  padding: ${spacingScale(0.5)};
  background-color: ${props => props.color || props.theme.COLOR_BRAND_PRIMARY};
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_SM};
  /* color: ${props =>
    readableColor(
      darken(0.12, props.color || props.theme.COLOR_BACKGROUND_DEFAULT),
      keen.COLOR_CONTENT_CONTRAST,
      keenDark.COLOR_CONTENT_CONTRAST
    )}; */
  margin-right: ${spacingScale(0.5)};
  white-space: nowrap;

  svg:first-child {
    margin: -100% -${spacingScale(0.5)};
  }
`;

export default Badge;

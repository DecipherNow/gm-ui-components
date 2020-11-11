import styled, { css } from "styled-components";
import { mix, readableColor } from "polished";

import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const color = css`
  color: ${({ theme }) =>
    readableColor(
      mix(
        theme.OPACITY_LIGHTEST,
        theme.COLOR_BACKGROUND_TWO,
        theme.COLOR_BACKGROUND_THREE
      )
    )};
`;

const NavCardDetails = styled.dl`
  ${color};
  margin: 0 ${spacingScale(0.5)} ${spacingScale(0.25)} ${spacingScale(4.5)}; /* Odd number required to align with title */
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  line-height: 1.2;

  &:last-child {
    margin-bottom: ${spacingScale(1)};
  }
`;

NavCardDetails.defaultProps = {
};

export default NavCardDetails;

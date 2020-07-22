import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { keen } from "style/theme";


export const Opener = styled.div`
  margin-right: 0.75rem;
  &:focus,
  &:active,
  &:focus:active {
    outline: none;
    ${({ theme }) =>
      css`
        border-radius: ${theme.CORNER_RADIUS_MAX};
        box-shadow: 0 0 0 2px
          ${transparentize(
            1 - theme.OPACITY_LIGHTER,
            theme.COLOR_INTENT_HIGHLIGHT
          )};
      `};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(90deg);
    `}
`;

Opener.defaultProps = {
  theme: keen
};

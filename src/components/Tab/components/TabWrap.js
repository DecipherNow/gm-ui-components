import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const activeStyles = css`
  box-shadow: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
`;

const hoverStyles = css`
  box-shadow: ${({ theme }) =>
      transparentize(1 - theme.OPACITY_LIGHTER, theme.COLOR_INTENT_HIGHLIGHT)}
    0px -2px inset;
`;

const downStyles = css`
  box-shadow: ${({ theme }) =>
      transparentize(1 - theme.OPACITY_LIGHT, theme.COLOR_INTENT_HIGHLIGHT)}
    0px -2px inset;
`;

const TabWrap = styled.a`
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  padding: ${spacingScale(0.5)} ${spacingScale(2)};
  flex: 0 0 auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.15s ease;

  &:hover {
    ${hoverStyles};
  }

  &:active {
    ${downStyles};
    transition-duration: 0;
    user-select: none;
  }

  &:focus {
    outline: none;
  }

  &:not(:hover):focus {
    outline: 2px solid
      ${({ theme }) =>
        transparentize(
          1 - theme.OPACITY_LIGHTER,
          theme.COLOR_INTENT_HIGHLIGHT
        )};

    &:active {
      outline: 2px solid
        ${({ theme }) =>
          transparentize(
            1 - theme.OPACITY_LIGHT,
            theme.COLOR_INTENT_HIGHLIGHT
          )};
    }
  }

  /* if active... */
  ${props =>
    props.active &&
    css`
      &,
      &:hover,
      &:active {
        ${activeStyles};
      }
    `};

  ${props =>
    props.disabled &&
    css`
      &,
      &:hover,
      &:active {
        cursor: default;
        color: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
        box-shadow: none;
      }
    `};
`;

TabWrap.defaultProps = {
};

export default TabWrap;

import styled from "styled-components";
import { transparentize, readableColor, darken } from "polished";

import { theme } from "style/theme";

import InputBox from "components/util/InputBox";

const CheckmarkColor = ({ theme }) =>
  readableColor(darken(0.1, theme.COLOR_INTENT_HIGHLIGHT));

const RadioBox = styled(InputBox).attrs(() => ({
  type: "radio"
}))`
  border-radius: 200px;

  &:after {
    position: static;
    width: 0;
    height: 0;
    border-radius: 200px;
    box-sizing: border-box;
    transform: scale(0);
    transition: all 0.3s ease;
  }

  &:checked {
    &:enabled {
      background: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
    }

    &:after {
      background-color: ${CheckmarkColor};
      width: 50%;
      height: 50%;
      transform: scale(1);
    }
  }

  *:hover > & {
    background: ${({ theme }) =>
      transparentize(1 - theme.OPACITY_LIGHTEST, theme.COLOR_INTENT_HIGHLIGHT)};

    &:checked {
      background: ${({ theme }) =>
        transparentize(1 - theme.OPACITY_LIGHT, theme.COLOR_INTENT_HIGHLIGHT)};
      border-color: transparent;
    }

    *:active > & {
      background: ${({ theme }) =>
        transparentize(
          1 - theme.OPACITY_LIGHTER,
          theme.COLOR_INTENT_HIGHLIGHT
        )};

      &:checked {
        background: ${({ theme }) =>
          transparentize(
            1 - theme.OPACITY_LIGHTER,
            theme.COLOR_INTENT_HIGHLIGHT
          )};
        border-color: transparent;
      }
    }
  }
`;

RadioBox.defaultProps = {
};

export default RadioBox;

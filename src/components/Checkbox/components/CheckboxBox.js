import styled from "styled-components";
import { transparentize, readableColor, darken } from "polished";

import { theme } from "style/theme";

import InputBox from "components/util/InputBox";

const CheckmarkColor = ({ theme }) =>
  readableColor(darken(0.1, theme.COLOR_INTENT_HIGHLIGHT));

const CheckboxBox = styled(InputBox).attrs(() => ({
  type: "checkbox"
}))`
  border-radius: ${({ theme }) =>
    parseInt(theme.CORNER_RADIUS_INPUT, 10) / 2 + 1}px;

  &:after {
    width: 45%;
    height: 80%;
    border-style: solid;
    border-width: 0 2px 2px 0;
    border-color: ${CheckmarkColor};
    margin-top: -1px;
    transform: translateY(-50%) translateX(-50%) rotate(45deg) scale(0.1);
    background: none;
    transition: all 0.3s ease;
  }

  &:checked:after {
    transform: translateY(-50%) translateX(-50%) rotate(45deg) scale(1);
  }

  &:indeterminate {
    &:enabled {
      background: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
    }

    &:after {
      opacity: 1;
      width: 50%;
      height: 0;
      border-width: 0 0 2px;
      transform: translateY(-50%) translateX(-50%) rotate(0) scale(1);
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

      &:checked,
      &:indeterminate {
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

CheckboxBox.defaultProps = {
};

export default CheckboxBox;

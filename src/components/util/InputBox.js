import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { spacingScale } from "style/styleFunctions";
import {
  FORM_HIGHLIGHT_SIZE,
  formInteractionStyles
} from "./InputFieldInteractionStyles";
import { keen } from "style/theme";

const BORDER_WIDTH = 1;

const ACTIVE_SHADOW = ({ theme }) =>
  css`inset 0 0 0 1px ${theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT}`;

const FOCUS_SHADOW = ({ theme }) =>
  css`0 0 0 ${FORM_HIGHLIGHT_SIZE}px ${transparentize(
    1 - theme.OPACITY_LIGHTER,
    theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT
  )}`;

const InputBox = styled.input`
  ${formInteractionStyles};
  border: ${({ theme }) =>
    css`
      ${BORDER_WIDTH}px solid ${theme.brandColor ||
      theme.COLOR_INTENT_HIGHLIGHT}
    `};
  color: ${({ theme }) => theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT};
  font-size: ${spacingScale(2)};
  margin: ${spacingScale(0.25)};
  appearance: none;
  flex: 0 0 calc(1em - ${BORDER_WIDTH * 2}px);
  height: calc(1em - ${BORDER_WIDTH * 2}px);
  width: calc(1em - ${BORDER_WIDTH * 2}px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  box-sizing: border-box;

  &:focus {
    box-shadow: ${FOCUS_SHADOW}, 0;
  }

  &:active {
    box-shadow: ${ACTIVE_SHADOW}, 0;

    &:focus {
      box-shadow: ${FOCUS_SHADOW}, ${ACTIVE_SHADOW};
    }
  }

  &:after {
    content: "";
    box-sizing: border-box;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &:checked {
    background: ${({ theme }) =>
      theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT};

    &:after {
      opacity: 1;
    }
  }

  &:disabled {
    border-color: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};
    opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
    box-shadow: none;

    &:checked {
      background-color: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};
    }
  }
`;

InputBox.defaultProps = {
  theme: keen
};

export default InputBox;

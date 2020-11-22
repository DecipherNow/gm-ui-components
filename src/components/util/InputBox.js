import styled from "styled-components";
import { readableColor, darken, transparentize } from 'polished';

import { formInteractionStyles } from "./InputFieldInteractionStyles";

const InputBox = styled.input`
  ${formInteractionStyles};
  border: ${({ theme }) => theme.CONTROL_BORDER_WIDTH} solid ${({ theme }) => theme.INPUT_BOX_INACTIVE_BORDER_COLOR};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  appearance: none;
  font-size: 1em;
  height: 1em;
  width: 1em;
  position: relative;
  transition: all 0.15s ease;
  box-sizing: border-box;

  /* Base styles for inner object */
  &:after {
    content: "";
    box-sizing: border-box;
    opacity: 0;
    position: absolute;
    transition: all 0.3s ease;
    color: ${({ theme }) => readableColor(darken(0.1, theme.COLOR_INTENT_HIGHLIGHT))};
  }

  /* Hover and focus when unchecked */
  label:hover > &,
  &:hover,
  &:focus {
    color: ${({ theme }) => transparentize(0.25, theme.COLOR_INTENT_HIGHLIGHT)};
  }

  /* Checked items use highlight color */
  &:checked,
  &:indeterminate[type="checkbox"] {
    color: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
    background: currentColor;

    /* Inner object visible */
    &:after {
      opacity: 1;
    }

    /* Hover and focus when checked */
    label:hover > &,
    &:hover,
    &:focus {
      border-color: transparent;
    }
  }

  /* Disabled items use non-highlight color
  and are faded */
  &:disabled {
    opacity: 0.5;

    &,
    label:hover > &,
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
    }

    &:checked,
    &[type="checkbox"]:indeterminate {
      background: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
      border-color: transparent;
    }
  }
`;

InputBox.defaultProps = {
};

export default InputBox;

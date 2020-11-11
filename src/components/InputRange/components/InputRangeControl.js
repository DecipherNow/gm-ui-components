import styled, { css } from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { mix, transparentize } from "polished";
import {
  formInteractionStyles,
  FORM_HIGHLIGHT_SIZE
} from "components/util/InputFieldInteractionStyles";
import { theme } from "style/theme";

const BORDER_WIDTH = 2;
const THUMB_SIZE = "1em";
const TRACK_HEIGHT = spacingScale(0.25);

const ACTIVE_SHADOW = ({ theme }) =>
  css`inset 0 0 0 1px ${theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT}`;

const FOCUS_SHADOW = ({ theme }) =>
  css`0 0 0 ${FORM_HIGHLIGHT_SIZE}px ${transparentize(
    1 - theme.OPACITY_LIGHTER,
    theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT
  )}`;
const PLACEHOLDER_SHADOW = "0 0 0 transparent";

/* Because many of the selectors need to be duplicated
in order to appear correctly in across browsers, set the
primary styles here, and pipe them into the proper
selectors later */

/* Style the plain thumb */
const THUMB_STYLE = css`
  background-color: ${({ theme }) =>
    mix(
      theme.OPACITY_LIGHTER,
      theme.COLOR_BACKGROUND_DEFAULT,
      theme.COLOR_CONTENT_DEFAULT
    )};
  box-shadow: 0 0 0 ${BORDER_WIDTH}px
      ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT},
    ${PLACEHOLDER_SHADOW};
  flex: 0 0 ${THUMB_SIZE};
  width: ${THUMB_SIZE};
  height: ${THUMB_SIZE};
  appearance: none;
  cursor: pointer;
  border-radius: 100px;
  transition: all 0.15s ease;
  z-index: 1; /* Fix for clipping issue noticed in Safari 12 */
`;

/* Style the plain track */
const TRACK_STYLE = css`
  height: ${TRACK_HEIGHT};
  background-color: ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  border-radius: 100px;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
`;

/* Style the thumb when the field is hovered */
const FIELD_HOVERED_THUMB_STYLE = ({ theme }) => css`
  background-color: ${theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT};

  &:hover {
    /* Style the thumb when the field is hovered and the thumb is hovered */
    background-color: ${({ theme }) =>
      mix(
        theme.OPACITY_LIGHTEST,
        theme.COLOR_BACKGROUND_DEFAULT,
        theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT
      )};
  }
`;

const FIELD_FOCUSED_THUMB_STYLE = ({ theme }) => css`
  box-shadow: ${FOCUS_SHADOW}, ${PLACEHOLDER_SHADOW};
  background-color: ${theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT};
`;

const FIELD_ACTIVE_THUMB_STYLE = ({ theme }) => css`
  box-shadow: ${ACTIVE_SHADOW}, ${PLACEHOLDER_SHADOW};
  background-color: ${theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT};
`;

const FIELD_ACTIVE_AND_FOCUSED_THUMB_STYLE = css`
  box-shadow: ${FOCUS_SHADOW}, ${ACTIVE_SHADOW};
`;

const InputRangeControl = styled.input.attrs(props => ({
  type: "range",
  defaultValue: props.defaultValue
}))`
  background: transparent;
  ${formInteractionStyles};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  padding: calc(${THUMB_SIZE} / 2) 0;
  user-select: auto;
  flex: 1 1 auto;
  display: flex;
  appearance: none;
  align-items: center;
  height: 2px;
  border: 0;
  position: relative;
  transition: all 0.15s ease;

  &:focus,
  &:focus:active {
    box-shadow: none;
    border: none;
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  ::-webkit-slider-thumb {
    ${THUMB_STYLE};
  }
  ::-moz-range-thumb {
    ${THUMB_STYLE};
  }

  ::-webkit-slider-runnable-track {
    ${TRACK_STYLE};
  }
  ::-moz-range-track {
    ${TRACK_STYLE};
  }

  /* Style the slider shuttle when the form field is hovered */
  &:hover::-webkit-slider-thumb {
    ${FIELD_HOVERED_THUMB_STYLE};
  }
  &:hover::-webkit-slider-thumb {
    ${FIELD_HOVERED_THUMB_STYLE};
  }

  /* Style the slider shuttle when the form field is focused */
  &:focus::-webkit-slider-thumb {
    ${FIELD_FOCUSED_THUMB_STYLE};
  }
  &:focus::-moz-range-thumb {
    ${FIELD_FOCUSED_THUMB_STYLE};
  }

  /* Style the slider shuttle when the form field is active */
  &:active::-webkit-slider-thumb {
    ${FIELD_ACTIVE_THUMB_STYLE};
    /* Style the slider shuttle when the form field is active and focused */
    &:focus::-webkit-slider-thumb {
      ${FIELD_ACTIVE_AND_FOCUSED_THUMB_STYLE};
    }
  }

  &:active::-moz-range-thumb {
    ${FIELD_ACTIVE_THUMB_STYLE};
    &:focus::-moz-range-thumb {
      ${FIELD_ACTIVE_AND_FOCUSED_THUMB_STYLE};
    }
  }
`;

InputRangeControl.defaultProps = {
};

export default InputRangeControl;

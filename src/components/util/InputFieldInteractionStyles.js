import { css } from "styled-components";

import { transparentize, mix } from "polished";

function makeFocusHighlight(focused, theme) {
  if (focused) {
    return ('box-shadow: 0 0 0 ' + theme.FOCUS_RING_SIZE + ' ' + transparentize(1 - theme.OPACITY_LIGHTER, theme.COLOR_INTENT_HIGHLIGHT));
  } else {
    return ('box-shadow: 0 0 0 ' + theme.FOCUS_RING_SIZE + ' ' + ' transparent');
  }
}

export function formInteractionStyles() {
  return css`
    ${({ theme }) => makeFocusHighlight(false, theme)}

    &:invalid {
      &:required {
        background-color: ${({ theme }) =>
          mix(
            theme.OPACITY_LIGHTEST,
            theme.COLOR_INTENT_DANGER,
            theme.COLOR_BACKGROUND_DEFAULT
          )};
      }
    }

    &:disabled {
      background-color: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
    }

    &:valid {
      &:required {
        background-color: ${({ theme }) =>
          mix(
            theme.OPACITY_LIGHTEST,
            theme.COLOR_INTENT_SUCCESS,
            theme.COLOR_BACKGROUND_DEFAULT
          )};

        &[type="checkbox"],
        &[type="radio"] {
          &:after {
            border-color: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
          }
        }
      }
    }

    /* Need to explicitly choose inputs to style */
    &:read-only[type="text"],
    &:read-only[type="password"],
    &:read-only[type="search"],
    &:read-only[type="url"],
    &:read-only[type="tel"],
    &:read-only[type="number"],
    &:read-only[type="email"] {
      border-style: dashed !important;
    }

    &:hover {
    }

    &:focus,
    &:focus:active {
      outline: none;
      border: ${({ theme }) => theme.CONTROL_BORDER_WIDTH} solid ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
      ${({ theme }) => makeFocusHighlight(true, theme)}
    }
  `;
}

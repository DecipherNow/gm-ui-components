import { css } from "styled-components";

import { transparentize, mix } from "polished";

export const FORM_HIGHLIGHT_SIZE = 2.5;

export function formInteractionStyles({ props }) {
  return css`
    &:invalid {
      box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;

      &:required {
        background-color: ${props =>
          mix(
            props.theme.OPACITY_15,
            props.theme.COLOR_INTENT_DANGER,
            props.theme.COLOR_BACKGROUND_A
          )};
      }
    }

    &:required {
    }

    &:disabled {
      background-color: ${props => props.theme.COLOR_BACKGROUND_B};
    }

    &:valid {
      &:required {
        background-color: ${props =>
          mix(
            props.theme.OPACITY_15,
            props.theme.COLOR_INTENT_SUCCESS,
            props.theme.COLOR_BACKGROUND_A
          )};

        &[type="checkbox"],
        &[type="radio"] {
          &:after {
            border-color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
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
      border: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
      box-shadow: 0 0 0 ${FORM_HIGHLIGHT_SIZE}px
        ${props =>
          transparentize(
            1 - props.theme.OPACITY_50,
            props.theme.COLOR_INTENT_HIGHLIGHT
          )};
    }

    &:active {
    }
  `;
}

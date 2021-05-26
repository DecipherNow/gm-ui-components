import { css } from "styled-components";

import { transparentize, mix } from "polished";

export const FORM_HIGHLIGHT_SIZE = 2.5;

export function formInteractionStyles() {
  return css`
    &:invalid {
      box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;

      &:required {
        background-color: ${({ theme }) =>
          mix(
            theme.OPACITY_LIGHTEST,
            theme.COLOR_INTENT_DANGER,
            theme.COLOR_BACKGROUND_DEFAULT
          )};
      }
    }

    &:required {
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
    &:focus:active,
    &.isFocusVisible {
      outline: none;
      border: ${css`1px solid ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT}`};
      box-shadow: ${css`0 0 0 ${FORM_HIGHLIGHT_SIZE}px ${({ theme }) =>
        transparentize(
          1 - theme.OPACITY_LIGHTER,
          theme.COLOR_INTENT_HIGHLIGHT
        )}`};
    }

    &:active {
    }
  `;
}

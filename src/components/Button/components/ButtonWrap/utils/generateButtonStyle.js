import { css } from "styled-components";
import { darken, readableColor, getLuminance, setLightness } from "polished";

// Maps button types to a particular color
function generateButtonTypeColors(theme, type) {
  switch (type) {
    case "danger":
      return theme.COLOR_INTENT_DANGER;
    case "info":
      return theme.COLOR_INTENT_INFO;
    case "warning":
      return theme.COLOR_INTENT_WARNING;
    case "primary":
      return theme.COLOR_INTENT_HIGHLIGHT;
    default:
    case "default":
      return theme.COLOR_BACKGROUND_DEFAULT;
  }
}

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with button styles
 *
 * @param {any} {
 *   buttonBackgroundColorBase = COLOR_BACKGROUND_DEFAULT,
 *   buttonBorderColorBase = COLOR_BACKGROUND_DEFAULT,
 *   buttonLabelColorBase = contrastColor(COLOR_BACKGROUND_DEFAULT, 100),
 * }
 * @returns string
 */
function generateButtonStyle(theme, type, dangerouslySetColor, renderBorder) {
  const baseColor = dangerouslySetColor
    ? dangerouslySetColor
    : generateButtonTypeColors(theme, type);

  const colorStyles = css`
    background-color: ${baseColor};
    border-color: ${renderBorder ? darken(0.1, baseColor) : `transparent`};
    color: ${readableColor(
      darken(0.1, baseColor),
      setLightness(0, theme.COLOR_CONTENT_DEFAULT),
      setLightness(1, theme.COLOR_CONTENT_DEFAULT)
    )};
    /* darkening the color first gives a more appealing result */
  `;

  const interactionStyles =
    getLuminance(baseColor) >= 0.5
      ? css`
          border-color: ${renderBorder ? darken(0.1, baseColor) : `transparent`};

          &:hover {
            filter: saturate(120%) brightness(95%);
          }

          &:active {
            transition-duration: 0s;
            filter: saturate(80%) brightness(90%) contrast(110%);
          }

          &:focus {
            z-index: 1;
          }

          &[disabled],
          &[disabled]:hover,
          &[disabled]:focus,
          &[disabled]:active {
            cursor: not-allowed;
            filter: saturate(0) opacity(70%);
          }
        `
      : css`
          &:hover {
            filter: saturate(120%) contrast(80%) brightness(1.1);
          }

          &:active {
            transition-duration: 0s;
            filter: saturate(120%) contrast(75%) brightness(1.15);
          }

          &:focus {
            z-index: 1;
          }

          &[disabled],
          &[disabled]:hover,
          &[disabled]:focus,
          &[disabled]:active {
            cursor: not-allowed;
            filter: saturate(0) opacity(70%);
          }
        `;

  return css`
    ${colorStyles};
    ${interactionStyles};
  `;
}

export default generateButtonStyle;

import { contrastColor } from "style/styleFunctions";
import {
  COLOR_BRAND_PRIMARY,
  COLOR_INTENT_HIGHLIGHT,
  COLOR_INTENT_DANGER,
  COLOR_INTENT_WARNING,
  COLOR_BACKGROUND_A
} from "style/styleVariables";
import { darken } from "polished";

// Maps button types to a particular color
function generateButtonTypeColors(type) {
  switch (type) {
    case "danger":
      return COLOR_INTENT_DANGER;
    case "info":
      return COLOR_INTENT_HIGHLIGHT;
    case "warning":
      return COLOR_INTENT_WARNING;
    case "primary":
      return COLOR_BRAND_PRIMARY;
    default:
    case "default":
      return COLOR_BACKGROUND_A;
  }
}

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with buton styles
 *
 * @param {any} {
 *   buttonBackgroundColorBase = COLOR_WHITE,
 *   buttonBorderColorBase = COLOR_WHITE,
 *   buttonLabelColorBase = contrastColor(COLOR_WHITE, 100),
 * }
 * @returns string
 */
function generateButtonStyle(type, renderBorder) {
  const baseColor = generateButtonTypeColors(type);

  return `
  background-color: ${baseColor};
  color: ${contrastColor(baseColor, 1)};
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
`;
}

export default generateButtonStyle;

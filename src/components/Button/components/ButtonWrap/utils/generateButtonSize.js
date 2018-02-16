import { spacingScale } from "../../../../../style/styleFunctions";
import { decipher } from "../../../../../style/styleVariables";

const theme = decipher;

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with button size
 *
 * @param {any} {
 *   fontSizeMultiplier = 1,
 *   horizontalPaddingMultiplier = 1,
 *   verticalPaddingMultiplier = 1,
 *   textIsUppercase = false
 * }
 * @returns string
 */
function _buttonSizeStyleBlockGenerator({
  fontSizeMultiplier = 1,
  horizontalPaddingMultiplier = 1,
  verticalPaddingMultiplier = 1,
  textIsUppercase = false
}) {
  const fontSizeNormal = theme.fontSizeNormal;
  const borderRadiusNormal = theme.borderRadiusNormal;
  const contentSpacingBase = parseInt(spacingScale(0.5), 10);
  return `
    font-size: ${Math.ceil(parseInt(fontSizeNormal, 10) * fontSizeMultiplier)}px;
    border-radius: ${borderRadiusNormal};
    padding: ${contentSpacingBase *
    verticalPaddingMultiplier}px ${contentSpacingBase *
    horizontalPaddingMultiplier}px;
    ${textIsUppercase ? "text-transform: uppercase;" : ""}
  `;
}

/**
 * Utility function that renders a block of CSS attributes for a
 * particular string (xs, sm, normal, lg, xl)
 *
 * @param {string} size
 * @returns
 */
function generateButtonSize(size) {
  switch (size) {
    case "xs": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 0.5,
        horizontalPaddingMultiplier: 1.5,
        verticalPaddingMultiplier: 1,
        textIsUppercase: true
      });
    }
    case "sm": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 0.75,
        horizontalPaddingMultiplier: 1.5,
        verticalPaddingMultiplier: 1,
        textIsUppercase: true
      });
    }
    case "lg": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 1.25,
        horizontalPaddingMultiplier: 3,
        verticalPaddingMultiplier: 1,
        textIsUppercase: false
      });
    }
    case "xl": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 1.5,
        horizontalPaddingMultiplier: 3,
        verticalPaddingMultiplier: 1,
        textIsUppercase: false
      });
    }
    default:
    case "normal": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 1,
        horizontalPaddingMultiplier: 2,
        verticalPaddingMultiplier: 1,
        textIsUppercase: false
      });
    }
  }
}

export default generateButtonSize;

import { mix, desaturate } from "polished";
import {
  COLOR_BRAND_PRIMARY,
  COLOR_WHITE
} from "../../../../../style/colorVariables";
import {
  darkenColor,
  lightenColor,
  contrastColor
} from "../../../../../style/styleFunctions";

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with buton styles
 *
 * @param {any} {
 *   buttonBackgroundColorBase = COLOR_WHITE,
 *   buttonBorderColorBase = COLOR_WHITE,
 *   buttonLabelColorBase = contrastColor(COLOR_WHITE, 100),
 *   buttonActiveStatus = false,
 *   buttonOutlineStyle = "raisedOutline",
 *   buttonOutlineStyleDepth = 0.06, // 0-100% // default: 6%,
 *   buttonReactionStyle = "darken", // darken, lighten // default: darken
 *   buttonReactionDegree = 0.06, // 0-100% // default: 6%
 *   buttonHoverReactionDegree = 0.06 * 0.25,
 *   buttonActiveReactionDegree = 0.06 * 2,
 *   buttonDownReactionDegree = 0.06,
 *   buttonActiveMixBaseColor = COLOR_BRAND_PRIMARY,
 *   buttonActiveMixBaseLabelColor = contrastColor(COLOR_BRAND_PRIMARY, 100),
 *   buttonActiveMixDegree = 1 //default 100%
 * }
 * @returns string
 */
function generateButtonStyle({
  buttonBackgroundColorBase = COLOR_WHITE,
  buttonBorderColorBase = COLOR_WHITE,
  buttonLabelColorBase = contrastColor(COLOR_WHITE, 1),
  buttonActiveStatus = false,
  buttonOutlineStyle = "raisedOutline",
  buttonOutlineStyleDepth = 0.06, // 0-100% // default: 6%,
  buttonReactionStyle = "darken", // darken, lighten // default: darken
  buttonReactionDegree = 0.06, // 0-100% // default: 6%
  buttonHoverReactionDegree = 0.06 * 0.25,
  buttonActiveReactionDegree = 0.06 * 2,
  buttonDownReactionDegree = 0.06,
  buttonActiveMixBaseColor = COLOR_BRAND_PRIMARY,
  buttonActiveMixBaseLabelColor = contrastColor(COLOR_BRAND_PRIMARY, 1),
  buttonActiveMixDegree = 1 //default 100%
}) {
  // default style Types (static, hover, down, active, activeDown)
  // this object feeds all the css at the bottom of the function
  // in this object we unite defaults with inputs
  let styleTypes = {
    staticStyles: {
      backgroundColor: buttonBackgroundColorBase,
      color: buttonLabelColorBase,
      borderColor: buttonBorderColorBase
    },
    hoverStyles: {},
    downStyles: {},
    activeStyles: {},
    activeDownStyles: {}
  };

  // Create style for each property, in each state, under each processed condition
  if (buttonReactionStyle === "darken") {
    // Hover Styles
    styleTypes.hoverStyles["backgroundColor"] = darkenColor(
      buttonBackgroundColorBase,
      buttonHoverReactionDegree
    );
    console.log("buttonLabelColorBase", buttonLabelColorBase);
    styleTypes.hoverStyles["color"] = darkenColor(
      buttonLabelColorBase,
      buttonHoverReactionDegree
    );
    styleTypes.hoverStyles["borderColor"] = darkenColor(
      buttonBorderColorBase,
      buttonHoverReactionDegree
    );
    // Down Styles
    styleTypes.downStyles["backgroundColor"] = darkenColor(
      buttonBackgroundColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    styleTypes.downStyles["color"] = darkenColor(
      buttonLabelColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    styleTypes.downStyles["borderColor"] = darkenColor(
      buttonBorderColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    // Active Styles
    styleTypes.activeStyles["backgroundColor"] = mix(
      buttonActiveMixDegree,
      darkenColor(buttonBackgroundColorBase, buttonActiveReactionDegree),
      buttonActiveMixBaseColor
    );
    styleTypes.activeStyles["color"] = mix(
      buttonActiveMixDegree,
      darkenColor(buttonLabelColorBase, buttonActiveReactionDegree),
      buttonActiveMixBaseLabelColor
    );
    styleTypes.activeStyles["borderColor"] = darkenColor(
      mix(
        buttonActiveMixDegree,
        buttonBorderColorBase,
        buttonActiveMixBaseColor
      ),
      buttonActiveReactionDegree + buttonDownReactionDegree
    );
    // Active Down Styles
    styleTypes.activeDownStyles["backgroundColor"] = mix(
      buttonActiveMixDegree,
      darkenColor(
        buttonBackgroundColorBase,
        buttonActiveReactionDegree + buttonDownReactionDegree
      ),
      buttonActiveMixBaseColor
    );
    styleTypes.activeDownStyles["color"] = mix(
      buttonActiveMixDegree,
      darkenColor(
        buttonLabelColorBase,
        buttonActiveReactionDegree + buttonDownReactionDegree
      ),
      buttonActiveMixBaseLabelColor
    );
    styleTypes.activeDownStyles["borderColor"] = mix(
      buttonActiveMixDegree,
      darkenColor(
        buttonBorderColorBase,
        buttonActiveReactionDegree + buttonDownReactionDegree
      ),
      buttonActiveMixBaseColor
    );
  } else {
    // Assume button reaction style == lighten
    // Hover Styles
    styleTypes.hoverStyles["backgroundColor"] = lightenColor(
      buttonBackgroundColorBase,
      buttonHoverReactionDegree
    );
    styleTypes.hoverStyles["color"] = lightenColor(
      buttonLabelColorBase,
      buttonHoverReactionDegree
    );
    styleTypes.hoverStyles["borderColor"] = lightenColor(
      buttonBorderColorBase,
      buttonHoverReactionDegree
    );
    // Down Styles
    styleTypes.downStyles["backgroundColor"] = lightenColor(
      buttonBackgroundColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    styleTypes.downStyles["color"] = lightenColor(
      buttonLabelColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    styleTypes.downStyles["borderColor"] = lightenColor(
      buttonBorderColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    // Active Styles
    styleTypes.activeStyles["backgroundColor"] = lightenColor(
      buttonBackgroundColorBase,
      buttonActiveReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
    styleTypes.activeStyles["color"] = lightenColor(
      buttonLabelColorBase,
      buttonActiveReactionDegree
    ).mix(buttonActiveMixBaseLabelColor, buttonActiveMixDegree);
    styleTypes.activeStyles["borderColor"] = lightenColor(
      buttonBorderColorBase,
      buttonActiveReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
    // Active Down Styles
    styleTypes.activeDownStyles["backgroundColor"] = lightenColor(
      buttonBackgroundColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
    styleTypes.activeDownStyles["color"] = lightenColor(
      buttonLabelColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseLabelColor, buttonActiveMixDegree);
    styleTypes.activeDownStyles["borderColor"] = lightenColor(
      buttonBorderColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
  }

  // Generation of outline styles based on styleOptions and styleTypes objects
  const buttonOutlineStyles = {
    raisedOutline: {
      staticStyles: {
        borderColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      },
      hoverStyles: {
        borderColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      },
      downStyles: {
        borderColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      },
      activeStyles: {
        borderColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      },
      activeDownStyles: {
        borderColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      }
    },
    shadow: {
      staticStyles: {
        borderBottomColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      hoverStyles: {
        borderBottomColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      downStyles: {
        borderBottomColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeStyles: {
        borderBottomColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeDownStyles: {
        borderBottomColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        )
      }
    },
    raised: {
      staticStyles: {
        borderTopColor: lightenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      hoverStyles: {
        borderTopColor: lightenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      downStyles: {
        borderTopColor: lightenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeStyles: {
        borderTopColor: lightenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeDownStyles: {
        borderTopColor: lightenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        )
      }
    },
    outline: {
      staticStyles: {
        borderColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      hoverStyles: {
        borderColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      downStyles: {
        borderColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeStyles: {
        borderColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeDownStyles: {
        borderColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        )
      }
    },
    none: {
      staticStyles: {
        borderColor: styleTypes.staticStyles.backgroundColor
      },
      activeStyles: {
        borderColor: styleTypes.activeStyles.backgroundColor
      }
    }
  };

  // Distribute generated outline styles based on the input
  // by overwriting default generated outline styles
  const outlineOptionsTypes = buttonOutlineStyles[buttonOutlineStyle];
  const outlineOptionTypesKeys = Object.keys(outlineOptionsTypes);
  // Loop through generated buttonOutlineStyles that correspond to the input outline Style (raised, raisedOutline, none, shadow, etc.)
  for (let x = 0, len = outlineOptionTypesKeys.length; x < len; x++) {
    // Then look into each Type (static, active, activeDown) within
    // styleTypes object (which is the output that feeds the css styles at the bottom)
    // and either supplement or overwrite existing properties
    // based on the information that is within generated outline styles
    let outlineOptionKeys = Object.keys(
      outlineOptionsTypes[outlineOptionTypesKeys[x]]
    );
    for (let y = 0, len = outlineOptionKeys.length; y < len; y++) {
      styleTypes[outlineOptionTypesKeys[x]][outlineOptionKeys[y]] =
        outlineOptionsTypes[outlineOptionTypesKeys[x]][outlineOptionKeys[y]];
    }
  }

  const baseStyles = buttonActiveStatus
    ? styleTypes.activeStyles
    : styleTypes.staticStyles;
  const downStyles = buttonActiveStatus
    ? styleTypes.activeDownStyles
    : styleTypes.downStyles;
  const hoverStyles = buttonActiveStatus
    ? styleTypes.activeStyles
    : styleTypes.hoverStyles;

  return `
  background-color: ${baseStyles["backgroundColor"]};
  border-color: ${baseStyles["borderColor"]};
  ${baseStyles["borderTopColor"]
    ? `border-top-color: ${baseStyles["borderTopColor"]};`
    : ""}
  ${baseStyles["borderBottomColor"]
    ? `border-bottom-color: ${baseStyles["borderBottomColor"]};`
    : ""}
  color: ${baseStyles["color"]};
  &:active {
    ${!buttonActiveStatus ? "transition-duration: 0s;" : ""}
    background-color: ${downStyles["backgroundColor"]};
    border-color: ${downStyles["borderColor"]};
    ${downStyles["borderTopColor"]
      ? `border-top-color: ${downStyles["borderTopColor"]};`
      : ""}
    ${downStyles["borderBottomColor"]
      ? `border-bottom-color: ${downStyles["borderBottomColor"]};`
      : ""}
    color: ${downStyles["color"]};
  }

  &:hover {
    background-color: ${hoverStyles["backgroundColor"]};
    border-color: ${hoverStyles["borderColor"]};
    ${hoverStyles["borderTopColor"]
      ? `border-top-color: ${hoverStyles["borderTopColor"]};`
      : ""}
    ${hoverStyles["borderBottomColor"]
      ? `border-bottom-color: ${hoverStyles["borderBottomColor"]};`
      : ""}
    color: ${hoverStyles["color"]};
  } 

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0aab2a;
    z-index: 1;
  }

  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus,
  &[disabled]:active {
    cursor: default;
    opacity: 0.8;
    background-color: ${darkenColor(
      desaturate(1, buttonBackgroundColorBase),
      buttonReactionDegree
    )};
    border-color: ${darkenColor(
      desaturate(1, buttonBorderColorBase),
      buttonReactionDegree
    )};
    color: ${darkenColor(
      desaturate(1, buttonLabelColorBase),
      buttonReactionDegree
    )};
  }
`;
}

export default generateButtonStyle;

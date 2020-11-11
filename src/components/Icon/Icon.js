import React from "react";
import PropTypes from "prop-types";

import StyledSVG from "./components/StyledSVG";
import { theme } from "style/theme";

/**
 * Renders an Icon wrapping a Glyph component with any additional styling props
 * @param {any} { optional styling props}
 * @returns JSX elements
 */
export default function Icon({
  ariaLabelledby,
  hasBadge,
  badgeColor,
  badgePosition,
  borderColor,
  borderWidth,
  children,
  fillColor,
  fillOpacity,
  glyphName,
  size,
  ...props
}) {
  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby}
      focusable="false"
      size={size}
      id={glyphName}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      borderWidth={borderWidth}
      borderColor={borderColor}
      {...props}
    >
      {hasBadge && (
        <mask id="badgeMask" className="badgeMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="white"
            fillOpacity="1"
          />
          <circle
            cx={badgePosition.x}
            cy={badgePosition.y}
            r="15"
            fill="black"
            fillOpacity="1"
          />
        </mask>
      )}
      <g className="glyph" mask={hasBadge ? "url(#badgeMask)" : undefined}>
        {children}
      </g>
      {hasBadge && (
        <>
          <circle
            className="badge"
            cx={badgePosition.x}
            cy={badgePosition.y}
            r="10"
            fillOpacity="1"
            fill={badgeColor}
          />
        </>
      )}
    </StyledSVG>
  );
}

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  badgeColor: PropTypes.string,
  badgePosition: PropTypes.object,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glyphName: PropTypes.string,
  hasBadge: PropTypes.bool,
  size: PropTypes.string
};

Icon.defaultProps = {
  hasBadge: false,
  badgePosition: {
    x: 46,
    y: 16
  },
  badgeColor: "red",
  borderColor: "currentColor",
  borderWidth: "1.00001px", // SVG strokes with vector-effect: non-scaling-stroke; tend to look very bad at 1px
  fillColor: "currentColor",
  fillOpacity: 0.15,
  size: "1.7145em"
};

Icon.displayName = "Icon";

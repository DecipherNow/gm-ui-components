import React from "react";
import PropTypes from "prop-types";

import StyledSVG from "./components/StyledSVG";
import { theme } from "style/theme";

/**
 * Renders an Icon wrapping a Glyph component with any additional styling props
 * @param {any} { optional styling props}
 * @returns JSX elements
 */

const IconGridSize = 64;

export default function Icon({
  ariaLabelledby,
  badgeColor,
  badgeMaskOffset,
  badgePosition,
  badgeSize,
  children,
  fill,
  fillOpacity,
  glyphName,
  hasBadge,
  isNegated,
  negationLineAngle,
  negationLineTrim,
  negationLineWidth,
  size,
  stroke,
  strokeOpacity,
  strokeWidth,
  ...props
}) {
  const deprecatedFields = {
    borderWidth: "strokeWidth",
    borderColor: "stroke",
    fillColor: "fill"
  };

  Object.keys(deprecatedFields).forEach(
    df =>
      props[df] !== undefined &&
      console.warn(
        `Use ${deprecatedFields[df]} rather than ${df}. ${df} will be deprecated in gm-ui-components v3.`
      )
  );

  const iconMaskId = glyphName + size + "iconMask";

  if (negationLineWidth === undefined) {
    if (strokeWidth !== 0) {
      negationLineWidth = strokeWidth;
    } else {
      negationLineWidth = "1.0001px";
    }
  }

  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby}
      fill={props.fillColor || fill}
      fillOpacity={fillOpacity}
      focusable="false"
      id={glyphName}
      size={size}
      stroke={props.borderColor || fill}
      strokeOpacity={strokeOpacity}
      strokeWidth={props.borderWidth || strokeWidth}
      {...props}
    >
      {(isNegated || hasBadge) && (
        <mask id={iconMaskId}>
          <rect
            x="0"
            y="0"
            width={IconGridSize}
            height={IconGridSize}
            fill="white"
            fillOpacity="1"
          />
          {isNegated && (
            <line
              className="negationLine maskHideArea"
              stroke="black"
              strokeLinecap="round"
              strokeWidth={"calc(" + negationLineWidth + " * 3)"}
              transform={
                negationLineAngle
                  ? "rotate(" +
                    negationLineAngle +
                    " " +
                    IconGridSize / 2 +
                    " " +
                    IconGridSize / 2 +
                    ")"
                  : undefined
              }
              vectorEffect="non-scaling-stroke"
              x1={IconGridSize - negationLineTrim}
              x2={negationLineTrim}
              y1={IconGridSize - negationLineTrim}
              y2={negationLineTrim}
            />
          )}
          {hasBadge && (
            <circle
              className="badge maskHideArea"
              cx={badgePosition.x}
              cy={badgePosition.y}
              fill="black"
              fillOpacity="1"
              r={"calc(" + badgeSize + " + " + badgeMaskOffset + ")"}
            />
          )}
        </mask>
      )}
      <g
        className="glyph"
        mask={isNegated || hasBadge ? "url(#" + iconMaskId + ")" : undefined}
        transform="rotate(0.0001)"
      >
        {children}
      </g>
      {isNegated && (
        <line
          className="negationLine"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={negationLineWidth}
          transform={
            negationLineAngle
              ? "rotate(" +
                negationLineAngle +
                " " +
                IconGridSize / 2 +
                " " +
                IconGridSize / 2 +
                ")"
              : undefined
          }
          vectorEffect="non-scaling-stroke"
          x1={IconGridSize - negationLineTrim}
          x2={negationLineTrim}
          y1={IconGridSize - negationLineTrim}
          y2={negationLineTrim}
        />
      )}
      {hasBadge && (
        <circle
          className="badge"
          cx={badgePosition.x}
          cy={badgePosition.y}
          r={badgeSize}
          stroke="none"
          fillOpacity="1"
          fill={badgeColor}
        />
      )}
    </StyledSVG>
  );
}

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  badgeColor: PropTypes.string,
  badgeMaskOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  badgePosition: PropTypes.object,
  badgeSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  fill: PropTypes.string,
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glyphName: PropTypes.string,
  hasBadge: PropTypes.bool,
  isNegated: PropTypes.bool,
  negationLineAngle: PropTypes.number,
  negationLineTrim: PropTypes.number,
  negationLineWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  stroke: PropTypes.string,
  strokeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.defaultProps = {
  badgeColor: "red",
  badgeMaskOffset: "3px",
  badgePosition: { x: 46, y: 16 },
  badgeSize: "8px",
  fill: "currentColor",
  fillOpacity: 0.15,
  hasBadge: false,
  isNegated: false,
  negationLineTrim: 12,
  size: "1.7145em",
  stroke: "currentColor",
  strokeWidth: "1.00001px", // SVG strokes with vector-effect: non-scaling-stroke; tend to look very bad at 1px
  theme: theme
};

Icon.displayName = "Icon";

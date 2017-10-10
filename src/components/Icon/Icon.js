import React from "react";
import PropTypes from "prop-types";

import IconBackground from "./components/IconBackground";
import IconBorder from "./components/IconBorder";
import StyledG from "./components/StyledG";
import StyledSVG from "./components/StyledSVG";
import Glyph from "./components/Glyphs";

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundSizeRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundStyle: PropTypes.string,
  borderColor: PropTypes.string,
  borderOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  glyphColor: PropTypes.string,
  glyph: PropTypes.string,
  glyphSizeRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};

Icon.defaultProps = {
  ariaLabelledby: "ariaLabelledby",
  backgroundColor: "currentColor",
  backgroundOpacity: 1,
  borderColor: "currentColor",
  borderOpacity: 1,
  borderWidth: 1,
  glyphColor: "currentColor",
  glyph: "",
  glyphSizeRatio: 1,
  backgroundSizeRatio: 1,
  title: ""
}

/**
 * Renders an Icon wrapping a Glyph component with any additional styling props
 * @param {any} { optional styling props}
 * @returns JSX elements
 */
export default function Icon({
  ariaLabelledby,
  backgroundColor,
  backgroundOpacity,
  backgroundStyle,
  borderColor,
  borderOpacity,
  borderStyle,
  borderWidth,
  children,
  glyph,
  glyphColor,
  glyphSizeRatio,
  backgroundSizeRatio,
  title
}) {
  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby}
      iconRatio={backgroundSizeRatio}
      focusable="false"
    >
      {backgroundStyle && (
        <IconBackground
          name={backgroundStyle}
          backgroundColor={backgroundColor}
          backgroundOpacity={backgroundOpacity}
          ratio={backgroundSizeRatio}
        />
      )}
      {borderStyle && (
        <IconBorder
          name={borderStyle}
          borderColor={borderColor}
          borderOpacity={borderOpacity}
          borderWidth={borderWidth}
          ratio={backgroundSizeRatio}
        />
      )}
      <StyledG title={glyph} ratio={glyphSizeRatio}>
        <title>{title ? title : glyph}</title>
        <Glyph name={glyph} ratio={glyphSizeRatio} glyphColor={glyphColor} />
        {children}
      </StyledG>
    </StyledSVG>
  );
}

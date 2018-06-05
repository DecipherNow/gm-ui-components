import { PropTypes } from "prop-types";
import React from "react";
import * as Glyphs from "../Glyphs";

import ButtonWrap from "./components/ButtonWrap";
import ButtonLabelPrefix from "./components/ButtonLabelPrefix";
import ButtonLabelSuffix from "./components/ButtonLabelSuffix";

Button.propTypes = {
  active: PropTypes.bool, // If the button should be style as active or not
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  clickAction: PropTypes.any.isRequired, // click handler
  disabled: PropTypes.bool, // disables the button
  glyph: PropTypes.string, // Glyph to display in the button
  glyphColor: PropTypes.string, // Color for the glyph
  glyphSize: PropTypes.oneOf(["normal", "xs", "sm", "lg", "xl"]),
  label: PropTypes.string.isRequired, // label for the button
  labelStyle: PropTypes.object,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]), // Vertical: Icon top, label bottom; Horizontal: Icon left, label right;
  outline: PropTypes.oneOf([
    "raised", // Add highlight effect to top edge and shadow effect to bottom edge
    "outline", // Add outline effect
    "shadow", // Add shadow effect to bottom edge
    "none", // No effects
    "raised-outline"
  ]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Add prefix text to button label
  size: PropTypes.oneOf(["normal", "xs", "sm", "lg", "xl"]), // Relative size of the button
  style: PropTypes.object, // style prop
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Add suffix text to button label
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf([
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "warning"
  ])
};

Button.defaultProps = {
  active: false,
  clickAction: () => {},
  disabled: false,
  size: "normal",
  orientation: "horizontal"
};

/**
 * General purpose button
 * @param {Object} props - see propTypes
 * @returns JSX.Element
 */
export default function Button({
  active,
  children,
  clickAction,
  disabled,
  glyph,
  glyphColor,
  glyphSize,
  label,
  orientation,
  prefix,
  size,
  style,
  suffix,
  outline,
  tabIndex,
  type,
  labelStyle
}) {
  const Glyph = Glyphs[glyph];
  return (
    <ButtonWrap
      active={active}
      type={type}
      size={size}
      outline={outline}
      orientation={orientation}
      disabled={disabled}
      onClick={clickAction}
      tabIndex={tabIndex}
      title={label}
      style={style}
      glyphSize={glyphSize}
    >
      {Glyph && <Glyph glyphColor={glyphColor} />}
      {children}
      <span style={labelStyle}>
        {prefix ? <ButtonLabelPrefix>{prefix}</ButtonLabelPrefix> : ""}
        {label}
        {suffix ? <ButtonLabelSuffix>{suffix}</ButtonLabelSuffix> : ""}
      </span>
    </ButtonWrap>
  );
}

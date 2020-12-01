import { lch, cubehelix } from "d3-color";

// Configuration
const COLORSPACE = lch;
let PROPERTY_LIMITS;
if (COLORSPACE === lch) {
  PROPERTY_LIMITS = {
    h: [0, 360],
    c: [0, 100],
    l: [0, 120]
  };
} else if (COLORSPACE === cubehelix) {
  PROPERTY_LIMITS = {
    h: [0, 360],
    c: [0, 1],
    l: [0, 1]
  };
}

const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

function colorify(color, colorSpace = COLORSPACE) {
  return colorSpace(color);
}

const colorPropertyAdjust = (color, property, adjust) => {
  let result = colorify(color);
  result[property] += adjust;
  return result;
};
const colorPropertySet = (color, property, value) => {
  console.log({ color, property, value });
  let result = colorify(color);
  result[property] = value;
  return result;
};

// TODO: Needs testing
export function adjustHue(color, adjustment) {
  return colorPropertyAdjust(color, "h", adjustment);
}
export function adjustChroma(color, adjustment) {
  return colorPropertyAdjust(color, "c", adjustment);
}
export function adjustLightness(color, adjustment) {
  return colorPropertyAdjust(color, "l", adjustment);
}
export function adjustOpacity(color, adjustment) {
  return colorPropertyAdjust(color, "opacity", adjustment);
}

export function setHue(color, hue) {
  return colorPropertySet(color, "h", hue);
}
export function setChroma(color, chroma) {
  chroma = lerp(PROPERTY_LIMITS.c[0], PROPERTY_LIMITS.c[1], chroma);
  return colorPropertySet(color, "c", chroma);
}
export function setLightness(color, lightness) {
  lightness = lerp(PROPERTY_LIMITS.l[0], PROPERTY_LIMITS.l[1], lightness);
  return colorPropertySet(color, "l", lightness);
}
export function setOpacity(color, opacity) {
  return colorPropertySet(color, "opacity", opacity);
}

// TODO: Needs testing
export function readableColor(
  color,
  colorIfLight = "#000",
  colorIfDark = "#fff"
) {
  color = colorify(color);
  if (color.l > 0.5) {
    // color is light
    return colorIfLight;
  } else {
    // color is dark
    return colorIfDark;
  }
}

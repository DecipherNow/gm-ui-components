import { lch, hsl, cubehelix, color as d3color } from "d3-color";

// Configuration
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/

// Default Colorspace
let DEFAULT_COLORSPACE = lch;

// Colorspace property details
const PROPERTY_LIMITS = {
  lch: {
    h: [0, 360],
    c: [0, 150],
    l: [0, 120]
  },
  hsl: {
    h: [0, 360],
    s: [0, 1],
    l: [0, 1]
  },
  cubehelix: {
    h: [0, 360],
    s: [0, 2],
    l: [0, 1]
  }
};

// Utils
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/

// Linear interpolation
export const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

// Clamp between values
// Used for adjustments to opacity, saturation, and brightness
export const clamp = (value, min = 0, max = 1) => {
  return Math.min(Math.max(value, min), max);
};

// Get the saturation-like property for a given colorspace
export const saturationProperty = colorSpace =>
  colorSpace === lch || colorSpace === "lch" ? "c" : "s";

// Create color from color's components
export const color = (
  hue,
  saturation,
  brightness,
  colorSpace = DEFAULT_COLORSPACE
) => {
  saturation = lerpValueInPropertyRange(
    saturation,
    saturationProperty(colorSpace),
    colorSpace
  );
  brightness = lerpValueInPropertyRange(brightness, "l", colorSpace);

  switch (colorSpace) {
    case cubehelix:
      return cubehelix(hue, saturation, brightness);
    default:
    case lch:
      return lch(brightness, saturation, hue);
  }
};

// Core Functions
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/

// Lerp (brightness or saturation)
export function lerpValueInPropertyRange(
  value,
  property,
  colorSpace = DEFAULT_COLORSPACE
) {
  if (property === "s") {
    property = saturationProperty(colorSpace);
  }
  const result = lerp(
    PROPERTY_LIMITS[colorSpace.name][property][0],
    PROPERTY_LIMITS[colorSpace.name][property][1],
    value
  );

  return result;
}

export const normalizeColor = (color, colorSpace = DEFAULT_COLORSPACE) => {
  color.h = clamp(color.h, 0, PROPERTY_LIMITS[colorSpace.name].h);
  color.c = clamp(color.c, 0, PROPERTY_LIMITS[colorSpace.name].c);
  color.l = clamp(color.l, 0, PROPERTY_LIMITS[colorSpace.name].l);
  return color;
};

// Convert the given color a new colorspace
export function colorify(color, colorSpace = DEFAULT_COLORSPACE) {
  return colorSpace(color);
}

// Adjust a given color by a value of a property, in a colorspace
export const adjustProperty = (
  color,
  property,
  adjust,
  colorSpace = DEFAULT_COLORSPACE
) => {
  let result = colorify(color, colorSpace);
  result[property] += adjust;
  return normalizeColor(result, colorSpace);
};

// Set a given color's property to a given value, in a colorspace
export const setProperty = (
  color,
  property,
  value,
  colorSpace = DEFAULT_COLORSPACE
) => {
  return colorify(color, colorSpace).copy({ [property]: value });
};

// Set a given color's property to a given value, in a colorspace
export const getProperty = (
  color,
  property,
  colorSpace = DEFAULT_COLORSPACE
) => {
  if (property === "s") {
    property = saturationProperty(colorSpace);
  }
  return colorify(color, colorSpace)[property];
};

// Adjusting Values
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/

// Adjust Hue
export function adjustHue(color, adjustment, colorSpace = DEFAULT_COLORSPACE) {
  adjustment = (adjustment % 360) * Math.sign(adjustment);
  return adjustProperty(color, "h", adjustment, colorSpace);
}

// Adjust Saturation (or chroma)
export function adjustSaturation(
  color,
  adjustment,
  colorSpace = DEFAULT_COLORSPACE
) {
  const property = saturationProperty(colorSpace);
  adjustment = lerpValueInPropertyRange(adjustment, property);
  return adjustProperty(color, property, adjustment, colorSpace);
}

// Adjust Brightness
export function adjustBrightness(
  color,
  adjustment,
  colorSpace = DEFAULT_COLORSPACE
) {
  adjustment = lerpValueInPropertyRange(adjustment, "l");
  return adjustProperty(color, "l", adjustment, colorSpace);
}

// Adjust Opacity
export function adjustOpacity(
  color,
  adjustment,
  colorSpace = DEFAULT_COLORSPACE
) {
  return adjustProperty(color, "opacity", adjustment, colorSpace);
}

// Setting Values
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/

// Set Hue
export function setHue(color, hue, colorSpace = DEFAULT_COLORSPACE) {
  return setProperty(color, "h", hue, colorSpace);
}

// Set Saturation (Chroma)
export function setSaturation(
  color,
  saturation,
  colorSpace = DEFAULT_COLORSPACE
) {
  const property = saturationProperty(colorSpace);
  saturation = lerpValueInPropertyRange(saturation, property, colorSpace);
  return setProperty(color, property, saturation, colorSpace);
}

// Set Brightness
export function setBrightness(
  color,
  brightness,
  colorSpace = DEFAULT_COLORSPACE
) {
  brightness = lerpValueInPropertyRange(brightness, "l", colorSpace);
  return setProperty(color, "l", brightness, colorSpace);
}

// Set Opacity
export function setOpacity(color, opacity, colorSpace = DEFAULT_COLORSPACE) {
  return setProperty(color, "opacity", opacity, colorSpace);
}

// Getting Values
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/

// Get Hue
export function getHue(color, colorSpace = DEFAULT_COLORSPACE) {
  return getProperty(color, "h", colorSpace);
}

// Get Brightness
export function getBrightness(color, colorSpace = DEFAULT_COLORSPACE) {
  return getProperty(color, "l", colorSpace);
}

// Get Saturation
export function getSaturation(color, colorSpace = DEFAULT_COLORSPACE) {
  const property = saturationProperty(colorSpace);
  return getProperty(color, property, colorSpace);
}

// Matching Values
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/

// Match Hue
export function matchHue(
  matchSource,
  matchDestination,
  colorSpace = DEFAULT_COLORSPACE
) {
  const sourceHue = getProperty(matchSource, "h", colorSpace);
  return setHue(matchDestination, sourceHue, colorSpace);
}

// Match Brightness
export function matchBrightness(
  matchSource,
  matchDestination,
  colorSpace = DEFAULT_COLORSPACE
) {
  const sourceBrightness = getProperty(matchSource, "l", colorSpace);
  return setBrightness(matchDestination, sourceBrightness, colorSpace);
}

// Match Saturation
export function matchSaturation(
  matchSource,
  matchDestination,
  colorSpace = DEFAULT_COLORSPACE
) {
  const property = saturationProperty(colorSpace);
  const sourceSaturation = getProperty(matchSource, property, colorSpace);
  return setSaturation(matchDestination, sourceSaturation, colorSpace);
}

// Readability
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/
// ------------------------------/

// Get Readable Color
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

// Get Contrast Ratio

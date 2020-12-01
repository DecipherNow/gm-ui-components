import { lch, hsl, cubehelix } from "d3-color";

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
}

// Configuration
const COLORSPACE = lch;

let propertyLimits;
console.log({ propertyLimits });
if (COLORSPACE === lch) {
  propertyLimits = PROPERTY_LIMITS[lch.name];
} else if (COLORSPACE === cubehelix) {
  propertyLimits = PROPERTY_LIMITS[cubehelix];
}

// Utils
const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

function colorify(color, colorSpace = COLORSPACE) {
  return colorSpace(color);
}

const saturationProperty = colorSpace => {
  if (colorSpace === lch) {
    return 'c'
  }
  if (colorSpace === hsl) {
    return 's'
  } else if (colorSpace === cubehelix) {
    return 's'
  }
}

const colorPropertyAdjust = (color, property, adjust, colorSpace) => {
  let result = colorify(color, colorSpace);
  result[property] += adjust;
  return result;
};

const colorPropertySet = (color, property, value, colorSpace) => {
  let result = colorify(color, colorSpace);
  result[property] = value;
  return result;
};



// TODO: Needs testing
export function adjustHue(color, adjustment, colorSpace) {
  return colorPropertyAdjust(color, "h", adjustment, colorSpace);
}

export function adjustSaturation(color, adjustment, colorSpace) {
  if (colorSpace) { propertyLimits = PROPERTY_LIMITS[colorSpace.name]; }
  let property;
  if (colorSpace === lch) {
    property = 'c'
  } else if (colorSpace === cubehelix) {
    property = 's'
  }
  return colorPropertyAdjust(color, "c", adjustment, colorSpace);
}

export function adjustBrightness(color, adjustment, colorSpace) {
  return colorPropertyAdjust(color, "l", adjustment, colorSpace);
}

export function adjustOpacity(color, adjustment, colorSpace) {
  return colorPropertyAdjust(color, "opacity", adjustment, colorSpace);
}

export function setHue(color, hue, colorSpace) {
  return colorPropertySet(color, "h", hue, colorSpace);
}

export function setSaturation(color, saturation, colorSpace) {
  // colorSpace = colorSpace || lch;
  propertyLimits = PROPERTY_LIMITS[colorSpace.name];
  const property = saturationProperty(colorSpace);
  saturation = lerp(propertyLimits[property][0],
    propertyLimits[property][1],
    saturation);
  return colorPropertySet(color, property, saturation, colorSpace);
}

export function setBrightness(color, brightness, colorSpace) {
  if (colorSpace) { propertyLimits = PROPERTY_LIMITS[colorSpace.name]; }
  brightness = lerp(propertyLimits.l[0], propertyLimits.l[1], brightness);
  return colorPropertySet(color, "l", brightness, colorSpace);
}

export function setOpacity(color, opacity, colorSpace) {
  return colorPropertySet(color, "opacity", opacity, colorSpace);
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

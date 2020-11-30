import { lch } from 'd3-color';
import PropTypes from 'prop-types';

// Must be optionally theme-aware
// Take colors
// Support color transformations in good colorspace

const getValueFromTheme = (theme, value) => (theme[value]);

const getThemeValueOrReturn = (theme, value) => {

  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    let result = getValueFromTheme(theme, value);

    if (result) {
      return result;
    } else {
      return value;
    }
  }
}


function color(a, b, c) {
  let inputTheme;
  let inputColor;
  let inputAlpha;

  if (typeof a === 'object') {
    // If A is an object, assume it's
    // a theme, B is color, C is alpha
    inputTheme = a;
    inputColor = getThemeValueOrReturn(a, b);
    inputAlpha = getThemeValueOrReturn(a, c);

  } else {
    // Otherwise assume A is a color,
    // and B is an alpha
    inputColor = a;
    inputAlpha = b;
  }

  let color = lch(inputColor);

  if (inputAlpha) {
    color.opacity = inputAlpha;
  }

  return color;
}

// themeobject string
// keen,       CONTRAST
// keen,       #FFFFFF throw!
// getValueFromTheme
// 
// themeobject string string
// keen,       CONTRAST '0.3'
// transparentize getValueFromTheme(theme, string1).opacity(string2)
//
// themeobject string number
// keen,       CONTRAST 0.3
//
// string string
// CONTRAST '0.5'
// 
// string number
// CONTRAST 

// return resultColor;

color.PropTypes = {
  a: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  c: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default color;

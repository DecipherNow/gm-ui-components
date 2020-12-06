import {
  setLightness,
  transparentize,
  mix,
  saturate,
  darken,
  desaturate,
  lighten,
  getLuminance
} from "polished";

// Offsets = DEFAULT, ONE, TWO, THREE...
// Sizes = MIN, XS, SM, DEFAULT, LG, XL, MAX
// Sizes = LOOSE, DEFAULT, TIGHT
// Strengths (4) = FULL, LIGHT, LIGHTER, LIGHTEST
// Strengths (5, 7) = LOWEST, LOWER, LOW, MED, HIGH, HIGHER, HIGHEST

const themeBase = {
  THEME_NAME: "default",
  COLOR_SCHEME: "light",
  OS_INFLUENCE: "none",
  LIGHTNESS_BIAS: 0.075,
  COLOR_SCHEME_SATURATION_ADJUSTMENT: 0.3,

  OPACITY_FULL: "1",
  OPACITY_LIGHT: "0.7",
  OPACITY_LIGHTER: "0.5",
  OPACITY_LIGHTEST: "0.15",

  LINE_HEIGHT_LOOSE: 1.6,
  LINE_HEIGHT_DEFAULT: 1.4,
  LINE_HEIGHT_TIGHT: 1.2,

  FONT_WEIGHT_DEFAULT: 400,
  FONT_WEIGHT_MEDIUM: 500,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 700,

  CORNER_RADIUS_SHARP: "2px",
  CORNER_RADIUS_INPUT: "4px",
  CORNER_RADIUS_CARD_SM: "4px",
  CORNER_RADIUS_CARD_DEFAULT: "6px",
  CORNER_RADIUS_CARD_LG: "8px",
  CORNER_RADIUS_MAX: "90000px",

  COLOR_BRAND_PRIMARY: "rgb(0, 122, 255)",
  COLOR_BRAND_SECONDARY: "#00b42b",

  COLOR_CONTENT: "#000",
  COLOR_BACKGROUND: "#fff",

  COLOR_INTENT_HIGHLIGHT: "rgb(0, 122, 255)",
  COLOR_INTENT_SUCCESS: "#00b42b",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  FONT_STACK_DEFAULT: `Inter var, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  FONT_STACK_BRAND: `'Metropolis', 'Helvetica Neue', Arial, sans-serif`,
  FONT_STACK_CODE: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,

  FONT_SIZE_MIN: 10,
  FONT_SCALE_FACTOR: 2,

  LETTER_SPACING_DEFAULT: "normal",

  FOCUS_RING_SIZE: "2.5px",
  CONTROL_BORDER_WIDTH: "1px",
  INPUT_BOX_INACTIVE_BORDER_COLOR: "currentColor",

  SPACING_BASE: 8,

  ZINDEX_ABYSS: "-9999",
  ZINDEX_FLOOR: "1",
  ZINDEX_DROPDOWN: "1010",
  ZINDEX_STICKY: "1020",
  ZINDEX_FIXED: "1030",
  ZINDEX_SCRIM: "1040",
  ZINDEX_MODAL: "1050",
  ZINDEX_POPOVER: "1060",
  ZINDEX_TOOLTIP: "1070"
};

const prepareTheme = (theme, content, keyline) => {
  // Take a theme and some optional properties,
  // and construct a full set of theme variables from it.

  const defaultContent = {
    contrast: 1,
    default: 0.85,
    muted: 0.6,
    nonessential: 0.3
  };

  const defaultKeyline = {
    default: 0.08,
    solid: 0.08
  };

  if (!content) {
    content = defaultContent;
  }

  if (!keyline) {
    keyline = defaultKeyline;
  }

  const makeTypeLevel = level => {
    return (
      Math.ceil(level * theme.FONT_SCALE_FACTOR) + theme.FONT_SIZE_MIN + "px"
    );
  };

  // Factor used to increase the mix of the foreground
  // with background, when creating a background level.
  const bgScale = 0.05;

  const makeBackgroundLevel = level => {
    if (theme.COLOR_SCHEME === "dark") {
      return mix(level * bgScale, theme.COLOR_CONTENT, theme.COLOR_BACKGROUND);
    } else {
      return mix(level * bgScale, theme.COLOR_CONTENT, theme.COLOR_BACKGROUND);
    }
  };

  return (theme = {
    ...theme,
    COLOR_CONTENT_CONTRAST: transparentize(
      1 - content.contrast,
      theme.COLOR_CONTENT
    ),
    COLOR_CONTENT_DEFAULT: transparentize(
      1 - content.default,
      theme.COLOR_CONTENT
    ),
    COLOR_CONTENT_MUTED: transparentize(1 - content.muted, theme.COLOR_CONTENT),
    COLOR_CONTENT_NONESSENTIAL: transparentize(
      1 - content.nonessential,
      theme.COLOR_CONTENT
    ),

    COLOR_KEYLINE_DEFAULT: lighten(
      theme.LIGHTNESS_BIAS,
      transparentize(1 - keyline.default, theme.COLOR_CONTENT)
    ),
    // TODO: Verify _SOLID version
    COLOR_KEYLINE_SOLID: lighten(
      theme.LIGHTNESS_BIAS,
      mix(1 - keyline.solid, theme.COLOR_BACKGROUND, theme.COLOR_CONTENT)
    ),

    // TODO: make these values align to the current color scheme
    COLOR_BACKGROUND_DEFAULT: lighten(
      theme.LIGHTNESS_BIAS,
      makeBackgroundLevel(0)
    ),
    COLOR_BACKGROUND_TWO: lighten(theme.LIGHTNESS_BIAS, makeBackgroundLevel(1)),
    COLOR_BACKGROUND_THREE: lighten(
      theme.LIGHTNESS_BIAS,
      makeBackgroundLevel(2)
    ),
    COLOR_BACKGROUND_FOUR: lighten(
      theme.LIGHTNESS_BIAS,
      makeBackgroundLevel(3)
    ),
    COLOR_BACKGROUND_FIVE: lighten(
      theme.LIGHTNESS_BIAS,
      makeBackgroundLevel(4)
    ),

    FONT_SIZE_PAGE_TITLE: makeTypeLevel(22),

    FONT_SIZE_HEADING_LG: makeTypeLevel(16),
    FONT_SIZE_HEADING_DEFAULT: makeTypeLevel(15),
    FONT_SIZE_HEADING_SM: makeTypeLevel(13),

    FONT_SIZE_SUBHEADING_LG: makeTypeLevel(6),
    FONT_SIZE_SUBHEADING_DEFAULT: makeTypeLevel(4),
    FONT_SIZE_SUBHEADING_SM: makeTypeLevel(3),

    FONT_SIZE_ITEM_TITLE_LG: makeTypeLevel(4),
    FONT_SIZE_ITEM_TITLE_DEFAULT: makeTypeLevel(3),
    FONT_SIZE_ITEM_TITLE_SM: makeTypeLevel(2),

    FONT_SIZE_TEXT_XL: makeTypeLevel(5),
    FONT_SIZE_TEXT_LG: makeTypeLevel(4),
    FONT_SIZE_TEXT_DEFAULT: makeTypeLevel(3),
    FONT_SIZE_TEXT_SM: makeTypeLevel(2),
    FONT_SIZE_TEXT_XS: makeTypeLevel(1)

    // TODO: Add alpha-unblended versions of bg colors
  });
};

export const addMacOSXInfluence = theme => ({
  ...theme,
  OS_INFLUENCE: "macOS X",
  // Rounded corners
  CORNER_RADIUS_SHARP: "2px",
  CORNER_RADIUS_INPUT: "4px",
  CORNER_RADIUS_CARD_SM: "5px",
  // Apple color palatte
  COLOR_INTENT_HIGHLIGHT: "rgb(0,122,255)",
  COLOR_INTENT_DANGER: "rgb(255,59,48)",
  COLOR_INTENT_WARNING: "rgb(255,149,0)",
  COLOR_INTENT_INFO: "rgb(90,200,250)",
  COLOR_INTENT_SUCCESS: "rgb(40,205,65)"
});

export const addMacOS11Influence = theme => ({
  ...theme,
  OS_INFLUENCE: "macOS 11",
  // More rounded corners
  CORNER_RADIUS_SHARP: "3px",
  CORNER_RADIUS_INPUT: "5px",
  CORNER_RADIUS_CARD_SM: "7px",
  CORNER_RADIUS_CARD_DEFAULT: "11px",
  CORNER_RADIUS_CARD_LG: "17px",
  CORNER_RADIUS_MAX: "90000px",
  // Broad padding
  SPACING_BASE: 10,
  // Apple color palatte
  COLOR_INTENT_HIGHLIGHT: "rgb(0,122,255)",
  COLOR_INTENT_DANGER: "rgb(255,59,48)",
  COLOR_INTENT_WARNING: "rgb(255,149,0)",
  COLOR_INTENT_INFO: "rgb(90,200,250)",
  COLOR_INTENT_SUCCESS: "rgb(40,205,65)"
});

export const addWin10Influence = theme => ({
  ...theme,
  OS_INFLUENCE: "Win10",
  // Sharp corners
  CORNER_RADIUS_SHARP: "0px",
  CORNER_RADIUS_INPUT: "0px",
  CORNER_RADIUS_CARD_SM: "0px",
  CORNER_RADIUS_CARD_DEFAULT: "0px",
  CORNER_RADIUS_CARD_LG: "0px",
  CORNER_RADIUS_MAX: "0px",
  // Windows color palatte
  COLOR_INTENT_HIGHLIGHT: "#0078d4",
  COLOR_INTENT_SUCCESS: "#107c10",
  COLOR_INTENT_DANGER: "#a80000",
  COLOR_INTENT_WARNING: "#d83b01",
  COLOR_INTENT_INFO: "#0078d4",

  CONTROL_BORDER_WIDTH: "2px"
});

export const setSpacingBase = (theme, size) =>
  size ? { ...theme, SPACING_BASE: size } : { ...theme };

export const addHighContrastInfluence = theme => {
  const content = {
    contrast: 1,
    default: 0.95,
    muted: 0.7,
    nonessential: 0.5
  };

  const keyline = {
    default: 0.2,
    solid: 0.2
  };

  return (theme = prepareTheme(theme, content, keyline));
};

export function setColorScheme(theme, scheme) {
  const adjust = theme.COLOR_SCHEME_SATURATION_ADJUSTMENT;

  const invertLightness = color => {
    return setLightness((getLuminance(color) - 1) * -1, color);
  };

  if (theme.COLOR_SCHEME !== scheme) {
    let adjustments = {};
    if (scheme === "light") {
      adjustments = {
        LETTER_SPACING_DEFAULT: "normal",
        COLOR_INTENT_HIGHLIGHT: saturate(adjust, theme.COLOR_INTENT_HIGHLIGHT),
        COLOR_INTENT_SUCCESS: saturate(adjust, theme.COLOR_INTENT_SUCCESS),
        COLOR_INTENT_WARNING: saturate(adjust, theme.COLOR_INTENT_WARNING),
        COLOR_INTENT_INFO: saturate(adjust, theme.COLOR_INTENT_INFO),
        COLOR_INTENT_DANGER: saturate(adjust, theme.COLOR_INTENT_DANGER)
      };
    } else if (scheme === "dark") {
      adjustments = {
        LETTER_SPACING_DEFAULT: "normal",
        COLOR_INTENT_HIGHLIGHT: desaturate(
          adjust,
          theme.COLOR_INTENT_HIGHLIGHT
        ),
        COLOR_INTENT_SUCCESS: desaturate(adjust, theme.COLOR_INTENT_SUCCESS),
        COLOR_INTENT_WARNING: desaturate(adjust, theme.COLOR_INTENT_WARNING),
        COLOR_INTENT_INFO: desaturate(adjust, theme.COLOR_INTENT_INFO),
        COLOR_INTENT_DANGER: desaturate(adjust, theme.COLOR_INTENT_DANGER)
      };
    }
    theme = {
      ...theme,
      COLOR_SCHEME: scheme,
      COLOR_CONTENT: invertLightness(theme.COLOR_CONTENT),
      COLOR_BACKGROUND: invertLightness(theme.COLOR_BACKGROUND),
      ...adjustments
    };
    return prepareTheme(theme);
  } else {
    return theme;
  }
}

export function invertColorScheme(theme) {
  // Return a new theme with dark and light inverted

  let newScheme;
  if (getLuminance(theme.COLOR_BACKGROUND) > 0.5) {
    // current scheme is light
    newScheme = "dark";
  } else {
    // current scheme is dark
    newScheme = "light";
  }

  return (theme = setColorScheme(theme, newScheme));
}

export const setColorSchemeDark = theme => setColorScheme(theme, "dark");

export const setColorSchemeLight = theme => setColorScheme(theme, "light");

export const keenInfluence = theme => ({
  ...theme,
  THEME_NAME: "Keen",
  COLOR_BRAND_PRIMARY: "#00b42b",
  COLOR_BRAND_SECONDARY: "#00b42b",
  COLOR_INTENT_HIGHLIGHT: "#00b42b"
});

let currentTheme = themeBase;

let prefs = {
  useKeen: true,
  preferredColorScheme: "auto",
  allowOSInfluence: false
};

if (prefs.useKeen) {
  currentTheme = keenInfluence(currentTheme);
}

if (prefs.preferredColorScheme === "dark") {
  currentTheme = setColorSchemeDark(currentTheme);
} else if (prefs.preferredColorScheme === "light") {
  currentTheme = setColorSchemeLight(currentTheme);
}

if (prefs.allowOSInfluence) {
  if (window.navigator.userAgent.includes("Mac OS X 10")) {
    currentTheme = addMacOSXInfluence(currentTheme);
  } else if (window.navigator.userAgent.includes("Mac OS X 11")) {
    currentTheme = addMacOS11Influence(currentTheme);
  } else if (window.navigator.userAgent.includes("Win64")) {
    currentTheme = addWin10Influence(currentTheme);
  }
}

export const keen = keenInfluence(currentTheme);
export const keenDark = setColorSchemeDark(keenInfluence(currentTheme));

export const theme = prepareTheme(currentTheme);

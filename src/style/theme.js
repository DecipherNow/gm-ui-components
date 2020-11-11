import { setLightness, getLuminance } from "polished";

function addMacOSXInfluence(theme) {
  return theme = {
    ...theme,
      OS_INFLUENCE: 'macOS X',
      CORNER_RADIUS_SHARP: '2px',
      CORNER_RADIUS_INPUT: '4px',
      CORNER_RADIUS_CARD_SM: '5px'
  }
}

function addMacOS11Influence(theme) {
  return theme = {
    ...theme,
    OS_INFLUENCE: 'macOS 11',
    CORNER_RADIUS_SHARP: "3px",
    CORNER_RADIUS_INPUT: "5px",
    CORNER_RADIUS_CARD_SM: "7px",
    CORNER_RADIUS_CARD_DEFAULT: "11px",
    CORNER_RADIUS_CARD_LG: "17px",
    CORNER_RADIUS_MAX: "90000px",
  }
}

function addWin10Influence(theme) {
  return theme = {
    ...theme,
    OS_INFLUENCE: 'Win10',
    CORNER_RADIUS_SHARP: "0",
    CORNER_RADIUS_INPUT: "0",
    CORNER_RADIUS_CARD_SM: "0",
    CORNER_RADIUS_CARD_DEFAULT: "0",
    CORNER_RADIUS_CARD_LG: "0",
    CORNER_RADIUS_MAX: "0",

    COLOR_INTENT_HIGHLIGHT: "#0078d4",
    COLOR_INTENT_SUCCESS: "#107c10",
    COLOR_INTENT_DANGER: "#a80000",
    COLOR_INTENT_WARNING: "#d83b01",
    COLOR_INTENT_INFO: "#0078d4",
  }
}


export function setSpacingBase(size, theme) {
  return theme = size ? { ...theme, SPACING_BASE: size } : {...theme};
}

// 
// Switching Color Schemes
// 

export function setColorScheme(scheme, theme) {

  let foregroundLightness;
  let backgroundLightness;
  let letterSpacing;

  if (scheme === 'light') {
    foregroundLightness = 0;
    backgroundLightness = 1;
    letterSpacing: 'normal';
  } else if (scheme === 'dark') {
    foregroundLightness = 1;
    backgroundLightness = 0;
    letterSpacing: '0.025ch';
  }

  return theme = {
    ...theme,
    COLOR_SCHEME: scheme,
    COLOR_CONTENT_CONTRAST: setLightness(foregroundLightness, theme.COLOR_CONTENT_CONTRAST),
    COLOR_CONTENT_DEFAULT: setLightness(foregroundLightness, theme.COLOR_CONTENT_DEFAULT),
    COLOR_CONTENT_MUTED: setLightness(foregroundLightness, theme.COLOR_CONTENT_MUTED),
    COLOR_CONTENT_NONESSENTIAL: setLightness(foregroundLightness, theme.COLOR_CONTENT_NONESSENTIAL),

    COLOR_BACKGROUND_DEFAULT: setLightness(backgroundLightness, theme.COLOR_BACKGROUND_DEFAULT),
    COLOR_BACKGROUND_TWO: setLightness(backgroundLightness, theme.COLOR_BACKGROUND_TWO),
    COLOR_BACKGROUND_THREE: setLightness(backgroundLightness, theme.COLOR_BACKGROUND_THREE),

    LETTER_SPACING_DEFAULT: letterSpacing
  }
}

export function invertColorScheme(theme) {
  let scheme;
  
  if (getLuminance(theme.COLOR_BACKGROUND_DEFAULT) > 0.5) {
    scheme = 'dark'
  } else {
    scheme = 'light';
  }
  
  return theme = setColorScheme(scheme, theme);
}

export function setColorSchemeDark(theme) {
  return theme = setColorScheme('dark', theme);
}

export function setColorSchemeLight(theme) {
  return theme = setColorScheme('light', theme);
}

// let influence = {}

// const userAgent = window.navigator.userAgent;

// if (userAgent.includes('Mac OS X 10_')) {
//   influence = addMacOSXInfluence;
// }

// if (userAgent.includes('Mac OS X 11_')) {
//   influence = addMacOS11Influence;
// }

// if (userAgent.includes('Win64')) {
//   influence = addWin10Influence;
// }

const defaults = {
  THEME_NAME: 'default',
  COLOR_SCHEME: 'light',
  OS_INFLUENCE: 'none',

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

  COLOR_BRAND_PRIMARY: "#00b42b",
  COLOR_BRAND_SECONDARY: "#00b42b",

  COLOR_BACKGROUND_DEFAULT: "hsl(0, 0%, 100%)",
  COLOR_BACKGROUND_TWO: "#FDFDFE",
  COLOR_BACKGROUND_THREE: "hsl(0, 0%, 94%)",

  COLOR_CONTENT_DEFAULT: "hsla(0, 0%, 0%, 0.85)",
  COLOR_CONTENT_CONTRAST: "hsl(0, 0%, 0%)",
  COLOR_CONTENT_MUTED: "hsla(0, 0%, 0%, 0.6)",
  COLOR_CONTENT_NONESSENTIAL: "hsla(0, 0%, 0%, 0.3)",

  COLOR_INTENT_HIGHLIGHT: "#00b42b",
  COLOR_INTENT_SUCCESS: "#00b42b",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE_DEFAULT: "hsla(0, 0%, 0%, 0.08)",
  COLOR_KEYLINE_SOLID: "hsl(0, 0%, 92%)",

  COLOR_CONTENT_DEFAULT: "hsla(0, 0%, 0%, 0.85)",
  COLOR_CONTENT_CONTRAST: "hsl(0, 0%, 0%)",
  COLOR_CONTENT_MUTED: "hsla(0, 0%, 0%, 0.6)",
  COLOR_CONTENT_NONESSENTIAL: "hsla(0, 0%, 0%, 0.3)",

  // TYPOGRAPHY
  FONT_STACK_DEFAULT: `Inter var, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONT_STACK_BRAND: `"Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONT_STACK_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  // LAYOUT

  FONT_SIZE_PAGE_TITLE: "40px",

  FONT_SIZE_HEADING_LG: "38px",
  FONT_SIZE_HEADING_DEFAULT: "36px",
  FONT_SIZE_HEADING_SM: "32px",

  FONT_SIZE_SUBHEADING_LG: "18px",
  FONT_SIZE_SUBHEADING_DEFAULT: "16px",
  FONT_SIZE_SUBHEADING_SM: "14px",

  FONT_SIZE_ITEM_TITLE_LG: "16px",
  FONT_SIZE_ITEM_TITLE_DEFAULT: "14px",
  FONT_SIZE_ITEM_TITLE_SM: "12px",

  FONT_SIZE_TEXT_XL: "18px",
  FONT_SIZE_TEXT_LG: "16px",
  FONT_SIZE_TEXT_DEFAULT: "14px",
  FONT_SIZE_TEXT_SM: "12px",
  FONT_SIZE_TEXT_XS: "10px",

  LETTER_SPACING_DEFAULT: "normal",

  SPACING_BASE: 8,

  ZINDEX_ABYSS: "-9999",
  ZINDEX_FLOOR: "1",
  ZINDEX_DROPDOWN: "1010",
  ZINDEX_STICKY: "1020",
  ZINDEX_FIXED: "1030",
  ZINDEX_SCRIM: "1040",
  ZINDEX_MODAL: "1050",
  ZINDEX_POPOVER: "1060",
  ZINDEX_TOOLTIP: "1070",
}

function keenInfluence(theme) {
  return theme = {
    ...theme,
    THEME_NAME: "Keen",

    COLOR_BRAND_PRIMARY: "#00b42b",
    COLOR_BRAND_SECONDARY: "#00b42b",
  }
  
}

const LIGHTENING_FACTOR = 0.05;

// export const keenDark = {
//   ...defaults,
//   name: "KeenDark",
//   isDark: true,

//   COLOR_BACKGROUND_DEFAULT: "#111",
//   COLOR_BACKGROUND_TWO: "#181818",
//   COLOR_BACKGROUND_THREE: "#242424",

//   COLOR_CONTENT_DEFAULT: "hsla(0, 0%, 100%, 0.8)",
//   COLOR_CONTENT_CONTRAST: "hsl(0, 0%, 100%)",
//   COLOR_CONTENT_MUTED: "hsla(0, 0%, 100%, 0.6)",
//   COLOR_CONTENT_NONESSENTIAL: "hsla(0, 0%, 100%, 0.5)",

//   COLOR_INTENT_DANGER: lighten(LIGHTENING_FACTOR, keen.COLOR_INTENT_DANGER), // WCAG AA+
//   COLOR_INTENT_WARNING: lighten(LIGHTENING_FACTOR, keen.COLOR_INTENT_WARNING), // WCAG AA+
//   COLOR_INTENT_INFO: lighten(LIGHTENING_FACTOR, keen.COLOR_INTENT_INFO), // WCAG AA+

//   COLOR_KEYLINE_DEFAULT: "hsla(0, 0%, 100%, 0.1)",
//   COLOR_KEYLINE_SOLID: "hsla(0, 0%, 14%, 1)",

//   FONT_WEIGHT_DEFAULT: 500,
//   FONT_WEIGHT_MEDIUM: 600,
//   FONT_WEIGHT_SEMIBOLD: 700,
//   FONT_WEIGHT_BOLD: 800,

//   LETTER_SPACING_DEFAULT: "0.025ch",
// };

let currentTheme = defaults;

let prefs = {
  useKeen: true,
  preferedColorScheme: 'dark',
}

if (prefs.useKeen || true) {
  currentTheme = keenInfluence(currentTheme);
}

if (prefs.preferredColorScheme === 'dark' || true) {
  currentTheme = setColorSchemeDark(currentTheme);
}

if (window.navigator.userAgent.includes('Mac OS X 10')) {
  currentTheme = addMacOSXInfluence(currentTheme);
} else if (window.navigator.userAgent.includes('Win64')) {
  currentTheme = addWin10Influence(currentTheme);
}

export const theme = currentTheme;

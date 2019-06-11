export const keen = {
  name: "Keen",

  COLOR_BRAND_PRIMARY: "#00b42b",
  COLOR_BRAND_SECONDARY: "#00b42b",

  COLOR_BACKGROUND_DEFAULT: "hsl(0,0%,100%)",
  COLOR_BACKGROUND_TWO: "hsl(0,0%,98%)",
  COLOR_BACKGROUND_THREE: "hsl(0,0%,96%)",

  COLOR_CONTENT_DEFAULT: "hsla(0,0%,0%,0.85)",
  COLOR_CONTENT_CONTRAST: "hsla(0,0%,0%,1)",
  COLOR_CONTENT_MUTED: "hsla(0,0%,0%,0.6)",
  COLOR_CONTENT_NONESSENTIAL: "hsla(0,0%,0%,0.3)",

  COLOR_INTENT_HIGHLIGHT: "#00b42b",
  COLOR_INTENT_SUCCESS: "#00b42b",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE_DEFAULT: "hsla(0,0%,0%,0.08)",
  COLOR_KEYLINE_SOLID: "#efefef",

  OPACITY_FULL: "1",
  OPACITY_LIGHT: "0.7",
  OPACITY_LIGHTER: "0.5",
  OPACITY_LIGHTEST: "0.15",

  // LAYOUT
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

  CORNER_RADIUS_SHARP: "4px", // spacingScale(0.5)
  CORNER_RADIUS_INPUT: "8px", // spacingScale(1)
  CORNER_RADIUS_CARD_LG: "16px",
  CORNER_RADIUS_CARD_DEFAULT: "12px",
  CORNER_RADIUS_CARD_SM: "8px",
  CORNER_RADIUS_MAX: "90000px",

  // TYPOGRAPHY
  FONT_STACK_DEFAULT: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONT_STACK_BRAND: `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONT_STACK_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  FONT_SIZE_PAGE_TITLE: "40px",

  FONT_SIZE_HEADING_LG: "36px",
  FONT_SIZE_HEADING_DEFAULT: "36px",
  FONT_SIZE_HEADING_SM: "36px",

  FONT_SIZE_SUBHEADING_LG: "10px",
  FONT_SIZE_SUBHEADING_DEFAULT: "10px",
  FONT_SIZE_SUBHEADING_SM: "10px",

  FONT_SIZE_ITEM_TITLE_LG: "10px",
  FONT_SIZE_ITEM_TITLE_DEFAULT: "10px",
  FONT_SIZE_ITEM_TITLE_SM: "10px",

  FONT_SIZE_TEXT_XL: "18px", // Will be changed to 24px
  FONT_SIZE_TEXT_LG: "16px", // Will be changed to 18px
  FONT_SIZE_TEXT_DEFAULT: "14px",
  FONT_SIZE_TEXT_SM: "11px", // Will be changed to 12px
  FONT_SIZE_TEXT_XS: "9px", // Will be changed to 10px

  LINE_HEIGHT_LOOSE: 1.6,
  LINE_HEIGHT_DEFAULT: 1.4,
  LINE_HEIGHT_TIGHT: 1.2,

  FONT_WEIGHT_DEFAULT: 400,
  FONT_WEIGHT_MEDIUM: 500,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 700,

  LETTER_SPACING_DEFAULT: "normal"
};

export const keenDark = {
  ...keen,
  name: "KeenDark",

  COLOR_BACKGROUND_DEFAULT: "hsl(0,0%,0%)",
  COLOR_BACKGROUND_TWO: "hsl(0,0%,6%)",
  COLOR_BACKGROUND_THREE: "hsl(0,0%,12%)",

  COLOR_CONTENT_DEFAULT: "hsla(0,0%,0%,85%)",
  COLOR_CONTENT_CONTRAST: "hsl(0,0%,0%)",
  COLOR_CONTENT_MUTED: "hsla(0,0%,0%,60%)",
  COLOR_CONTENT_NONESSENTIAL: "hsla(0,0%,0%,50%)",

  COLOR_KEYLINE_DEFAULT: "hsla(0,0%,100%,24%)",
  COLOR_KEYLINE_SOLID: "hsl(0,0%,24%)",

  LINE_HEIGHT_LOOSE: 1.65,
  LINE_HEIGHT_DEFAULT: 1.45,
  LINE_HEIGHT_TIGHT: 1.25,

  FONT_WEIGHT_DEFAULT: 500,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_SEMIBOLD: 700,
  FONT_WEIGHT_BOLD: 800,

  LETTER_SPACING_DEFAULT: "0.1ch"
};

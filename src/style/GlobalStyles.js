import { css, createGlobalStyle } from "styled-components";
import { keen } from "style/theme";

const NORMALIZE = css`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
   ========================================================================== */

  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
   ========================================================================== */

  /**
 * Remove the margin in all browsers.
 */

  body {
    margin: 0;
  }

  /**
 * Render the 'main' element consistently in IE.
 */

  main {
    display: block;
  }

  /**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Firefox, and Safari.
 */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
   ========================================================================== */

  /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
   ========================================================================== */

  /**
 * Remove the gray background on active links in IE 10.
 */

  a {
    background-color: transparent;
  }

  /**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

  b,
  strong {
    font-weight: bolder;
  }

  /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
 * Add the correct font size in all browsers.
 */

  small {
    font-size: 80%;
  }

  /**
 * Prevent 'sub' and 'sup' elements from affecting the line height in
 * all browsers.
 */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
   ========================================================================== */

  /**
 * Remove the border on images inside links in IE 10.
 */

  img {
    border-style: none;
  }

  /* Forms
   ========================================================================== */

  /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
 * Remove the inner border and padding in Firefox.
 */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
 * Restore the focus styles unset by the previous rule.
 */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
 * Correct the padding in Firefox.
 */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from 'fieldset' elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    'fieldset' elements in all browsers.
 */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

  progress {
    vertical-align: baseline;
  }

  /**
 * Remove the default vertical scrollbar in IE 10+.
 */

  textarea {
    overflow: auto;
  }

  /**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to 'inherit' in Safari.
 */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
   ========================================================================== */

  /*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

  details {
    display: block;
  }

  /*
 * Add the correct display in all browsers.
 */

  summary {
    display: list-item;
  }

  /* Misc
   ========================================================================== */

  /**
 * Add the correct display in IE 10+.
 */

  template {
    display: none;
  }

  /**
 * Add the correct display in IE 10.
 */

  [hidden] {
    display: none;
  }
`;

const CSS_CUSTOM_PROPERTIES = css`
  :root {
    --COLOR_BRAND_PRIMARY: ${({ theme }) => theme.COLOR_BRAND_PRIMARY};
    --COLOR_BRAND_SECONDARY: ${({ theme }) => theme.COLOR_BRAND_SECONDARY};

    --COLOR_BACKGROUND_DEFAULT: ${({ theme }) =>
      theme.COLOR_BACKGROUND_DEFAULT};
    --COLOR_BACKGROUND_TWO: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
    --COLOR_BACKGROUND_THREE: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};

    --COLOR_CONTENT_DEFAULT: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
    --COLOR_CONTENT_CONTRAST: ${({ theme }) => theme.COLOR_CONTENT_CONTRAST};
    --COLOR_CONTENT_MUTED: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
    --COLOR_CONTENT_NONESSENTIAL: ${({ theme }) =>
      theme.COLOR_CONTENT_NONESSENTIAL};

    --COLOR_INTENT_HIGHLIGHT: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
    --COLOR_INTENT_SUCCESS: ${({ theme }) => theme.COLOR_INTENT_SUCCESS};
    --COLOR_INTENT_DANGER: ${({ theme }) => theme.COLOR_INTENT_DANGER};
    --COLOR_INTENT_WARNING: ${({ theme }) => theme.COLOR_INTENT_WARNING};
    --COLOR_INTENT_INFO: ${({ theme }) => theme.COLOR_INTENT_INFO};

    --COLOR_KEYLINE_DEFAULT: ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
    --COLOR_KEYLINE_SOLID: ${({ theme }) => theme.COLOR_KEYLINE_SOLID};

    --OPACITY_FULL: ${({ theme }) => theme.OPACITY_FULL};
    --OPACITY_LIGHT: ${({ theme }) => theme.OPACITY_LIGHT};
    --OPACITY_LIGHTER: ${({ theme }) => theme.OPACITY_LIGHTER};
    --OPACITY_LIGHTEST: ${({ theme }) => theme.OPACITY_LIGHTEST};

    --SPACING_BASE: ${({ theme }) => theme.SPACING_BASE};

    --ZINDEX_ABYSS: ${({ theme }) => theme.ZINDEX_ABYSS}
    --ZINDEX_FLOOR: ${({ theme }) => theme.ZINDEX_FLOOR}
    --ZINDEX_DROPDOWN: ${({ theme }) => theme.ZINDEX_DROPDWN};
    --ZINDEX_STICKY: ${({ theme }) => theme.ZINDEX_STICK};
    --ZINDEX_FIXED: ${({ theme }) => theme.ZINDEX_FIXED}
    --ZINDEX_SCRIM: ${({ theme }) => theme.ZINDEX_SCRIM}
    --ZINDEX_MODAL: ${({ theme }) => theme.ZINDEX_MODAL}
    --ZINDEX_POPOVER: ${({ theme }) => theme.ZINDEX_POPOVER}
    --ZINDEX_TOOLTIP: ${({ theme }) => theme.ZINDEX_TOOLTIP};

    --CORNER_RADIUS_SHARP: ${({ theme }) => theme.CORNER_RADIUS_SHARP};
    --CORNER_RADIUS_INPUT: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
    --CORNER_RADIUS_CARD_LG: ${({ theme }) => theme.CORNER_RADIUS_CARD_LG};
    --CORNER_RADIUS_CARD_DEFAULT: ${({ theme }) =>
      theme.CORNER_RADIUS_CARD_DEFAULT};
    --CORNER_RADIUS_CARD_SM: ${({ theme }) => theme.CORNER_RADIUS_CARD_SM};
    --CORNER_RADIUS_MAX: ${({ theme }) => theme.CORNER_RADIUS_MAX};

    --FONT_SIZE_PAGE_TITLE: ${({ theme }) => theme.FONT_SIZE_PAGE_TITLE};

    --FONT_SIZE_HEADING_LG: ${({ theme }) => theme.FONT_SIZE_HEADING_LG};
    --FONT_SIZE_HEADING_DEFAULT: ${({ theme }) =>
      theme.FONT_SIZE_HEADING_DEFAULT};
    --FONT_SIZE_HEADING_SM: ${({ theme }) => theme.FONT_SIZE_HEADING_SM};

    --FONT_SIZE_SUBHEADING_LG: ${({ theme }) => theme.FONT_SIZE_SUBHEADING_LG};
    --FONT_SIZE_SUBHEADING_DEFAULT: ${({ theme }) =>
      theme.FONT_SIZE_SUBHEADING_DEFAULT};
    --FONT_SIZE_SUBHEADING_SM: ${({ theme }) => theme.FONT_SIZE_SUBHEADING_SM};

    --FONT_SIZE_ITEM_TITLE_LG: ${({ theme }) => theme.FONT_SIZE_ITEM_TITLE_LG};
    --FONT_SIZE_ITEM_TITLE_DEFAULT: ${({ theme }) =>
      theme.FONT_SIZE_ITEM_TITLE_DEFAULT};
    --FONT_SIZE_ITEM_TITLE_SM: ${({ theme }) => theme.FONT_SIZE_ITEM_TITLE_SM};

    --FONT_SIZE_TEXT_XL: ${({ theme }) => theme.FONT_SIZE_TEXT_XL};
    --FONT_SIZE_TEXT_LG: ${({ theme }) => theme.FONT_SIZE_TEXT_LG};
    --FONT_SIZE_TEXT_DEFAULT: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
    --FONT_SIZE_TEXT_SM: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
    --FONT_SIZE_TEXT_XS: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};

    --LINE_HEIGHT_LOOSE: ${({ theme }) => theme.LINE_HEIGHT_LOOSE};
    --LINE_HEIGHT_DEFAULT: ${({ theme }) => theme.LINE_HEIGHT_DEFAULT};
    --LINE_HEIGHT_TIGHT: ${({ theme }) => theme.LINE_HEIGHT_TIGHT};

    --FONT_WEIGHT_DEFAULT: ${({ theme }) => theme.FONT_WEIGHT_DEFAULT};
    --FONT_WEIGHT_MEDIUM: ${({ theme }) => theme.FONT_WEIGHT_MEDIUM};
    --FONT_WEIGHT_SEMIBOLD: ${({ theme }) => theme.FONT_WEIGHT_SEMIBOLD};
    --FONT_WEIGHT_BOLD: ${({ theme }) => theme.FONT_WEIGHT_BOLD};

    --LETTER_SPACING_DEFAULT: ${({ theme }) => theme.LETTER_SPACING_DEFAULT};
  }
`;

const GlobalStyles = createGlobalStyle`

  ${NORMALIZE};

  ${CSS_CUSTOM_PROPERTIES};

  html {
    font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
    /* Set the html font size to the spacing base so we can use Rem units for spacing. */
    font-size ${({ theme }) => theme.SPACING_BASE + "px"};
    letter-spacing: ${({ theme }) => theme.LETTER_SPACING_DEFAULT};
    line-height: ${({ theme }) => theme.LINE_HEIGHT_DEFAULT};
    line-height: ${({ theme }) => theme.LINE_HEIGHT_DEFAULT};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT_DEFAULT};
    color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  }

  body {
    /* Define the actual base font size, so text is the right size. */
    font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  }

  a {
    color: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  b,
  strong {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD};
  }
`;

GlobalStyles.defaultProps = {
  theme: keen
};

export default GlobalStyles;

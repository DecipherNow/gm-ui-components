<h1 align="center">
  <br>
  <img src="./src/images/decipher-logo.png" alt="Decipher Logo" width="50">
  <br>
  Grey Matter UI Component Library
  <br>
</h1>

<h4 align="center">React components for Grey Matter user interfaces</h4>

<p align="center">
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img src="https://img.shields.io/badge/formatted_with-prettier-ff69b4.svg"
         alt="styled with prettier">
  </a>
  <a href="https://www.styled-components.com/" target="_blank"><img src="https://img.shields.io/badge/styled_with-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357" alt="styled with styled-components"></a>
  <a href="https://circleci.com/gh/greymatter-io/gm-ui-components/tree/master" target="_blank"><img src="https://circleci.com/gh/greymatter-io/gm-ui-components/tree/master.svg?style=shield" alt="tested on CircleCI"></a>
  <a href="https://codeclimate.com/github/greymatter-io/gm-ui-components/maintainability"><img src="https://api.codeclimate.com/v1/badges/e4f79b8a8ac6216ae81c/maintainability" /></a>
  <a href="https://codeclimate.com/github/greymatter-io/gm-ui-components/test_coverage"><img src="https://api.codeclimate.com/v1/badges/e4f79b8a8ac6216ae81c/test_coverage" /></a>
  <a href="https://opensource.org/licenses/mit-license.php" target="_blank"><img src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" alt="licensed under MIT"></a>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#compatability">Compatability</a> •
  <a href="#license">License</a>
</p>

# Installation

gm-ui-components is available as an npm package. It has 4 peer dependencies:

```sh
npm install --save gm-ui-components react react-dom styled-components inter-ui react-popper @popperjs/core
```

# Usage

An example using the Button component:

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'gm-ui-components';

function App() {
  return (
    <Button
        label="Hello World!"
        type="default"
        size="xl"
        active={true}
    />
  );
}

render(<App />, document.querySelector('#app'));
```

## Theming

The component library provides 2 themes out of the box - `keen` and `keenDark`. All components use the `keen` theme by default. 

To use `keenDark` or a custom theme, wrap your app in a `ThemeProvider` and pass the theme object:

```javascript
// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import { Button, keenDark } from 'gm-ui-components';

function Button() {
  return (
    <Button
        label="Hello World!"
        type="default"
        size="xl"
        active={true}
    />
  );
}

render(
  <ThemeProvider theme={keenDark}>
    <App />
  </ThemeProvider>, 
  document.querySelector('#app'));
```

To extend the theme, you must pass a theme object that follows our schema. Here is an example of the schema and its defaults:

```javascript
{
  name: "Keen",

  COLOR_BRAND_PRIMARY: "#00b42b",
  COLOR_BRAND_SECONDARY: "#00b42b",

  COLOR_BACKGROUND_DEFAULT: "hsl(0,0%,100%)",
  COLOR_BACKGROUND_TWO: "hsl(0,0%,97%)",
  COLOR_BACKGROUND_THREE: "hsl(0,0%,94%)",

  COLOR_CONTENT_DEFAULT: "hsla(0,0%,0%,0.85)",
  COLOR_CONTENT_CONTRAST: "hsla(0,0%,0%,1)",
  COLOR_CONTENT_MUTED: "hsla(0,0%,0%,0.6)",
  COLOR_CONTENT_NONESSENTIAL: "hsla(0,0%,0%,0.3)",

  COLOR_INTENT_HIGHLIGHT: "#00b42b",
  COLOR_INTENT_SUCCESS: "#00b42b",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE_DEFAULT: "hsla(0,0%,0%,8%)",
  COLOR_KEYLINE_SOLID: "hsl(0,0%,8%)",

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

  CORNER_RADIUS_SHARP: "2px", // spacingScale(0.5)
  CORNER_RADIUS_INPUT: "4px", // spacingScale(1)
  CORNER_RADIUS_CARD_SM: "4px",
  CORNER_RADIUS_CARD_DEFAULT: "6px",
  CORNER_RADIUS_CARD_LG: "8px",
  CORNER_RADIUS_MAX: "90000px",

  // TYPOGRAPHY
  FONT_STACK_DEFAULT: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONT_STACK_BRAND: `"Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONT_STACK_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

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

  LINE_HEIGHT_LOOSE: 1.6,
  LINE_HEIGHT_DEFAULT: 1.4,
  LINE_HEIGHT_TIGHT: 1.2,

  FONT_WEIGHT_DEFAULT: 400,
  FONT_WEIGHT_MEDIUM: 500,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 700,

  LETTER_SPACING_DEFAULT: "normal"
};
```

You can extend this base theme like so:

```javascript
// ...App.js

keen = {
  ...keen,
  COLOR_BRAND_PRIMARY: "#03aaed"
}

render(
  <ThemeProvider theme={keen}>
    <App />
  </ThemeProvider>, 
  document.querySelector('#app'));
```

You can find more information on style variables [here](https://greymatter-io.github.io/gm-ui-components/?selectedKind=%20Overview%7CStyles&selectedStory=Styles&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Fthemes%2Fpanel).

# Documentation

See the [Grey Matter UI Components storybook](https://greymatter-io.github.io/gm-ui-components) for more usage examples and documentation.

# Compatability

* [Full list of browser support matrix](http://browserl.ist/?q=last+2+Chrome+versions%2C+last+2+ChromeAndroid+versions%2C+last+2+Safari+versions%2C+last+2+iOS+versions%2C+last+2+Firefox+versions%2C+last+2+Edge+versions)

# License

MIT

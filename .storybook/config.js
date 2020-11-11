import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
// import { withThemesProvider } from "storybook-addon-styled-component-theme";
import gmTheme from "./gmTheme";

import PropTypesTable from "./PropTypesTable";
import StoryContainer from "ComponentLibrary/StoryComponents/StoryContainer";
// import { keen, keenDark } from "style/theme";
import { theme } from "style/theme";

const req = require.context("../src/", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: gmTheme,
    brandTitle: "Grey Matter UI Components",
    brandUrl: "#",
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    showSearchBox: false,
    panelPosition: "bottom",
    sortStoriesByKind: true,
    chySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: false,
    selectedAddonPanel: undefined // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  }
});

// addon-info. This should always be the first decorator.
addDecorator(
  withInfo({
    header: true, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true, // Displays the source of story Component
    propTables: [
      /* Components used in story */
    ], // displays Prop Tables with this components
    propTablesExclude: [], // Exclude Components from being shoun in Prop Tables section
    styles: {
      infoBody: {
        background: "transparent",
        fontFamily: "inherit",
        color: "inherit",
        opacity: "0.9",
        border: "0"
      }
    }, // Overrides styles of addon
    TableComponent: PropTypesTable,
    components: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
    maxPropsIntoLine: 1, // Max props to display per line in source code
    maxPropObjectKeys: 10,
    maxPropArrayLength: 10,
    maxPropStringLength: 100
  })
);
// add withKnobs globally so we don't need to import it into individual stories
addDecorator(withKnobs);

addDecorator(withA11y);

addDecorator(story => <StoryContainer theme={theme}>{story()}</StoryContainer>);

// const themes = [keen, keenDark];
// addDecorator(withThemesProvider(themes));

configure(loadStories, module);

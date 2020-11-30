import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import AppFooter from "./AppFooter";
import { IconBell } from "..";

import c from "../util/color";

const stories = storiesOf("Components|App Footer", module);

const FooterDemoArea = styled.div`
  width: 85vw;
`;

const TestDiv = styled.div`
  /* background: ${({ theme }) => c(theme = theme, color = 'COLOR_CONTENT_CONTRAST', alpha = 0.5)}; */
  /* background: ${({ theme }) => c(theme, 'COLOR_INTENT_HIGHLIGHT')}; */
  /* background: ${({ theme }) => c(theme, 'COLOR_CONTENT_CONTRAST', 0.5)}; */
  /* background: ${({ theme }) => c(theme, 'COLOR_CONTENT_CONTRAST', 'OPACITY_LIGHTER')}; */
  /* background: ${({ theme }) => transparentize(theme.OPACITY_LIGHT, theme.COLOR_CONTENT_CONTRAST)}; */
  /* background: ${({ theme }) => c(theme, 'blue', 'OPACITY_LIGHTER')}; */
  background: ${({ theme }) => c('blue', 'OPACITY_LIGHTER')};
  /* background: ${c('blue', 0.5)}; */
  font-size: 20em;
  width: 1em;
  height: 1em;
  margin: 1rem;
`;

stories

  .add(
    "Color",
    () => (
      <TestDiv />
    ),
  )
  .add(
    "Default",
    () => (
      <FooterDemoArea>
        <AppFooter
          copyrightText={text("copyrightText")}
          useExternalLinks={boolean("useExternalLinks", true)}
        />
      </FooterDemoArea>
    ),
    {
      info: {
        text: `AppFooter for Grey Matter products.`
      }
    }
  )
  .add(
    "With custom children",
    () => (
      <FooterDemoArea>
        <AppFooter>
          <span>Custom Content</span>
          <span>Custom Content</span>
          <span>Custom Content</span>
        </AppFooter>
      </FooterDemoArea>
    ),
    {
      info: {
        text: `AppFooter for Grey Matter products.\n\nProviding \`children\` to AppFooter overrides all default footer content.`
      }
    }
  )
  .add(
    "With footer section overrides",
    () => (
      <FooterDemoArea>
        <AppFooter
          footerLeft={<IconBell />}
          footerCenter={<span>My custom footer center!</span>}
        />
      </FooterDemoArea>
    ),
    {
      info: {
        text: `AppFooter for Grey Matter products.\n\nUse the \`footerLeft\`, \`footerCenter\`, and \`footerRight\` props to override specific sections of the footer.`
      }
    }
  );

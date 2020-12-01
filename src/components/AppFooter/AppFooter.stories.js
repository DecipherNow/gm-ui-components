import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import AppFooter from "./AppFooter";
import { IconBell } from "..";

const stories = storiesOf("Components|App Footer", module);

const FooterDemoArea = styled.div`
  width: 85vw;
`;

stories
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

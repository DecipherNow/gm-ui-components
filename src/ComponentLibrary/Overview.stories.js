import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";

import { spacingScale } from "style/styleFunctions";

const Introduction = styled.div`
  padding: 4vh 4vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  max-width: 30em;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  line-height: 1.5;

  h1 {
    font-family: ${({ theme }) => theme.FONT_STACK_BRAND};
    color: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
    font-weight: 400;
    margin: 0;
  }

  h2 {
    margin: 1em 0 0;
  }

  hr {
    margin: ${spacingScale(1)} 0;
    box-shadow: 0 1px 0 0 ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
    height: 1px;
    border: 0;
  }

  a {
    color: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
    text-decoration: underline;
    padding: 0 0.25em;

    &:hover {
      text-decoration: none;
    }
  }
`;

storiesOf(" Overview|Introduction", module).add(
  "Introduction",
  () => {

    // let operatingSystem = 'Not known';
    //   if (window.navigator.appVersion.indexOf('Win')   !== -1) { operatingSystem = 'Windows OS'; }
    //   if (window.navigator.appVersion.indexOf('Mac')   !== -1) { operatingSystem = 'MacOS'; }
    //   if (window.navigator.appVersion.indexOf('X11')   !== -1) { operatingSystem = 'UNIX OS'; }
    //   if (window.navigator.appVersion.indexOf('Linux') !== -1) { operatingSystem = 'Linux OS'; }
  
    // console.log(window);
    
    return (
      <Introduction>
        <h1>Introduction</h1>
        <p>
          For detailed readme, issues, suggestions, and related projects, view
          the
          <a href="https://github.com/greymatter-io/gm-ui-components">
            Project Source
          </a>
          on GitHub.
        </p>
      </Introduction>
    );
  },
  {
    info: { header: false }
  }
);

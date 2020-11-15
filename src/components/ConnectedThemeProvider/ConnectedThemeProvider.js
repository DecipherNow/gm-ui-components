import React from "react";
import styled, { ThemeConsumer, ThemeProvider } from 'styled-components';

// Wraps children in the proper theme,
// and provides the base styles that
// components typically assume exist at the root

const ThemeRegionStyle = styled.div`
  --SPACING_BASE: ${({ theme }) => theme.SPACING_BASE};
  letter-spacing: ${({ theme }) => theme.LETTER_SPACING_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  display: contents;
  transition:
    background 1s ease,
    color 1s ease,
    letter-spacing 1s ease;
`;

function ConnectedThemeProvider({ theme, children }) {
  return (
    <ThemeProvider theme={theme} key={theme.THEME_NAME, theme.COLOR_SCHEME}>
      <ThemeRegionStyle>
        {children}
      </ThemeRegionStyle>
    </ThemeProvider>
  )
}

function ConnectedThemeTransformer({ fn, children, args }) {
  let transform;
  
  if (typeof (fn) === 'function') {
    if (args) {
      transform = (theme, args) => fn(theme, ...args);
    } else {
      transform = (theme) => fn(theme);
    }

    return (
      <ThemeConsumer>
        {theme => <ConnectedThemeProvider theme={transform(theme, args)} children={children} />}
      </ThemeConsumer>
    )
  } else {
    return children
  }
}

export { ConnectedThemeTransformer };
export default ConnectedThemeProvider;

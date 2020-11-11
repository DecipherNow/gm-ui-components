import React from "react";
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

// Wraps children in the proper theme,
// and provides the base styles that
// components typically assume exist at the root

const ThemeRegionStyle = styled.div`
  --SPACING_BASE: ${({ theme }) => theme.SPACING_BASE};
  letter-spacing: ${({ theme }) => theme.LETTER_SPACING_DEFAULT};
  display: contents;
`;

function ConnectedThemeProvider({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeRegionStyle>
        {children}
      </ThemeRegionStyle>
    </ThemeProvider>
  )
}

export default ConnectedThemeProvider;

import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "style/theme";
import GlobalStyles from "style/GlobalStyles";

import { getClientOS } from 'components';

const ConnectedThemeProvider = styled(ThemeProvider)``;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: stretch;
  background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};

> div {
  display: flex;
  width: 100%;
  flex-direction: column;

  > div {
    /* Header container */
    &:nth-child(1) {
      align-self: stretch;
      background-color: #fff;
      color: rgba(0, 0, 0, 0.8);
    }
    /* Story container */
    &:nth-child(2) {
      z-index: 10;
      position: relative;
      padding: 2rem;
      background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
      margin-left: auto;
      margin-right: auto;
    }
    /* Documentation container */
    &:nth-child(3) {
      align-self: stretch;
      background-color: #fff;
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
`;

function StoryContainer({ children }) {
  return (
    <ConnectedThemeProvider
      className={getClientOS(window)}
      theme={theme}
    >
      <Wrap>
        <GlobalStyles />
        {children}
      </Wrap>
    </ConnectedThemeProvider>
  );
}

StoryContainer.propTypes = {
  children: PropTypes.any,
};

export default StoryContainer;

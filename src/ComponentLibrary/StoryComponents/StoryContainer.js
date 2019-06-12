import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { keen } from "style/theme";
import GlobalStyles from "style/GlobalStyles";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: stretch;

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
        background-color: ${props => props.theme.COLOR_BACKGROUND_A};
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
    <Wrap>
      <GlobalStyles />
      {children}
    </Wrap>
  );
}

StoryContainer.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.object
};

StoryContainer.defaultProps = {
  children: undefined,
  theme: keen
};

export default StoryContainer;

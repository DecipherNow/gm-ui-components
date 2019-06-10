import styled from "styled-components";
import { PropTypes } from "prop-types";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const ReadoutDisplay = styled.div`
  color: ${props => props.theme.COLOR_CONTENT};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-radius: ${props => props.theme.RADIUS_05};
  margin: 0 ${spacingScale(1)} ${spacingScale(1)} 0;
  position: relative;
  overflow: hidden;
  font-family: ${props => props.theme.FONT_STACK_BASE};

  &:before {
    content: "";
    opacity: 0.2;
    background-color: ${props => props.color};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 3px solid ${props => props.color};
  }

  &:first-child:last-child {
    flex-grow: 0;
  }

  ${props =>
    props.primary &&
    `
    &:before {
      opacity: 0.3;
    }
  `};
`;

ReadoutDisplay.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.bool
};

ReadoutDisplay.defaultProps = {
  color: undefined,
  primary: undefined,
  theme: keen
};

export default ReadoutDisplay;

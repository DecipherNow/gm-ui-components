import styled from "styled-components";
import { PropTypes } from "prop-types";

import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const ReadoutDisplay = styled.div`
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_DEFAULT};
  margin: 0 ${spacingScale(1)} ${spacingScale(1)} 0;
  position: relative;
  overflow: hidden;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT},
    ${props => props.color && "inset 0 -43px 0 -40px " + props.color};
  z-index: 1;

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
  color: "transparent"
};

export default ReadoutDisplay;

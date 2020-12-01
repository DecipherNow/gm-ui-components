import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import generateButtonOrientation from "./utils/generateButtonOrientation";
import generateButtonSize from "./utils/generateButtonSize";
import generateButtonStyle from "./utils/generateButtonStyle";
import { keen } from "style/theme";

// The start of the CSS style output
const ButtonWrap = styled.button`
  align-items: center;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_DEFAULT};
  justify-content: center;
  line-height: 1.4;
  text-align: center;
  text-transform: none;
  transition: all 0.3s ease;
  user-select: none;

  ${props =>
    props.active &&
    css`
      transition-duration: 0s;
      filter: saturate(80%) brightness(90%) contrast(110%);
    `};

  &:hover {
    transition: all 0.1s ease;
  }

  &:hover:focus,
  &:hover:active {
    transition: all 0 ease;
  }

  &:focus,
  &:focus:active {
    outline: none;
    border: 1px solid
      ${({ theme }) => theme.brandColor || theme.COLOR_INTENT_HIGHLIGHT};
    z-index: 10;
    position: relative;

    &::-moz-focus-inner {
      border: 0;
    }
  }

  > * {
    flex: 0 1 auto;
  }

  ${props => css`
    ${generateButtonStyle(
      props.theme,
      props.type,
      props.dangerouslySetColor,
      props.outline
    )}
    ${generateButtonSize(props.size)} 
    ${generateButtonOrientation(props.orientation)}
  `};
`;

ButtonWrap.propTypes = {
  active: PropTypes.bool,
  dangerouslySetColor: PropTypes.string,
  orientation: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(["normal", "xs", "sm", "lg", "xl"]),
  type: PropTypes.oneOf(["default", "danger", "info", "warning", "primary"])
};

ButtonWrap.defaultProps = {
  theme: keen,
  active: false,
  orientation: "horizontal",
  outline: false,
  size: "normal",
  type: "default"
};

export default ButtonWrap;

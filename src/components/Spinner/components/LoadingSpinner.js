import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { transparentize } from 'polished';
import Progress from 'components/Progress';
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

export const Spinner = styled(Progress)`
  margin: ${spacingScale(1)};
  border: 0;
  color: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
  --circle-fill-width: 1.5px;
  --background-color: ${({ theme }) => transparentize(0.5, theme.COLOR_INTENT_HIGHLIGHT)};

  ${props =>
    props.orientation === "vertical" ? verticalStyles : horizontalStyles};
  ${props =>
    props.size &&
    css`
      height: ${props.size};
      width: ${props.size};
    `}
`;

export const verticalStyles = css`
  font-size: ${spacingScale(6)};
`;

export const horizontalStyles = css`
  font-size: ${spacingScale(2)};
`;

export function LoadingSpinner(props) {
  return (
    <Spinner shape="circle" {...props} />
  );
}

LoadingSpinner.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  size: PropTypes.string
};

Spinner.defaultProps = {
  orientation: "vertical",
  theme: keen
};

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;

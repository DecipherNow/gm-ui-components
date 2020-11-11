import React from "react";
import PropTypes from "prop-types";

import { theme } from "style/theme";

import LoadingSpinnerWrap from "./components/LoadingSpinnerWrap";
import LoadingMessage from "./components/LoadingMessage";
import LoadingSpinner from "./components/LoadingSpinner";

Spinner.propTypes = {
  message: PropTypes.string,
  orientation: PropTypes.oneOf(["vertical", "horizontal"])
};

Spinner.defaultProps = {
  orientation: "vertical",
  message: "Loading..."
};

Spinner.displayName = "Spinner";

export default function Spinner({ message, orientation, ...props }) {
  return (
    <LoadingSpinnerWrap orientation={orientation}>
      <LoadingSpinner orientation={orientation} {...props} />
      {message && <LoadingMessage>{message}</LoadingMessage>}
    </LoadingSpinnerWrap>
  );
}

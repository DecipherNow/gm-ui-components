import React from "react";
import { PropTypes } from "prop-types";

import { IconAlertTriangle } from "../Glyphs";
import ErrorBox from "./components/ErrorBox";
import ErrorContent from "./components/ErrorContent";
import Span from "./components/Span";
import { theme } from "style/theme";

/**Stateless functional React component that renders the error message box
 * Takes an error message and returns error message box
 * @param {string} errorMsg
 * @param {function} icon
 * @returns react component
 */
const ErrorCard = ({ errorMsg = "Error", icon, ...props }) => {
  return (
    <ErrorBox {...props}>
      <ErrorContent>
        <Span>{icon ? icon() : <IconAlertTriangle size="72px" />}</Span>
        <Span>{errorMsg}</Span>
      </ErrorContent>
    </ErrorBox>
  );
};

ErrorCard.propTypes = {
  errorMsg: PropTypes.string,
  icon: PropTypes.func
};

ErrorCard.defaultProps = {
  errorMsg: "Something went wrong."
};

ErrorCard.displayName = "ErrorCard";

export default ErrorCard;

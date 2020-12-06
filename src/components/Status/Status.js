import React from "react";
import { PropTypes } from "prop-types";
import LoadingSpinner from "components/Spinner/components/LoadingSpinner";
import {
  IconAlertTriangle,
  IconInfo,
  IconCheckcircleChecked
} from "components/Glyphs";
import { spacingScale } from "style/styleFunctions";
import { Body } from "./components/Body";
import { Wrap } from "./components/Wrap";
import { Detail } from "./components/Detail";
import { Message } from "./components/Message";
import { Graphic } from "./components/Graphic";

/**
 * Indicates the status of a content area. Provides text styles
 * and graphics for 'Indeterimate', 'Error', 'Warning', 'Success,
 * and 'Info' states.
 *
 * Message and detail are optional, but recommended to inform the
 * user."
 */
export default function Status({
  statusType,
  isBlock,
  detail,
  message,
  graphic
}) {
  let statusVisual = "";
  let statusVisualColor = "";

  switch (statusType) {
    case "info":
      statusVisual = <GraphicStatusInfo />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_INFO;
      break;
    case "progress":
      statusVisual = <IconAlertTriangle />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_SUCCESS;
      break;
    case "warning":
      statusVisual = <GraphicStatusWarning />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_WARNING;
      break;
    case "error":
      statusVisual = <GraphicStatusError />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_DANGER;
      break;
    case "success":
      statusVisual = <GraphicStatusSuccess />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_SUCCESS;
      break;
    default:
      statusVisual = <GraphicStatusIndeterminate isBlock={isBlock} />;
      statusVisualColor = ({ theme }) => theme.COLOR_INTENT_SUCCESS;
  }

  return (
    <Wrap isBlock={isBlock}>
      <Graphic graphicColor={statusVisualColor}>
        {graphic ? graphic : statusVisual}
      </Graphic>
      <Body isBlock={isBlock}>
        {message && <Message>{message}</Message>}
        {detail && <Detail>{detail}</Detail>}
      </Body>
    </Wrap>
  );
}

Status.defaultProps = {
  statusType: "indeterminate",
  isBlock: false
};

Status.propTypes = {
  detail: PropTypes.string,
  graphic: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.element
  ]),
  isBlock: PropTypes.bool,
  message: PropTypes.string,
  statusType: PropTypes.oneOf([
    "info",
    "indeterminate",
    "warning",
    "progress",
    "success",
    "error"
  ])
};

Status.displayName = "Status";

function GraphicStatusIndeterminate({ isBlock }) {
  return <LoadingSpinner size={isBlock ? spacingScale(5) : spacingScale(2)} />;
}

GraphicStatusIndeterminate.propTypes = {
  isBlock: PropTypes.bool
};

function GraphicStatusSuccess() {
  return <IconCheckcircleChecked fillOpacity="0" strokeWidth="2px" />;
}

function GraphicStatusInfo() {
  return <IconInfo fillOpacity="0" strokeWidth="2px" />;
}

function GraphicStatusError() {
  return <IconAlertTriangle fillOpacity="1" strokeWidth="0" />;
}

function GraphicStatusWarning() {
  return <IconAlertTriangle fillOpacity="0" strokeWidth="2px" />;
}

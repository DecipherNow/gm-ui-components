import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePopper } from "react-popper";

import TooltipContent from "./components/TooltipContent";
import TooltipWrap from "./components/TooltipWrap";
import { keen } from "style/theme";
export default function Tooltip({
  children,
  content,
  position,
  hideTooltip,
  tooltipStyle,
  theme,
  popperOptions,
  ...props
}) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: position,
    ...popperOptions
  });
  const [isVisible, setVisibility] = useState(false);

  // Always hide the tooltip if the content is empty
  if (!content) hideTooltip = true;
  return (
    <>
      <TooltipWrap
        ref={isVisible ? setReferenceElement : null}
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
        {...props}
      >
        {children}
      </TooltipWrap>

      <TooltipContent
        ref={isVisible ? setPopperElement : null}
        style={{
          zIndex: theme.ZINDEX_TOOLTIP,
          ...styles.popper,
          ...tooltipStyle
        }}
        visible={!hideTooltip && isVisible}
        {...attributes.popper}
      >
        {content}
      </TooltipContent>
    </>
  );
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  content: PropTypes.string,
  hideTooltip: PropTypes.bool,
  popperOptions: PropTypes.object, // https://popper.js.org/docs/v2/constructors/#options
  position: PropTypes.oneOf([
    "auto",
    "auto-start",
    "auto-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
    "left",
    "left-start",
    "left-end"
  ]), // https://popper.js.org/docs/v2/constructors/#placement
  theme: PropTypes.object,
  tooltipStyle: PropTypes.object
};

Tooltip.defaultProps = {
  position: "bottom"
};

Tooltip.displayName = "Tooltip";

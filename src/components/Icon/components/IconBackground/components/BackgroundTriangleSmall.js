import React from "react";
import { PropTypes } from "prop-types";

BackgroundTriangleSmall.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const title = "TriangleSmall";

function BackgroundTriangleSmall({
  ratio = 1,
  backgroundColor = "transparent",
  backgroundOpacity = "1"
}) {
  return (
    <g
      id={title}
      className="iconBackground"
      fillOpacity={backgroundOpacity}
      fill={backgroundColor}
      fillRule="evenodd"
    >
      <path
        d="M12.8468583,4.36325889 L20.9902272,17.4723234 C21.2816549,17.9414591 21.1375941,18.5580176 20.6684584,18.8494453 C20.5100456,18.9478516 20.3272715,19 20.1407818,19 L3.80424764,19 C3.25196289,19 2.80424764,18.5522847 2.80424764,18 C2.80424764,17.8125803 2.85691709,17.6289327 2.95624934,17.4700011 L11.1494146,4.36093656 C11.442125,3.89260003 12.0590754,3.75022687 12.5274119,4.0429372 C12.6569646,4.12390762 12.7662427,4.23348515 12.8468583,4.36325889 Z"
        id="Background"
      />
    </g>
  );
}

export default BackgroundTriangleSmall;

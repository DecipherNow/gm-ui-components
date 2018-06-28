import React from "react";
import { PropTypes } from "prop-types";

import Wrapper from "./components/Wrapper";
import Box from "./components/Box";

const Checkbox = ({
  label,
  value,
  defaultChecked,
  labelPosition = "left",
  ...props
}) => {
  return (
    <Wrapper labelPosition={labelPosition}>
      <Box defaultChecked={defaultChecked} value={value} {...props} />
      {label}
    </Wrapper>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  value: PropTypes.string
};

Checkbox.displayName = "Checkbox";

export default Checkbox;

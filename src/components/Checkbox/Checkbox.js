import React from "react";
import { PropTypes } from "prop-types";

import InputLabelText from "components/util/InputLabelText";
import InputWrap from "components/util/InputWrap";

import CheckboxBox from "./components/CheckboxBox";

const Checkbox = ({
  label,
  labelPosition,
  value,
  readonly,
  disabled,
  style,
  ...props
}) => {
  return (
    <InputWrap labelPosition={labelPosition} style={style}>
      {label && <InputLabelText disabled={disabled}>{label}</InputLabelText>}
      <CheckboxBox value={value} disabled={disabled} {...props} />
    </InputWrap>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.string
};

Checkbox.defaultProps = {
  disabled: false,
  labelPosition: "right",
  readonly: false
};

Checkbox.displayName = "Checkbox";

export default Checkbox;

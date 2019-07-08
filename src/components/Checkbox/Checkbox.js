import React from "react";
import { PropTypes } from "prop-types";

import InputLabelText from "components/util/InputLabelText";
import InputWrap from "components/util/InputWrap";

import CheckboxBox from "./components/CheckboxBox";

const Checkbox = ({
  label,
  labelPosition,
  value,
  defaultChecked,
  readonly,
  disabled,
  ...props
}) => {
  return (
    <InputWrap labelPosition={labelPosition} {...props}>
      {label && <InputLabelText>{label}</InputLabelText>}
      <CheckboxBox
        defaultChecked={defaultChecked}
        value={value}
        disabled={disabled}
      />
    </InputWrap>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  value: PropTypes.string
};

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  labelPosition: "right",
  readonly: false
};

Checkbox.displayName = "Checkbox";

export default Checkbox;

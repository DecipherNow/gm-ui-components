import React from "react";
import { PropTypes } from "prop-types";

import InputLabelText from "components/util/InputLabelText";
import InputWrap from "components/util/InputWrap";

import SelectField from "./components/SelectField";
import InputHint from "components/util/InputHint";

const Select = ({
  autoFocus,
  children,
  hint,
  label,
  labelPosition,
  value,
  disabled,
  ...props
}) => {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText disabled={disabled}>{label}</InputLabelText>}
      <SelectField
        autoFocus={autoFocus}
        value={value}
        disabled={disabled}
        {...props}
      >
        {children}
      </SelectField>
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
};

Select.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  value: PropTypes.string
};

Select.defaultProps = {
  labelPosition: "top"
};

Select.displayName = "Select";

export default Select;

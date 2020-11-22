import React from "react";
import PropTypes from "prop-types";

import InputLabelText from "components/util/InputLabelText";
import InputWrap from "components/util/InputWrap";
import InputHint from "components/util/InputHint";
import InputRangeControl from "./components/InputRangeControl.js";

export default function InputRange({
  autoFocus,
  defaultValue,
  hint,
  label,
  labelPosition,
  ...props
}) {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText disabled={disabled}>{label}</InputLabelText>}
      <InputRangeControl
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        {...props}
      />
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
}

InputRange.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  maxLength: PropTypes.number,
  placeholder: PropTypes.string
};

InputRange.defaultProps = {
  autoFocus: false,
  labelPosition: "right"
};

InputRange.displayName = "InputRange";

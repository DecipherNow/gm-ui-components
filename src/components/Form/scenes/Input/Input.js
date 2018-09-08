import React from "react";
import PropTypes from "prop-types";

import InputLabelText from "../../components/InputLabelText";
import InputWrap from "../../components/InputWrap";
import InputHint from "../../components/InputHint";
import InputField from "../../components/InputField";

Input.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text"])
};

export default function Input({
  autoFocus,
  defaultValue,
  hint,
  label,
  labelPosition,
  maxLength,
  placeholder,
  type,
  ...props
}) {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText>{label}</InputLabelText>}
      <InputField
        type={type}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={maxLength}
        {...props}
      />
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
}

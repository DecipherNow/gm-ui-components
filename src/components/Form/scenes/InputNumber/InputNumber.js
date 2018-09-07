import React from "react";
import PropTypes from "prop-types";

import InputLabel from "../../components/InputLabel";
import InputWrap from "../../components/InputWrap";
import InputHint from "../../components/InputHint";
import InputField from "../../components/InputField";

InputNumber.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string
};

export default function InputNumber({
  autoFocus,
  defaultValue,
  hint,
  label,
  maxLength,
  placeholder,
  ...props
}) {
  return (
    <InputWrap>
      {label && <InputLabel>{label}</InputLabel>}
      <InputField
        type="number"
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

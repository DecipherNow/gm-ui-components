import React from "react";
import PropTypes from "prop-types";

import InputLabelText from "components/util/InputLabelText";
import InputWrap from "components/util/InputWrap";
import InputHint from "components/util/InputHint";
import InputTextField from "components/util/InputTextField";

export default function InputField({
  autoFocus,
  defaultValue,
  readonly,
  disabled,
  hint,
  label,
  labelPosition,
  maxLength,
  placeholder,
  type,
  style,
  className,
  ...props
}) {
  return (
    <InputWrap
      labelPosition={labelPosition}
      style={style}
      className={className}
    >
      {label && <InputLabelText disabled={disabled}>{label}</InputLabelText>}
      <InputTextField
        type={type}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        readonly
        maxLength={maxLength}
        placeholder={placeholder}
        {...props}
      />
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
}

InputField.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    "email",
    "password",
    "search",
    "tel",
    "text",
    "url",
    "number"
  ]).isRequired
};

InputField.defaultProps = {
  autoFocus: false,
  disabled: false,
  labelPosition: "top",
  readonly: false,
  type: "text"
};

InputField.displayName = "InputField";

import React from "react";
import PropTypes from "prop-types";

import InputLabelText from "components/util/InputLabelText";
import InputWrap from "components/util/InputWrap";
import InputHint from "components/util/InputHint";
import TextareaField from "components/util/TextareaField";

export default function Textarea({
  autoFocus,
  defaultValue,
  readonly,
  disabled,
  hint,
  label,
  labelPosition,
  maxLength,
  placeholder,
  ...props
}) {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText disabled={disabled}>{label}</InputLabelText>}
      <TextareaField
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        readonly={readonly}
        maxLength={maxLength}
        placeholder={placeholder}
        {...props}
      />
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
}

Textarea.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool
};

Textarea.defaultProps = {
  labelPosition: "top"
};

Textarea.displayName = "Textarea";

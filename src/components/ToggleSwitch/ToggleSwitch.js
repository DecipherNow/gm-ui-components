import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";
import { readableColor, darken, transparentize } from "polished";
import { formInteractionStyles } from "components/util/InputFieldInteractionStyles";
import InputWrap from "components/util/InputWrap";
import InputLabelText from "components/util/InputLabelText";

const ToggleSwitchElement = styled.input.attrs(props => ({
  type: "checkbox"
}))`
  ${formInteractionStyles()};
  appearance: none;
  border-radius: 1000em;
  height: calc(1em - (${({ theme }) => theme.CONTROL_BORDER_WIDTH}) * 2);
  width: calc(1.615em - (${({ theme }) => theme.CONTROL_BORDER_WIDTH}) * 2);
  display: flex;
  transition: all 0.3s ease;
  border: ${({ theme }) => theme.CONTROL_BORDER_WIDTH} solid;
  position: relative;
  outline: none;
  box-sizing: content-box;
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};

  --color: ${({ color, theme }) => color ? color : theme.COLOR_INTENT_HIGHLIGHT};
  --color-light: ${({ color, theme }) => color ? transparentize(0.25, color) : transparentize(0.25, theme.COLOR_INTENT_HIGHLIGHT)};
  --color-readable: ${({ color, theme }) =>
    color
      ? readableColor(darken(0.1, color))
      : readableColor(darken(0.1, theme.COLOR_INTENT_HIGHLIGHT))};

  --inset: ${({ theme }) => theme.CONTROL_BORDER_WIDTH};
  --spring-full-press: calc((37% + ${({ theme }) => theme.CONTROL_BORDER_WIDTH}) + var(--inset));
  --spring-medium-press: calc((30% + ${({ theme }) => theme.CONTROL_BORDER_WIDTH}) + var(--inset));

  /* Default before element */
  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
  }

  &,
  &:focus,
  &:focus:active {
    border-color: ${({ color, theme }) =>
      color ? color : theme.COLOR_INTENT_HIGHLIGHT};
  }

  &:before {
    content: "";
    position: absolute;
    background: currentColor;
    top: var(--inset);
    bottom: var(--inset);
    left: var(--inset);
    right: var(--inset);
    border-radius: inherit;
    transition: color 0.3s ease, left 0.3s ease, right 0.3s ease;
    z-index: 2;
  }

  /* Default after element */
  &:after {
    color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
    z-index: 1;
    display: flex;
    font-size: 0.25em;
    text-transform: uppercase;
    align-self: center;
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 45%;
    left: auto;
    right: 0;
  }

  /* Change the colors on hover and unchecked */
  label:hover > &:not(:disabled):not(:checked) {
    border-color: var(--color);

    &:before {
      color: var(--color);
    }
  }

  /* Change the colors when checked */
  &:checked {
    background: var(--color);
    border-color: transparent;

    &:before,
    &:after {
      color: var(--color-readable);
    }
  }

  /* Change the colors when hovered and checked */
  label:hover > &:checked,
  &:hover:checked {
    background: var(--color-light);
    border-color: transparent;
  }

  /* Move the indicator and inner labels when checked */
  &:checked {
    &:before {
      left: var(--spring-full-press);
      right: var(--inset);
    }

    &:after {
      content: "${props => props.innerLabelOn}";
      left: var(--inset);
      right: auto;
    }
  }

  /* Move the indicator and inner labels when unchecked */
  &:not(:checked) {

    &:before {
      right: var(--spring-full-press);
      left: var(--inset);
    }

    &:after {
      content: "${props => props.innerLabelOff}";
      left: auto;
      right: var(--inset);
    }
  }

  /* Fade when disabled */
  &:disabled {
    opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
  }
`;

/**
 * Description of your component
 */
export default function ToggleSwitch({
  color,
  innerLabelOn,
  innerLabelOff,
  labelPosition,
  label,
  ...props
}) {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText disabled={props.disabled}>{label}</InputLabelText>}
      <ToggleSwitchElement
        color={color}
        innerLabelOn={innerLabelOn}
        innerLabelOff={innerLabelOff}
        {...props}
      />
    </InputWrap>
  );
}

ToggleSwitch.propTypes = {
  color: PropTypes.string,
  innerLabelOff: PropTypes.string,
  innerLabelOn: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"])
};

ToggleSwitch.defaultProps = {
  labelPosition: "right"
};

ToggleSwitch.displayName = "ToggleSwitch";

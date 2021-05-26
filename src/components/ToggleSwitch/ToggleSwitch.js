import React from "react";
import { PropTypes } from "prop-types";
import { classnames } from "../../util/classnames";

import { useSwitch } from "@react-aria/switch";
import { useHover, usePress } from "@react-aria/interactions";
import { useToggleState } from "@react-stately/toggle";
import { useFocusRing } from "@react-aria/focus";

import styled from "styled-components";
import { readableColor } from "polished";
import { formInteractionStyles } from "components/util/InputFieldInteractionStyles";
import InputWrap from "components/util/InputWrap";
import InputLabelText from "components/util/InputLabelText";

const ToggleSwitchElement = styled.input`
  ${formInteractionStyles()};
  appearance: none;
  border-radius: 10em;
  height: 1em;
  width: 1.615em;
  display: flex;
  transition: all 0.3s ease;
  border: 1px solid cornflowerblue;
  border-color: yellow;
  border-color: ${({ color, theme }) =>
    color ? color : theme.COLOR_INTENT_HIGHLIGHT};
  position: relative;
  outline: none;
  box-sizing: content-box;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
  }

  .isFocusVisible & {
    border-color: ${({ color, theme }) =>
      color ? color : theme.COLOR_INTENT_HIGHLIGHT};
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
    border-radius: inherit;
    transition: all 0.15s ease;
    z-index: 2;
  }

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

  &:checked {
    background: ${({ color, theme }) =>
      color ? color : theme.COLOR_INTENT_HIGHLIGHT};
    &:before {
      left: 37%;
      right: 0;
    }

    .isHovered &:not(:disabled):before {
      left: 30%;
    }

    &:after {
      content: "${props => props.innerLabelOn}";
      left: 0;
      right: auto;
      color: ${({ color, theme }) =>
        color
          ? readableColor(color)
          : readableColor(theme.COLOR_INTENT_HIGHLIGHT)};
    }
  }

  &:not(:checked) {
    background: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};

    &:before {
      right: 37%;
      left: 0;
    }

    &:not(:disabled):hover:before {
      right: 30%;
    }

    &:after {
      content: "${props => props.innerLabelOff}";
      left: auto;
      right: 0;
    }
  }
`;

/**
 * Description of your component
 */
export default function ToggleSwitch({ children, ...props }) {
  let ref = React.useRef();
  let state = useToggleState(props);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  let { hoverProps, isHovered } = useHover({});
  let { pressProps, isPressed } = usePress({});

  return (
    <InputWrap
      {...hoverProps}
      {...pressProps}
      className={classnames(
        isHovered && "isHovered",
        isPressed && "isPressed",
        isFocusVisible && "isFocusVisible",
        props.isDisabled && "isDisabled"
      )}
      labelPosition={props.labelPosition}
    >
      <InputLabelText>{children || props.label}</InputLabelText>
      <ToggleSwitchElement
        color={props.color ? props.color : undefined}
        innerLabelOn={props.innerLabelOn}
        innerLabelOff={props.innerLabelOff}
        ref={ref}
        {...inputProps}
        {...focusProps}
        {...props}
      />
    </InputWrap>
  );
}

ToggleSwitch.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  defaultChecked: PropTypes.bool,
  innerLabelOff: PropTypes.string,
  innerLabelOn: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"])
};

ToggleSwitch.defaultProps = {
  labelPosition: "right"
};

ToggleSwitch.displayName = "ToggleSwitch";

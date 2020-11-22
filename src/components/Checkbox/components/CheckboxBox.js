import styled from "styled-components";
import InputBox from "components/util/InputBox";

const CheckboxBox = styled(InputBox).attrs(() => ({
  type: "checkbox"
}))`
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_SHARP};
  --checkmark-thickness: 2px;

  &:after {
    width: calc(45% + ${({ theme }) => theme.CONTROL_BORDER_WIDTH});
    height: calc(75% + ${({ theme }) => theme.CONTROL_BORDER_WIDTH});
    top: 40%;
    left: 50%;
    border-style: solid;
    border-width: 0 var(--checkmark-thickness) var(--checkmark-thickness) 0;
    transform: translateY(-50%) translateX(-50%) rotate(45deg) scale(0.7);
    
  }

  &:checked:after {
    transform: translateY(-50%) translateX(-50%) rotate(45deg) scale(1);
  }

  &:indeterminate {
    &:after {
      width: 50%;
      height: 0;
      border-width: 0 0 var(--checkmark-thickness);
      transform: translateY(-50%) translateX(-50%) rotate(0) scale(1);
    }
  }
`;

CheckboxBox.defaultProps = {
};

export default CheckboxBox;

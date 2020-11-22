import styled from "styled-components";
import InputBox from "components/util/InputBox";

const RadioBox = styled(InputBox).attrs(() => ({
  type: "radio"
}))`
  border-radius: 200px;

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    clip-path: circle(25%);
    transform: scale(0);
    background-color: currentColor;
  }

  &:checked {
    &:after {
      transform: scale(1);
    }
  }
`;

RadioBox.defaultProps = {
};

export default RadioBox;

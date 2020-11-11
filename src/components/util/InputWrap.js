import styled, { css } from "styled-components";
import { theme } from "style/theme";
import { spacingScale } from "style/styleFunctions";

const InputWrap = styled.label`
  ${props => getPosition(props.labelPosition)};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  display: flex;
  position: relative;

  &:active {
    /* Prevent text selection when user clicks label to focus input.
    User can drag to select from outside the label to select label text. */
    user-select: none;
  }
`;

InputWrap.defaultProps = {
};

function getPosition(position) {
  switch (position) {
    case "left":
      return css`
        flex-direction: row;
        align-items: center;
        > input,
        > textarea,
        > select {
          margin-left: ${spacingScale(0.5)};
        }
      `;
    case "right":
      return css`
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        > input,
        > textarea,
        > select {
          margin-right: ${spacingScale(0.5)};
        }
      `;
    case "bottom":
      return css`
        flex-direction: column-reverse;
        > input,
        > textarea,
        > select {
          margin-bottom: ${spacingScale(0.5)};
        }
      `;
    default:
    case "top":
      return css`
        flex-direction: column;
        > input,
        > textarea,
        > select {
          margin-top: ${spacingScale(0.5)};
        }
      `;
  }
}

export default InputWrap;

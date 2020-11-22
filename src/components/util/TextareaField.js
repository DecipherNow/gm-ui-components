import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "./InputFieldInteractionStyles";

const TextareaField = styled.textarea`
  ${formInteractionStyles};
  min-height: calc(${spacingScale(3)} - ${({ theme }) => theme.CONTROL_BORDER_WIDTH * 2});
  max-width: 100%;
  min-width: 8em;
  border-radius: calc(
    ${({ theme }) => theme.CORNER_RADIUS_INPUT} + ${({ theme }) => theme.CONTROL_BORDER_WIDTH}
  );
  border: ${({ theme }) => theme.CONTROL_BORDER_WIDTH} solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  background: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.15s ease;
  user-select: auto;
  flex: 1 1 auto;

  &::placeholder {
    color: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
    transition: inherit;
  }
`;

TextareaField.defaultProps = {
};

export default TextareaField;

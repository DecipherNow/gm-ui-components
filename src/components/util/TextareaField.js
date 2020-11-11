import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "./InputFieldInteractionStyles";
import { theme } from "style/theme";

const BORDER_WIDTH = 1;

const TextareaField = styled.textarea`
  ${formInteractionStyles};
  min-height: calc(${spacingScale(3)} - ${BORDER_WIDTH * 2}px);
  max-width: 100%;
  min-width: 8em;
  border-radius: calc(
    ${({ theme }) => theme.CORNER_RADIUS_INPUT} + ${BORDER_WIDTH}px
  );
  border: ${BORDER_WIDTH}px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
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

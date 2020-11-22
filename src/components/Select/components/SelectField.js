import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "components/util/InputFieldInteractionStyles";

const CHEVRON_ICON_DEFAULT = ({ theme }) =>
  `"data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.155 12.784l2.47-2.47a.75.75 0 0 1 1.06 1.061l-3.53 3.53-3.53-3.53a.75.75 0 0 1 1.06-1.06l2.47 2.469z' fill='` +
  theme.COLOR_CONTENT_DEFAULT +
  `' fill-rule='nonzero'/%3E%3C/svg%3E"`;

const SelectField = styled.select`
  ${formInteractionStyles};
  height: calc(${spacingScale(4)} - ${({ theme }) => theme.CONTROL_BORDER_WIDTH * 2});
  border-radius: calc(
    ${({ theme }) => theme.CORNER_RADIUS_INPUT} + ${({ theme }) => theme.CONTROL_BORDER_WIDTH}
  );
  border: ${({ theme }) => theme.CONTROL_BORDER_WIDTH} solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  background: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
  position: relative;
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.15s ease;
  user-select: auto;
  flex: 1 1 auto;
  appearance: none;
  background-image: url(${CHEVRON_ICON_DEFAULT});
  background-position: right center;
  background-repeat: no-repeat;

  &::placeholder {
    color: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
    transition: inherit;
  }
`;

SelectField.defaultProps = {
};

export default SelectField;

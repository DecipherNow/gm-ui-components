import styled, { css } from "styled-components";

const InputLabelText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  line-height: ${({ theme }) => theme.LINE_HEIGHT_TIGHT};

  ${props => props.disabled && css`
    color: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
  `}
`;

InputLabelText.defaultProps = {
};

export default InputLabelText;

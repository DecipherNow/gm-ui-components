import styled from "styled-components";
import { theme } from "style/theme";

const ErrorBox = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  user-select: none;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
`;

ErrorBox.defaultProps = {
};

export default ErrorBox;

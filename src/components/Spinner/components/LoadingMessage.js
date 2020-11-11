import styled from "styled-components";
import { theme } from "style/theme";

export const LoadingMessage = styled.p`
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
  width: max-content;
  max-width: 20em;
  margin: 0;
`;

LoadingMessage.defaultProps = {
};

export default LoadingMessage;

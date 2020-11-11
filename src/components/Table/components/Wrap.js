import styled from "styled-components";
import { theme } from "style/theme";

const Wrap = styled.table`
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  white-space: nowrap;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`;

Wrap.defaultProps = {
};

Wrap.displayName = "Wrap";

export default Wrap;

import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const TabGroupWrap = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  min-height: ${spacingScale(4)};
`;

TabGroupWrap.defaultProps = {
};

export default TabGroupWrap;

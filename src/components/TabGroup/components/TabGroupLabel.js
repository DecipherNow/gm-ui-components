import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const TabGroupLabel = styled.p`
  padding: 0 ${spacingScale(1)};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  height: 100%;
  margin: auto 0;
  flex: 0 0 auto;
`;

TabGroupLabel.defaultProps = {
};

export default TabGroupLabel;

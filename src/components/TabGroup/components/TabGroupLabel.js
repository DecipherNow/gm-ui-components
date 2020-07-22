import styled from "styled-components";
import { keen } from "style/theme";

const TabGroupLabel = styled.p`
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  height: 100%;
  margin: auto 0;
  flex: 0 0 auto;
`;

TabGroupLabel.defaultProps = {
  theme: keen
};

export default TabGroupLabel;

import styled from "styled-components";
import { theme } from "style/theme";

const SectionTitle = styled.h3`
  color: inherit;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_SEMIBOLD};
  margin: 0;
`;

SectionTitle.defaultProps = {
};

export default SectionTitle;

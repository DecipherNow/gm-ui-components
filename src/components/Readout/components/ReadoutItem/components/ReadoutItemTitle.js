import styled from "styled-components";
import { theme } from "style/theme";

const ReadoutItemTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  margin: 0;
  padding: 0;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_SEMIBOLD};
  min-height: 1em;
  display: inline-block;
`;

ReadoutItemTitle.defaultProps = {
};

export default ReadoutItemTitle;

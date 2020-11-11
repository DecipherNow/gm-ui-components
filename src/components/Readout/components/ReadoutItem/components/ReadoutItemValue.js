import styled from "styled-components";
import { theme } from "style/theme";

const ReadoutItemValue = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE_PAGE_TITLE};
  word-break: break-all;
  margin: 0;
  line-height: 1.2;
  min-height: 1em;
`;

ReadoutItemValue.defaultProps = {
};

export default ReadoutItemValue;

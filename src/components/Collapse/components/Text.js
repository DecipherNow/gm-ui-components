import styled from "styled-components";

import { theme } from "style/theme";

export const Title = styled.div`
  margin-right: auto;
`;

export const Detail = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
`;

Detail.defaultProps = {
};

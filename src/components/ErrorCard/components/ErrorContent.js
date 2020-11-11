import styled from "styled-components";
import { theme } from "style/theme";

import { spacingScale } from "style/styleFunctions";

const ErrorContent = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  display: inline-flex;
  flex-basis: 600px;
  flex-flow: row nowrap;
  font-size: ${({ theme }) => theme.FONT_SIZE_PAGE_TITLE};
  justify-content: center;
  margin: ${spacingScale(4)};
  padding: ${spacingScale(8)} ${spacingScale(4)};
  padding-top: ${spacingScale(8)};
  padding-bottom: ${spacingScale(8)};
`;

ErrorContent.defaultProps = {
};

export default ErrorContent;

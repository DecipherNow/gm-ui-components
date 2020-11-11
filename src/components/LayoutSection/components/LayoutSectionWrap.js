import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const LayoutSectionWrap = styled.section`
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  align-items: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: ${spacingScale(1)};

  &:not(:first-of-type) {
    margin-top: ${spacingScale(4)};
  }
`;

LayoutSectionWrap.defaultProps = {
};

export default LayoutSectionWrap;

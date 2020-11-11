import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";

const NavCardKey = styled.dt`
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  padding-right: ${spacingScale(1)};
  display: inline-block;
`;

NavCardKey.defaultProps = {
};

export default NavCardKey;

import styled from "styled-components";
import { spacingScale } from "../../../style/styleFunctions";
import { theme } from "style/theme";

const LongLogo = styled.a`
  padding: ${spacingScale(0.75)} ${spacingScale(1)};
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  flex: 0 1 auto;
  transition: all 0.2s ease;
  flex-direction: column;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.COLOR_CONTENT_CONTRAST};
  }

  svg {
    max-width: 7em;
    height: auto;
    width: 100%;
  }

  @media all and (min-width: 800px) {
    flex-direction: row;
  }
`;

LongLogo.defaultProps = {
};

export default LongLogo;

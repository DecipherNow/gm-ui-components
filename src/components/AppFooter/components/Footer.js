import styled from "styled-components";
import { theme } from "style/theme";
import { spacingScale } from "style/styleFunctions";

const Footer = styled.footer`
  user-select: none;
  overflow: hidden;
  padding: 0 ${spacingScale(0.5)};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  display: flex;
  flex-flow: row wrap;
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  height: auto;
  min-height: ${spacingScale(4)};
  align-items: stretch;
  justify-content: space-between;

  @media all and (min-width: 800px) {
    height: ${spacingScale(5)};
    flex-wrap: no-wrap;
    align-items: center;
    justify-self: stretch;

    & + * {
      padding-bottom: ${spacingScale(4)};
    }
  }
`;

Footer.defaultProps = {
};

export default Footer;

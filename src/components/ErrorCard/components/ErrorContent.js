import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

const ErrorContent = styled.div`
  align-items: center;
  border: 1px solid ${props => props.theme.COLOR_INTENT_WARNING};
  border-radius: ${parseInt(props => props.theme.RADIUS_05, 10) * 2}px;
  color: ${props => props.theme.COLOR_CONTENT};
  display: inline-flex;
  flex-basis: 600px;
  flex-flow: row nowrap;
  font-size: ${props => props.theme.FONT_SIZE_HERO};
  justify-content: center;
  margin: ${spacingScale(4)};
  padding: ${spacingScale(8)} ${spacingScale(4)};
  padding-top: ${spacingScale(8)};
  padding-bottom: ${spacingScale(8)};
`;

ErrorContent.defaultProps = {
  theme: keen
};

export default ErrorContent;

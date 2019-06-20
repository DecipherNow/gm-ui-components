import styled from "styled-components";
import { keen } from "style/theme";

const ReadoutItemTitle = styled.h2`
  font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
  min-height: 1em;
  display: inline-block;
`;

ReadoutItemTitle.defaultProps = {
  theme: keen
};

export default ReadoutItemTitle;

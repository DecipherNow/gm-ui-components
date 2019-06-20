import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const Fieldset = styled.fieldset`
  border: 1px solid ${({theme}) => theme.COLOR_KEYLINE_DEFAULT};
  padding: ${spacingScale(2)};
  border-radius: ${({theme}) => theme.CORNER_RADIUS_INPUT};
`;

Fieldset.defaultProps = {
  theme: keen
};

export default Fieldset;

import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  padding: ${spacingScale(2)};
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
`;

Fieldset.defaultProps = {
};

export default Fieldset;

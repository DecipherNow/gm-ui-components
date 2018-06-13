import styled from "styled-components";
import { PropTypes } from "prop-types";

import { spacingScale } from "style/styleFunctions";

const SectionContent = styled.div`
  margin: 0 auto;
  padding: ${spacingScale(1)};
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1 0 auto;

  ${props =>
    props.stretchContent &&
    `
    align-items: stretch;
  `};
`;

SectionContent.propTypes = {
  stretchContent: PropTypes.bool
};

export default SectionContent;

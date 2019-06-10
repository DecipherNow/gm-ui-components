import styled from "styled-components";
import PropTypes from "prop-types";

const TableColumn = styled.col`
  width: ${props => props.colWidth};
`;

TableColumn.displayName = "TableColumn";

TableColumn.propTypes = {
  colWidth: PropTypes.string
};

TableColumn.defaultProps = {
  colWidth: undefined
};

export default TableColumn;

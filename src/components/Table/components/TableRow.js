import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { columnItemShape, dataItemShape } from "../types";

import TableCell from "./TableCell";
import { theme } from "style/theme";

const TableRowElement = styled.tr.attrs(() => ({
  tabIndex: 0
}))`
  cursor: pointer;
  position: relative;
  box-shadow: 0 -1px 0 ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};

  /* Give the table row a border when selected */
  ${props =>
    props.isSelected &&
    css`
      background-color: ${({ theme }) =>
        transparentize(
          1 - theme.OPACITY_LIGHTEST,
          theme.COLOR_INTENT_HIGHLIGHT
        )};
      &,
      & + &,
      & + tr {
        box-shadow: none;
      }
      ${props.selectedRowStyle};
    `};
`;

function TableRow({
  data,
  columns,
  isSelected,
  onRowClick,
  rowIndex,
  selectedRowStyle
}) {
  return (
    <TableRowElement
      isSelected={isSelected}
      selectedRowStyle={selectedRowStyle}
      onKeyDown={event => {
        if (event.keyCode === 13) {
          const targetCell = event.target.getAttribute("data-column");
          onRowClick({ clicked: data, rowIndex, event, targetCell });
        }
      }}
      onContextMenu={event => {
        const targetCell = event.target.getAttribute("data-column");
        onRowClick({ clicked: data, rowIndex, event, targetCell });
      }}
      onClick={event => {
        const targetCell = event.target.getAttribute("data-column");
        onRowClick({ clicked: data, rowIndex, event, targetCell });
      }}
    >
      {/* Because the `columns` array determines the desired column order, 
        we need to map through it and use the dataIndex property to pick out 
        the appropriate data for that column */}
      {columns.map(({ dataIndex }) => {
        const cellContent = data[dataIndex];
        return (
          <TableCell key={`${dataIndex}|${data.key}`} data-column={dataIndex}>
            {/* Cell content can be either text or a render prop */}
            {typeof cellContent === "function"
              ? cellContent(dataIndex, data, rowIndex)
              : cellContent}
          </TableCell>
        );
      })}
    </TableRowElement>
  );
}

TableRow.propTypes = {
  columns: PropTypes.arrayOf(columnItemShape),
  data: dataItemShape,
  isRowSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onRowClick: PropTypes.func,
  rowIndex: PropTypes.number,
  selectedRowStyle: PropTypes.object
};

TableRowElement.defaultProps = {
  isRowSelected: false,
  isSelected: false
};

TableRowElement.displayName = "TableRowElement";

export default TableRow;

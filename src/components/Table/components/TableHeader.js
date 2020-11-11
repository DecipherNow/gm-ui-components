import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { columnItemShape } from "../types";
import TableCell from "./TableCell";
import { theme } from "style/theme";

// Use all of TableCell's styles, but with a <th> element instead of <td>
const TableHeaderCell = styled(TableCell.withComponent("th"))`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_DEFAULT};
  text-align: left;
  cursor: pointer;
  border-top: none;
  ${props =>
    props.isSorting &&
    css`
      font-weight: ${({ theme }) => theme.FONT_WEIGHT_SEMIBOLD};
    `};
`;

TableHeaderCell.displayName = "TableHeaderCell";

function TableHeader({ columns, sortDataIndex, onSort }) {
  return (
    <thead>
      <tr>
        {columns.map(({ title, key, dataIndex }) => (
          <TableHeaderCell
            key={key}
            onClick={() => onSort(dataIndex)}
            isSorting={sortDataIndex === dataIndex}
          >
            {typeof title === "function" ? title(dataIndex) : title}
          </TableHeaderCell>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(columnItemShape),
  onSort: PropTypes.func,
  sortDataIndex: PropTypes.string
};

TableHeaderCell.defaultProps = {
};

export default TableHeader;

import React from "../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import Icon from "../Icon";

export default function ItemsFilter(props) {
  return (
    <Icon {...props} glyphName="ItemsFilter">
      <path
        d="M8,6.99999998 L16,6.99999998 C16.5522847,6.99999998 17,7.44771523 17,7.99999998 C17,8.55228473 16.5522847,8.99999998 16,8.99999998 L8,8.99999998 C7.44771525,8.99999998 7,8.55228473 7,7.99999998 C7,7.44771523 7.44771525,6.99999998 8,6.99999998 Z M8,11 L12,11 C12.5522847,11 13,11.4477152 13,12 C13,12.5522847 12.5522847,13 12,13 L8,13 C7.44771525,13 7,12.5522847 7,12 C7,11.4477152 7.44771525,11 8,11 Z M8,15 L9,15 C9.55228475,15 10,15.4477152 10,16 C10,16.5522847 9.55228475,17 9,17 L8,17 C7.44771525,17 7,16.5522847 7,16 C7,15.4477152 7.44771525,15 8,15 Z"
        id="Filter-Items"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

ItemsFilter.displayName = "ItemsFilter";

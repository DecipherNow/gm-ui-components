import React from "react";
import Icon from "../Icon";

export default function ObjectDuplicate(props) {
  return (
    <Icon {...props} glyphName="ObjectDuplicate">
      <path
        d="M8.99999998,6.99999997 L16,6.99999997 C16.5522848,6.99999997 17,7.44771522 17,7.99999997 L17,15 C17,15.5522848 16.5522848,16 16,16 L8.99999998,16 C8.44771523,16 7.99999998,15.5522848 7.99999998,15 L7.99999998,7.99999997 C7.99999998,7.44771522 8.44771523,6.99999997 8.99999998,6.99999997 Z M14.5,17 C14.7761424,17 15,17.2238576 15,17.5 C15,17.7761424 14.7761424,18 14.5,18 L7.99999997,18 C6.89543047,18 5.99999997,17.1045695 5.99999997,16 L5.99999997,9.49999999 C5.99999997,9.22385761 6.2238576,8.99999998 6.49999997,8.99999998 C6.77614235,8.99999998 6.99999998,9.22385761 6.99999998,9.49999999 L6.99999998,16 C6.99999998,16.5522848 7.44771523,17 7.99999998,17 L14.5,17 Z"
        id="Duplicate"
        fillRule="nonzero"
      />
    </Icon>
  );
}

ObjectDuplicate.displayName = "ObjectDuplicate";

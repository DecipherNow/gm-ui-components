import React from "react";

import Icon from "../Icon";

export default function Calendar(props) {
  return (
    <Icon {...props} glyphName="Calendar">
      <path
        d="M17,3.99999997 L19,3.99999997 C19.5522847,3.99999997 20,4.44771522 20,4.99999997 L20,19 C20,19.5522847 19.5522847,20 19,20 L4.99999997,20 C4.44771522,20 3.99999997,19.5522847 3.99999997,19 L3.99999997,4.99999997 C3.99999997,4.44771522 4.44771522,3.99999997 4.99999997,3.99999997 L6.99999998,3.99999997 L6.99999998,5.49999997 C6.99999998,5.77614234 7.22385761,5.99999998 7.49999998,5.99999998 C7.77614235,5.99999998 7.99999998,5.77614234 7.99999998,5.49999997 L7.99999998,3.99999997 L16,3.99999997 L16,5.49999997 C16,5.77614234 16.2238576,5.99999998 16.5,5.99999998 C16.7761424,5.99999998 17,5.77614234 17,5.49999997 L17,3.99999997 Z M5.74999997,7.99999998 C5.61192878,7.99999998 5.49999997,8.11192879 5.49999997,8.24999998 L5.49999997,18.25 C5.49999997,18.3880712 5.61192878,18.5 5.74999997,18.5 L18.25,18.5 C18.3880712,18.5 18.5,18.3880712 18.5,18.25 L18.5,8.24999998 C18.5,8.11192879 18.3880712,7.99999998 18.25,7.99999998 L5.74999997,7.99999998 Z M9.26562499,16 L9.26562499,11.65625 L9.19140624,11.65625 L7.83203123,12.5742188 L7.83203123,11.3398438 L9.26562499,10.3632812 L10.6992188,10.3632812 L10.6992188,16 L9.26562499,16 Z M12.4492188,16 L14.7890625,11.5390625 L14.7890625,11.4648438 L12.03125,11.4648438 L12.03125,10.359375 L16.2265625,10.359375 L16.2265625,11.46875 L13.9492188,16 L12.4492188,16 Z"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

Calendar.displayName = "Calendar";

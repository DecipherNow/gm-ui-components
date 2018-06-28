import React from "react";
import Icon from "../Icon";

export default function List(props) {
  return (
    <Icon {...props} glyphName="List">
      <path
        d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z M9,5.5 L19,5.5 C19.5522847,5.5 20,5.94771525 20,6.5 L20,6.5 C20,7.05228475 19.5522847,7.5 19,7.5 L9,7.5 C8.44771525,7.5 8,7.05228475 8,6.5 L8,6.5 L8,6.5 C8,5.94771525 8.44771525,5.5 9,5.5 Z M9,10.5 L19,10.5 C19.5522847,10.5 20,10.9477153 20,11.5 C20,12.0522847 19.5522847,12.5 19,12.5 L9,12.5 C8.44771525,12.5 8,12.0522847 8,11.5 C8,10.9477153 8.44771525,10.5 9,10.5 Z M9,15.5 L19,15.5 C19.5522847,15.5 20,15.9477153 20,16.5 C20,17.0522847 19.5522847,17.5 19,17.5 L9,17.5 C8.44771525,17.5 8,17.0522847 8,16.5 C8,15.9477153 8.44771525,15.5 9,15.5 Z"
        id="Combined-Shape"
      />
    </Icon>
  );
}

List.displayName = "List";

import React from "react";
import Icon from "../Icon";

export default function EllipsisHorizontal(props) {
  return (
    <Icon {...props} glyphName="EllipsisHorizontal">
      <path
        d="M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M18,14 C16.8954305,14 16,13.1045695 16,12 C16,10.8954305 16.8954305,10 18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 Z M6,14 C4.8954305,14 4,13.1045695 4,12 C4,10.8954305 4.8954305,10 6,10 C7.1045695,10 8,10.8954305 8,12 C8,13.1045695 7.1045695,14 6,14 Z"
        id="EllipsisHorizontal"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

EllipsisHorizontal.displayName = "EllipsisHorizontal";

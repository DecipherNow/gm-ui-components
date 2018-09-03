import React from "react";
import Icon from "../Icon";

export default function ObjectDownload(props) {
  return (
    <Icon {...props} glyphName="ObjectDownload">
      <path
        d="M11.25,12.1893398 L10.0303301,10.9696699 C9.73743686,10.6767767 9.26256312,10.6767767 8.9696699,10.9696699 C8.67677669,11.2625631 8.67677669,11.7374369 8.9696699,12.0303301 L12,15.0606602 L15.0303301,12.0303301 C15.3232233,11.7374369 15.3232233,11.2625631 15.0303301,10.9696699 C14.7374369,10.6767767 14.2625631,10.6767767 13.9696699,10.9696699 L12.75,12.1893398 L12.75,8.49999998 C12.75,8.08578642 12.4142136,7.74999998 12,7.74999998 C11.5857864,7.74999998 11.25,8.08578642 11.25,8.49999998 L11.25,12.1893398 Z M6.5,6 L17.5,6 C17.7761424,6 18,6.22385763 18,6.5 L18,17.5 C18,17.7761424 17.7761424,18 17.5,18 L6.5,18 C6.22385763,18 6,17.7761424 6,17.5 L6,6.5 C6,6.22385763 6.22385763,6 6.5,6 Z M8.5,16 L15.5,16 C15.7761424,16 16,15.7761424 16,15.5 C16,15.2238576 15.7761424,15 15.5,15 L8.5,15 C8.22385763,15 8,15.2238576 8,15.5 C8,15.7761424 8.22385763,16 8.5,16 Z"
        id="Download-Object"
        fillRule="nonzero"
      />
    </Icon>
  );
}

ObjectDownload.displayName = "ObjectDownload";
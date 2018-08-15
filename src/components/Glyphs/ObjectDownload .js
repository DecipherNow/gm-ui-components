import React from "react"
import Icon from "../Icon";

export default function ObjectDownload(props) {
  return (
    <Icon {...props} glyphName="ObjectDownload">
      <path
        d="M11.25,12.1893398 L10.0303301,10.9696699 C9.73743686,10.6767767 9.26256312,10.6767767 8.9696699,10.9696699 C8.67677669,11.2625631 8.67677669,11.7374369 8.9696699,12.0303301 L12,15.0606602 L15.0303301,12.0303301 C15.3232233,11.7374369 15.3232233,11.2625631 15.0303301,10.9696699 C14.7374369,10.6767767 14.2625631,10.6767767 13.9696699,10.9696699 L12.75,12.1893398 L12.75,7.49999998 C12.75,7.08578642 12.4142136,6.74999998 12,6.74999998 C11.5857864,6.74999998 11.25,7.08578642 11.25,7.49999998 L11.25,12.1893398 Z M5.5,5 L18.5,5 C18.7761424,5 19,5.22385763 19,5.5 L19,18.5 C19,18.7761424 18.7761424,19 18.5,19 L5.5,19 C5.22385763,19 5,18.7761424 5,18.5 L5,5.5 C5,5.22385763 5.22385763,5 5.5,5 Z M8.37500002,16.75 L15.625,16.75 C15.8321068,16.75 16,16.5821068 16,16.375 C16,16.1678932 15.8321068,16 15.625,16 L8.37500002,16 C8.16789323,16 8,16.1678932 8,16.375 C8,16.5821068 8.16789323,16.75 8.37500002,16.75 Z"
        id="Download-Object"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

ObjectDownload.displayName = "ObjectDownload";

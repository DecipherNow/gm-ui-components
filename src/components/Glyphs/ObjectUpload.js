import React from "react"
import Icon from "../Icon";

export default function ObjectUpload(props) {
  return (
    <Icon {...props} glyphName="ObjectUpload">
      <path
        d="M12.75,9.62132033 L13.9696699,10.8409903 C14.2625631,11.1338835 14.7374369,11.1338835 15.0303301,10.8409903 C15.3232233,10.548097 15.3232233,10.0732233 15.0303301,9.78033008 L12,6.74999998 L8.9696699,9.78033008 C8.67677669,10.0732233 8.67677669,10.548097 8.9696699,10.8409903 C9.26256312,11.1338835 9.73743686,11.1338835 10.0303301,10.8409903 L11.25,9.62132033 L11.25,14 C11.25,14.4142136 11.5857864,14.75 12,14.75 C12.4142136,14.75 12.75,14.4142136 12.75,14 L12.75,9.62132033 Z M5.5,5 L18.5,5 C18.7973841,5 19,5.20261591 19,5.5 L19,18.5 C19,18.7973841 18.7973841,19 18.5,19 L5.5,19 C5.20261591,19 5,18.7973841 5,18.5 L5,5.5 C5,5.20261591 5.20261591,5 5.5,5 Z M8.37500002,16.75 L15.625,16.75 C15.8321068,16.75 16,16.5821068 16,16.375 L16,16.375 C16,16.1678932 15.8321068,16 15.625,16 L8.37500002,16 C8.16789323,16 8,16.1678932 8,16.375 L8,16.375 C8,16.5821068 8.16789323,16.75 8.37500002,16.75 Z"
        id="Upload-Object"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

ObjectUpload.displayName = "ObjectUpload";

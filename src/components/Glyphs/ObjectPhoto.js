import React from "react"
import Icon from "../Icon";

export default function ObjectPhoto(props) {
  return (
    <Icon {...props} glyphName="ObjectPhoto">
      <path
        d="M5.5,5 L18.5,5 C18.7761424,5 19,5.22385763 19,5.5 L19,18.5 C19,18.7761424 18.7761424,19 18.5,19 L5.5,19 C5.22385763,19 5,18.7761424 5,18.5 L5,5.5 C5,5.22385763 5.22385763,5 5.5,5 Z M14.5,11 C15.3284271,11 16,10.3284271 16,9.49999999 C16,8.67157287 15.3284271,7.99999999 14.5,7.99999999 C13.6715729,7.99999999 13,8.67157287 13,9.49999999 C13,10.3284271 13.6715729,11 14.5,11 Z M8.8083908,12.6334377 C8.7203849,12.5644782 8.61180543,12.5270049 8.5,12.5270049 C8.22385763,12.5270049 8,12.7508625 8,13.0270049 L8,15.5 C8,15.7761424 8.22385763,16 8.5,16 L15.5,16 C15.7761424,16 16,15.7761424 16,15.5 L16,13.8525775 C16,13.6411639 15.8670324,13.4525989 15.6678939,13.3816087 L14.4209744,12.937099 C14.3009315,12.8943053 14.1690782,12.8989654 14.052356,12.9501271 L11.222488,14.1905142 C11.0538733,14.2644214 10.8582849,14.2396908 10.7133727,14.1261407 L8.8083908,12.6334377 Z"
        id="Object-Photo"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

ObjectPhoto.displayName = "ObjectPhoto";

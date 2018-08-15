import React from "react"
import Icon from "../Icon";

export default function Pencil(props) {
  return (
    <Icon {...props} glyphName="Pencil">
      <path
        d="M18.1464466,8.14644659 L15.8535534,5.85355336 C15.6582913,5.65829122 15.6582913,5.34170873 15.8535534,5.14644658 L16.5,4.49999997 C17.3284271,3.67157285 18.6715729,3.67157285 19.5,4.49999997 C20.3284271,5.32842709 20.3284271,6.67157286 19.5,7.49999998 L18.8535534,8.14644659 C18.6582913,8.34170874 18.3417088,8.34170874 18.1464466,8.14644659 Z M17.1464466,9.85355338 L9.07256954,17.9274305 C9.02468895,17.9753111 8.96758179,18.0129673 8.90471149,18.0381154 L4.27080567,19.8916778 C4.20670773,19.9173169 4.13396142,19.8861399 4.10832225,19.822042 C4.0964017,19.7922406 4.0964017,19.7589957 4.10832225,19.7291943 L5.96188458,15.0952885 C5.9870327,15.0324182 6.02468894,14.9753111 6.07256953,14.9274305 L14.1464466,6.85355337 C14.3417088,6.65829122 14.6582913,6.65829122 14.8535534,6.85355337 L17.1464466,9.1464466 C17.3417088,9.34170874 17.3417088,9.65829123 17.1464466,9.85355338 Z"
        id="Pencil"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

Pencil.displayName = "Pencil";

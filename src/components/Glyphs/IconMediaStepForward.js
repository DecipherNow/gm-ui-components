import React from "react"
import Icon from "../Icon";

export default function StepForward(props) {
  return (
    <Icon {...props} glyphName="StepForward">
      <path
        d="M5.61837937,6.05992507 L14.8097958,11.6650971 C14.9991777,11.7805873 15.0568398,12.0241491 14.9385874,12.2091076 C14.9060125,12.2600579 14.8619638,12.3030777 14.8097947,12.3348916 L5.61837824,17.9400226 C5.42899588,18.0555122 5.17960923,17.9991962 5.06135756,17.8142374 C5.02125949,17.7515196 5,17.6790652 5,17.605125 L5,6.39482196 C5,6.17676781 5.18099544,6 5.40426465,6 C5.47997365,6 5.55416128,6.02076317 5.61837937,6.05992507 Z M17.3333333,5.99999997 L18.6666667,5.99999997 C18.8507616,5.99999997 19,6.20147184 19,6.44999997 L19,17.55 C19,17.7985281 18.8507616,18 18.6666667,18 L17.3333333,18 C17.1492384,18 17,17.7985281 17,17.55 L17,6.44999997 C17,6.20147184 17.1492384,5.99999997 17.3333333,5.99999997 Z"
        id="Play"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

StepForward.displayName = "StepForward";

import React from "react"
import Icon from "../Icon";

export default function Person(props) {
  return (
    <Icon {...props} glyphName="Person">
      <path
        d="M16.1301861,19 L7.76204426,19.0000209 C7.46557305,19.0000209 7.17280987,18.93411 6.90494228,18.8070583 C5.63498074,18.2047055 4.99999997,17.6023528 4.99999997,17 C4.99999997,14.1789286 9.66455696,12.5714286 9.66455696,12.5714286 C9.66455696,12.5714286 10.2620134,12.411007 10.2597743,12.0883195 C10.2575352,11.7656321 9.91074745,11.6047008 9.66455696,11.5 C8.68383386,10.8357143 8.56372152,9.79642856 8.49841772,7.21428569 C8.70015981,4.62892854 10.6755997,3.99999997 11.9968355,3.99999997 C13.3180712,3.99999997 15.2935111,4.62785711 15.4952532,7.21428569 C15.4299494,9.79642856 15.309837,10.8357143 14.3291139,11.5 C14.1138073,11.6251657 13.7433774,11.8369473 13.7433774,12.0883195 C13.7433774,12.3396917 14.3291139,12.5714286 14.3291139,12.5714286 C14.3291139,12.5714286 19,14.2940214 19,17 C19,17.4135985 18.3841269,17.9866137 17.1523806,18.7190458 C16.8431239,18.9029388 16.4899865,19 16.1301861,19 Z"
        id="Person"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

Person.displayName = "Person";
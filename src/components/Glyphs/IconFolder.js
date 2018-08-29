import React from "react"
import Icon from "../Icon";

export default function Folder(props) {
  return (
    <Icon {...props} glyphName="Folder">
      <path
        d="M3.99999997,6.99999998 L3.99999997,6.49999998 C3.99999997,6.22385761 4.2238576,5.99999998 4.49999997,5.99999998 L8.19098299,5.99999998 C8.38036901,5.99999998 8.55350058,6.10700117 8.63819659,6.27639318 L8.74999999,6.49999998 C8.90321651,6.80643301 9.21641444,6.99999998 9.55901698,6.99999998 L19.5,6.99999998 C19.7761424,6.99999998 20,7.22385761 20,7.49999998 L20,16.5 C20,16.7761424 19.7761424,17 19.5,17 L4.49999997,17 C4.2238576,17 3.99999997,16.7761424 3.99999997,16.5 L3.99999997,6.99999998 Z"
        id="Folder"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

Folder.displayName = "Folder";

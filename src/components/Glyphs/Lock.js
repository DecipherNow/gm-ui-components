import React from "react"
import Icon from "../Icon";

export default function Lock(props) {
  return (
    <Icon {...props} glyphName="Lock">
      <path
        d="M6.99999998,9.49999999 L17,9.49999999 C17.2761424,9.49999999 17.5,9.72385761 17.5,9.99999999 L17.5,18 C17.5,18.2761424 17.2761424,18.5 17,18.5 L6.99999998,18.5 C6.7238576,18.5 6.49999998,18.2761424 6.49999998,18 L6.49999998,9.99999999 C6.49999998,9.72385761 6.7238576,9.49999999 6.99999998,9.49999999 Z M9.24999999,7.99999998 C9.24999999,8.41421355 8.91421355,8.74999999 8.49999999,8.74999999 C8.08578642,8.74999999 7.74999998,8.41421355 7.74999998,7.99999998 C7.74999998,5.6527898 9.65278982,3.74999997 12,3.74999997 C14.3472102,3.74999997 16.25,5.6527898 16.25,7.99999998 C16.25,8.41421355 15.9142136,8.74999999 15.5,8.74999999 C15.0857865,8.74999999 14.75,8.41421355 14.75,7.99999998 C14.75,6.48121693 13.5187831,5.24999997 12,5.24999997 C10.4812169,5.24999997 9.24999999,6.48121693 9.24999999,7.99999998 Z"
        id="Lock"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

Lock.displayName = "Lock";

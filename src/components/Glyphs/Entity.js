import React from "react";
import Icon from "../Icon";

export default function Entity(props) {
  return (
    <Icon {...props} glyphName="Entity">
      <path
        d="M17.4796447,15.9339913 C17.4864244,15.9360725 17.4932095,15.9381339 17.5,15.9401757 L17.5,18.0810194 C15.6666667,18.6936731 13.8333333,19 12,19 C10.1666667,19 8.33333331,18.6936731 6.49999998,18.0810194 L6.49999998,15.9401757 C8.49369315,15.3407226 10.0254527,13.0393285 10.2522255,10.1970395 C10.7845989,10.4362718 11.3764731,10.5695852 12,10.5695852 C12.6235269,10.5695852 13.2154011,10.4362718 13.7477745,10.1970395 C13.9367939,12.5661414 15.0324581,14.5594545 16.5465628,15.5046278 C16.0622171,15.7618425 15.549056,15.9890816 15.0070795,16.1863449 C14.1628617,16.4936151 13.2143943,16.7406511 12.1616775,16.9274529 C13.1125421,16.8928286 14.0680025,16.7833194 15.0280586,16.5989254 C15.9256756,16.4265239 16.742871,16.2048792 17.4796447,15.9339913 Z M12,3.49999996 C13.7086309,3.49999996 15.09375,4.83530231 15.09375,6.48248122 C15.09375,8.12966013 13.7086309,9.46496248 12,9.46496248 C10.2913691,9.46496248 8.90624999,8.12966013 8.90624999,6.48248122 C8.90624999,4.83530231 10.2913691,3.49999996 12,3.49999996 Z"
        id="Entity"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

Entity.displayName = "Entity";
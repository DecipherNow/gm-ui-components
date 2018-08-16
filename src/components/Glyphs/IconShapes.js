import React from "react"
import Icon from "../Icon";

export default function Shapes(props) {
  return (
    <Icon {...props} glyphName="Shapes">
      <path
        d="M10.7787629,8 L13.5,8 C13.7761424,8 14,8.22385763 14,8.5 L14,13.5 C14,13.7761424 13.7761424,14 13.5,14 L8.5,14 C8.22385763,14 8,13.7761424 8,13.5 L8,10.539542 L10.5796601,10.539542 C10.7714117,10.539542 10.9591203,10.4844116 11.1204176,10.3807204 C11.5849877,10.0820683 11.7194907,9.46335442 11.4208385,8.99878438 L10.7787629,8 Z M12.0354444,15 L14,15 C14.5522847,15 15,14.5522847 15,14 L15,12.0354444 C15.1633015,12.012086 15.3302393,12 15.5,12 C17.4329966,12 19,13.5670034 19,15.5 C19,17.4329966 17.4329966,19 15.5,19 C13.5670034,19 12,17.4329966 12,15.5 C12,15.3302393 12.012086,15.1633015 12.0354444,15 Z M6.57490357,4.61842062 L3.90656907,8.76916317 C3.75724298,9.0014482 3.82449449,9.31080512 4.05677951,9.46013121 C4.13742818,9.51197678 4.2312825,9.53954197 4.32715831,9.53954197 L9.66382731,9.53954197 C9.93996968,9.53954197 10.1638273,9.31568435 10.1638273,9.03954197 C10.1638273,8.94366616 10.1362621,8.84981184 10.0844165,8.76916317 L7.41608204,4.61842062 C7.26675596,4.38613559 6.95739903,4.31888409 6.72511401,4.46821017 C6.66486269,4.50694317 6.61363656,4.55816929 6.57490357,4.61842062 Z"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

Shapes.displayName = "Shapes";

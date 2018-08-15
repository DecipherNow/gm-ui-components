import React from "react";
import Icon from "../Icon";

export default function FileStar(props) {
  return (
    <Icon {...props} glyphName="FileStar">
      <path
        d="M6.49999997,3.99999997 L16,3.99999997 L18,5.99999997 L18,19.5 C18,19.7761424 17.7761424,20 17.5,20 L6.49999997,20 C6.2238576,20 5.99999997,19.7761424 5.99999997,19.5 L5.99999997,4.49999997 C5.99999997,4.22385759 6.2238576,3.99999997 6.49999997,3.99999997 Z M12.2773439,13.0292972 L13.5839843,14.1308594 L14.2695312,12.9414062 L12.6464845,12.3554686 L14.2695312,11.7753906 L13.5839844,10.5859374 L12.2597653,11.7109375 L12.5761718,9.99999999 L11.1933594,9.99999999 L11.5097655,11.7109375 L10.1855469,10.5859375 L9.5,11.7753906 L11.1230467,12.3554687 L9.49999996,12.9414062 L10.1855469,14.1308594 L11.4921873,13.0292971 L11.1933593,14.7167969 L12.5761719,14.7167969 L12.2773439,13.0292972 Z"
        id="File-*"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

FileStar.displayName = "FileStar";

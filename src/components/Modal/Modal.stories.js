import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";

import Modal from "./Modal";

const stories = storiesOf("Components|Modal", module);

stories
  .add(
    "Default",
    () => {
      return (
        <Modal/>
      );
    },
    {
      info: {
        text:
          "Indicates the status of a content area. Provides text style and graphics for 'Indeterimate', 'Error', 'Warning', 'Success, and 'Info' states. Message and detail are optional, but recommended to inform the user."
      }
    }
  );

import React from "react";
import styled from 'styled-components';
import { storiesOf } from "@storybook/react";

import NativeDialogButtonOrder from "./NativeDialogButtonOrder";

const Wrap = styled.div`
  display: flex;
`;

const Space = styled.span`
  display: inline-block;
  block-size: 1rem;
  inline-size: 2rem;
`;

const stories = storiesOf("Components|NativeDialogButtonOrder", module);

stories.add(
  "Automatic Positioning",
  () => {
    return (
      <Wrap>
        <NativeDialogButtonOrder>
          <input type="submit" disabled value="Reset" />
          <Space />
          <input type="submit" value="OK" />
          <input type="submit" value="Cancel" />
        </NativeDialogButtonOrder>
      </Wrap>
    );
  },
  {
    info: {
      text:
        "Positions button children according to OS guidlines, e.g OK/Cancel (Windows), Cancel/OK (macOS)."
    }
  }
).add(
  "Explicit Positioning",
  () => {
    return (
      <Wrap>
        <NativeDialogButtonOrder auto={false}>
          <input type="submit" disabled value="Reset" />
          <Space />
          <input type="submit" data-dialog-position="ok" value="OK" />
          <input type="submit" data-dialog-position="cancel" value="Cancel" />
        </NativeDialogButtonOrder>
      </Wrap>
    );
  },
  {
    info: {
      text:
        "Disable `auto` and provide `data-dialog-position='ok'` or 'cancel to buttons for more control."
    }
  }
);

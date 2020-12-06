import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

import Status from "./Status";
import { IconLock } from "components/Glyphs";

const stories = storiesOf("Components|Status", module);

const statusOptions = ["indeterminate", "error", "info", "warning", "success"];

const CustomGraphic = styled.div`
  border-radius: 10000px;
  background-color: currentColor;
  box-shadow: inset 0 2px 12px -4px rgba(255, 255, 255, 0.75),
    0 8px 12px -8px currentColor;
  padding: ${spacingScale(0.5)};
  margin: ${spacingScale(1)};
`;

const CustomGraphicElement = (
  <CustomGraphic>
    <IconLock stroke="#fff" borderWidth="1.5px" />
  </CustomGraphic>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
  padding: ${spacingScale(4)};

  > * {
    margin: 0.5rem;
    background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
    color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
    border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_DEFAULT};
  }
`;

stories
  .add(
    "Default",
    () => {
      return (
        <Status
          isBlock={boolean("isBlock")}
          statusType={select("statusType", statusOptions)}
          message={text("message")}
          detail={text("detail")}
        />
      );
    },
    {
      info: {
        text:
          "Indicates the status of a content area. Provides text style and graphics for 'Indeterimate', 'Error', 'Warning', 'Success, and 'Info' states. Message and detail are optional, but recommended to inform the user."
      }
    }
  )
  .add(
    "Typical",
    () => {
      return (
        <Grid>
          <Status
            isBlock={false}
            statusType="indeterminate"
            message="Initiating Self-Destruct..."
          />
          <Status
            isBlock={false}
            statusType="error"
            message="Emergency Destruction System"
          />
          <Status
            isBlock={false}
            statusType="warning"
            message="Failsafe Warning"
          />
          <Status
            isBlock={false}
            statusType="info"
            message="Scuttle Procedure"
          />
          <Status
            isBlock={false}
            statusType="success"
            message="Self-Destruct Canceled!"
          />

          <Status
            isBlock={false}
            statusType="indeterminate"
            message="Initiating Self-Destruct..."
            detail="Failsafe system will not engage if safety interlocks are disengaged."
          />
          <Status
            isBlock={false}
            statusType="error"
            message="Emergency Destruction System"
            detail="On activation ship will detonate in t-minus 10 minutes."
          />
          <Status
            isBlock={false}
            statusType="warning"
            message="Failsafe Warning"
            detail="Cut-off system will not operate after T minus 5 minutes."
          />
          <Status
            isBlock={false}
            statusType="info"
            message="Scuttle Procedure"
            detail="Input NUCLEAR BOLD CODE no. 1.
          Verify BOLD CLAMP release."
          />
          <Status
            isBlock={false}
            statusType="success"
            message="Self-Destruct Canceled!"
            detail="Cut-off system successfully engaged."
          />

          <Status
            isBlock={true}
            statusType="indeterminate"
            message="Initiating Self-Destruct..."
          />
          <Status
            isBlock={true}
            statusType="error"
            message="Emergency Destruction System"
          />
          <Status
            isBlock={true}
            statusType="warning"
            message="Failsafe Warning"
          />
          <Status
            isBlock={true}
            statusType="info"
            message="Scuttle Procedure"
          />
          <Status
            isBlock={true}
            statusType="success"
            message="Self-Destruct Canceled!"
          />

          <Status
            isBlock={true}
            statusType="indeterminate"
            message="Initiating Self-Destruct..."
            detail="Failsafe system will not engage if safety interlocks are disengaged."
          />
          <Status
            isBlock={true}
            statusType="error"
            message="Emergency Destruction System"
            detail="On activation ship will detonate in t-minus 10 minutes."
          />
          <Status
            isBlock={true}
            statusType="warning"
            message="Failsafe Warning"
            detail="Cut-off system will not operate after T minus 5 minutes."
          />
          <Status
            isBlock={true}
            statusType="info"
            message="Scuttle Procedure"
            detail="Input NUCLEAR BOLD CODE no. 1.
            Verify BOLD CLAMP release.
            Perform INSERTION of BOLD no. 1 in HOLD no. 1.
            Remove NUCLEAR HEAD.
            Activate PUSH BUTTON INSERTION.
            Replace NUCLEAR HEAD, verify SECURED.
            Verify DETONATION CODE ACTIVATED.
            Repeat for HOLDS 2, 3, & 4."
          />
          <Status
            isBlock={true}
            statusType="success"
            message="Self-Destruct Canceled!"
            detail="Cut-off system successfully engaged."
          />
        </Grid>
      );
    },
    {
      info: {
        text:
          "Indicates the status of a content area. Provides text style and graphics for 'Indeterimate', 'Error', 'Warning', and 'Info' states. Message and detail are optional, but recommended to inform the user."
      }
    }
  )
  .add(
    "Custom Graphic",
    () => {
      return (
        <Status
          isBlock={boolean("isBlock", false)}
          statusType={select("statusType", statusOptions, "success")}
          graphic={CustomGraphicElement}
          message={text("message", "System Locked")}
          detail={text("detail", "Log out successful.")}
        />
      );
    },
    {
      info: {
        text:
          "Use the `graphic` prop to provide custom graphic content to the component. Make sure to still select an appropriate `statusType`."
      }
    }
  );

import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean, object } from "@storybook/addon-knobs";

import Tooltip from "./Tooltip";

const stories = storiesOf("Components|Tooltip", module);

stories
  .add(
    "Default",
    () => {
      return (
        <Tooltip
          content={text("content", "Content")}
          position={select("position", [
            "auto",
            "auto-start",
            "auto-end",
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "right",
            "right-start",
            "right-end",
            "left",
            "left-start",
            "left-end"
          ])}
          hideTooltip={boolean("hideTooltip")}
          tooltipStyle={object("tooltipStyle")}
        >
          {text("children", "Hover over me")}
        </Tooltip>
      );
    },
    {
      info: {
        text: "A tooltip form input with a label."
      }
    }
  )
  .add(
    "Typical",
    () => {
      return (
        <Tooltip
          content={text("content", "Lorem ipsum dolor sit amet")}
          position={select("position", ["bottom", "right", "top", "left"])}
          hideTooltip={boolean("hideTooltip")}
          tooltipStyle={object("tooltipStyle")}
        >
          {text("children", "Hover over me")}
        </Tooltip>
      );
    },
    {
      info: {
        text: "A tooltip form input with a label."
      }
    }
  )
  .add(
    "Longer content",
    () => {
      return (
        <Tooltip
          content={text(
            "content",
            "Lorem ipsum dolor sit amet donec consectatur adispacing"
          )}
          position={select("position", ["top", "right", "bottom", "left"])}
          hideTooltip={boolean("hideTooltip")}
          tooltipStyle={object("tooltipStyle")}
        >
          {text("children", "Hover over me")}
        </Tooltip>
      );
    },
    {
      info: {
        text: "A tooltip form input with a label."
      }
    }
  );

import React from "react";
import { storiesOf } from "@storybook/react";

import { text, boolean } from "@storybook/addon-knobs";

import Collapse from "./Collapse";

const stories = storiesOf("Components|Collapse", module);

const style = {
  height: "300px",
  width: "100%",
  textAlign: "center",
  backgroundColor: "lightgrey"
};

stories
  .add(
    "default",
    () => {
      return (
        <>
          <Collapse title="Collapse Title" detail="Detail text">
            <div style={style}>Collapse content</div>
          </Collapse>
        </>
      );
    },
    {
      info: {
        text: "A single collapse section that is uncontrolled."
      }
    }
  )
  .add(
    "controlled",
    () => {
      return (
        <Collapse
          title={text("title", "Collapse Title")}
          detail={text("detail", "Detail text")}
          isOpen={boolean("isOpen", true)}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          <div style={style}>Collapse content</div>
        </Collapse>
      );
    },
    {
      info: {
        text:
          "A single collapse section controlled using the isOpen and onClick props."
      }
    }
  )
  .add(
    "multiple",
    () => {
      return (
        <>
          <Collapse title="Collapse Title" detail="Detail text">
            <div style={style}>Collapse content</div>
          </Collapse>
          <Collapse title="Collapse Title" detail="Detail text">
            <div style={style}>Collapse content</div>
          </Collapse>
          <Collapse title="Collapse Title" detail="Detail text">
            <div style={style}>Collapse content</div>
          </Collapse>
        </>
      );
    },
    {
      info: {
        text: "A collection of collapse sections."
      }
    }
  );

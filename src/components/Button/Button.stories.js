import React from "react";

import { storiesOf } from "@storybook/react";
import { number, select, text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import { IconBell } from "components/Glyphs";
import Button from "./Button";

const wrapperStyle = {
  display: "flex",
  width: "100vw",
  justifyContent: "space-around",
  height: "100vh",
  alignItems: "center"
};

const types = ["default", "danger", "info", "primary", "warning"];
const sizes = ["normal", "xs", "sm", "lg", "xl"];
const orientations = ["vertical", "horizontal"];

storiesOf("Components/Buttons", module)
  .add(
    "Button",
    withInfo(
      "A React component that renders a button and includes base styling, used to trigger actions."
    )(() => (
      <div style={wrapperStyle}>
        <Button
          active={boolean("active", false)}
          label={text("label", "Hello World")}
          type={select("type", types, "default")}
          disabled={boolean("disabled", false)}
          clickAction={() => alert("clicked")}
          orientation={select("orientation", orientations, "horizontal")}
          outline={boolean("outline", false)}
          prefix={text("prefix")}
          suffix={text("suffix")}
          size={select("size", sizes, "normal")}
          tabIndex={number("tabIndex", 0)}
        />
      </div>
    ))
  )
  .add("Button Types", () => (
    <div style={wrapperStyle}>
      {types.map(type => (
        <Button type={type} label={type} key={type} clickAction={() => {}} />
      ))}
    </div>
  ))
  .add("Button Sizes", () => (
    <div style={wrapperStyle}>
      {sizes.map(size => (
        <Button size={size} label={size} key={size} clickAction={() => {}} />
      ))}
    </div>
  ))
  .add("Button Orientations", () => (
    <div style={wrapperStyle}>
      {orientations.map(orientation => (
        <Button
          orientation={orientation}
          label={orientation}
          clickAction={() => {}}
          key={orientation}
        >
          <IconBell size="25px" />
        </Button>
      ))}
    </div>
  ));

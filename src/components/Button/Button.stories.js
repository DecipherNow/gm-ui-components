/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { number, select, text, color, boolean } from "@storybook/addon-knobs";
import withPropsCombinations from "react-storybook-addon-props-combinations";

import { IconBell } from "components/Glyphs";
import Button from "./Button";
import copy from "copy-to-clipboard";
import Tooltip from "components/Tooltip";

const stories = storiesOf("Components|Buttons", module);

const types = ["default", "danger", "info", "primary", "warning"];
const sizes = ["xs", "sm", "normal", "lg", "xl"];
const orientations = ["vertical", "horizontal"];

stories
  .add(
    "Default",
    () => (
      <Button
        active={boolean("active")}
        label={text("label", "Hello World")}
        dangerouslySetColor={color("dangerouslySetColor")}
        type={select("type", types, "default")}
        disabled={boolean("disabled", false)}
        clickAction={() => alert("clicked")}
        orientation={select("orientation", orientations, "horizontal")}
        outline={boolean("outline", false)}
        size={select("size", sizes, "normal")}
        tabIndex={number("tabIndex")}
      />
    ),
    {
      info: {
        text:
          "A React component that renders a button and includes base styling, used to trigger actions."
      }
    }
  )
  .add(
    "Props Gallery",
    withPropsCombinations(
      Button,
      {
        type: types,
        active: [false, true],
        outline: [false, true],
        disabled: [false, true],
        size: sizes,
        label: ["Label"]
      },
      {
        showSource: false,
        style: {
          float: "left",
          margin: "0.25rem"
        },
        CombinationRenderer: ({ Component, props, options }) => {
          const prettyJSON = JSON.stringify(props).split(",").join("\n");
          return (
            <Tooltip content={prettyJSON}>
              <Component
                {...props}
                title="Click to copy props"
                style={options.style}
                onClick={() => copy(JSON.stringify(props))}
              />
            </Tooltip>
          );
        }
      }
    ),
    {
      info: {
        text:
          "All Button types, active states, disabled states, sizes, and outline states."
      }
    }
  )
  .add(
    "Types",
    () => (
      <React.Fragment>
        {types.map(type => (
          <Button type={type} label={type} key={type} clickAction={() => {}} />
        ))}
      </React.Fragment>
    ),
    {
      info: {
        text: "Demonstrating Button types."
      }
    }
  )
  .add(
    "Sizes",
    () => (
      <React.Fragment>
        {sizes.map(size => (
          <Button size={size} label={size} key={size} clickAction={() => {}} />
        ))}
      </React.Fragment>
    ),
    {
      info: {
        text: "Demonstrating Button sizes."
      }
    }
  )
  .add(
    "Orientations",
    () => (
      <React.Fragment>
        {orientations.map(orientation => (
          <Button
            orientation={orientation}
            label={orientation}
            clickAction={() => {}}
            key={orientation}
          >
            <IconBell />
          </Button>
        ))}
      </React.Fragment>
    ),
    {
      info: {
        text: "Demonstrating Button orientations."
      }
    }
  );

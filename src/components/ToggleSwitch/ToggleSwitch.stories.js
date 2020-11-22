import React from "react";
import { storiesOf } from "@storybook/react";
import { color, text, boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { theme } from "style/theme";
import ToggleSwitch from "./ToggleSwitch";

const Wrap = styled.div`
  margin-bottom: 10px;
`;

const stories = storiesOf("Components|ToggleSwitch", module);

const labelPositionOptions = ["top", "left", "right", "bottom"];

const TypicalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    padding-top: ${spacingScale(1)};
    padding-bottom: ${spacingScale(1)};
    border-top: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  }
`;

stories
  .add(
    "Default",
    () => {
      const groupIdContainer = "Story";
      const groupIdComponent = "ToggleSwitch";
      return (
        <div
          style={{
            fontSize: text(
              "Font size of surrounding area",
              "",
              groupIdContainer
            )
          }}
        >
          <ToggleSwitch
            color={color("color", "", groupIdComponent)}
            innerLabelOff={text("innerLabelOff", "", groupIdComponent)}
            innerLabelOn={text("innerLabelOn", "", groupIdComponent)}
            disabled={boolean("disabled", "", groupIdComponent)}
            label={text("label", "Toggle Switch Label", groupIdComponent)}
            labelPosition={select(
              "labelPosition",
              labelPositionOptions,
              "right",
              groupIdComponent
            )}
          />
        </div>
      );
    },
    {
      info: {
        text:
          "A toggle switch for user controls that have immediate results. See https://www.nngroup.com/articles/toggle-switch-guidelines/ for details on when to use ToggleSwitches instead of checkboxes."
      }
    }
  )
  .add(
    "Sizes",
    () => {
      return (
        <>
          <Wrap style={{ fontSize: "0.5em" }}>
            <ToggleSwitch
              color={color("color")}
              innerLabelOff={text("innerLabelOff", "off")}
              innerLabelOn={text("innerLabelOn", "on")}
              disabled={boolean("disabled")}
              label="With 0.5em wrapper"
              labelPosition={select(
                "labelPosition",
                labelPositionOptions,
                "right"
              )}
            />
          </Wrap>
          <Wrap>
            <ToggleSwitch
              color={color("color")}
              innerLabelOff={text("innerLabelOff", "off")}
              innerLabelOn={text("innerLabelOn", "on")}
              disabled={boolean("disabled")}
              label="Default size"
              labelPosition={select(
                "labelPosition",
                labelPositionOptions,
                "right"
              )}
            />
          </Wrap>
          <Wrap style={{ fontSize: "2em" }}>
            <ToggleSwitch
              color={color("color")}
              innerLabelOff={text("innerLabelOff", "off")}
              innerLabelOn={text("innerLabelOn", "on")}
              disabled={boolean("disabled")}
              label="With 2em wrapper"
              labelPosition={select(
                "labelPosition",
                labelPositionOptions,
                "right"
              )}
            />
          </Wrap>
        </>
      );
    },
    {
      info: {
        text:
          "Toggle Switches inherit the font size of their container. Note: Form labels do not inherit the size of their container."
      }
    }
  )
  .add(
    "Typical",
    () => {
      return (
        <TypicalWrapper>
          <ToggleSwitch
            label={text("label", "Toggle Switch Label")}
            color={theme.COLOR_INTENT_DANGER}
          />
          <ToggleSwitch
            color={color("color")}
            innerLabelOff={text("innerLabelOff", "")}
            innerLabelOn={text("innerLabelOn", "")}
            disabled={boolean("disabled")}
            label={text("label", "Toggle Switch Label")}
            labelPosition={select(
              "labelPosition",
              labelPositionOptions,
              "right"
            )}
          />
          <ToggleSwitch
            color={color("color")}
            innerLabelOff={text("innerLabelOff", "")}
            innerLabelOn={text("innerLabelOn", "")}
            disabled={boolean("disabled")}
            label={text("label", "Toggle Switch Label")}
            labelPosition={select(
              "labelPosition",
              labelPositionOptions,
              "right"
            )}
          />
        </TypicalWrapper>
      );
    },
    {
      info: {
        text:
          "Toggle switches in a list of controls, where one causes a dangerous action."
      }
    }
  );

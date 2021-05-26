import React from "react";
import { storiesOf } from "@storybook/react";
import { color, text, boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";
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
            isDisabled={boolean("isDisabled", false)}
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
              isDisabled={boolean("isDisabled", false)}
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
              isDisabled={boolean("isDisabled", false)}
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
              isDisabled={boolean("isDisabled", false)}
              label="With 2em wrapper"
              labelPosition={select(
                "labelPosition",
                labelPositionOptions,
                "right"
              )}
            >
              With 2em wrapper
            </ToggleSwitch>
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
            color={keen.COLOR_INTENT_DANGER}
          />
          <ToggleSwitch
            color={color("color")}
            innerLabelOff={text("innerLabelOff", "")}
            innerLabelOn={text("innerLabelOn", "")}
            isDisabled={boolean("isDisabled", false)}
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
            isDisabled={boolean("isDisabled", false)}
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
  )
  .add(
    "Controlled, default selected",
    () => {
      return (
        <TypicalWrapper>
          <ToggleSwitch
            color={color("color")}
            isSelected={boolean("isSelected", true)}
            innerLabelOff={text("innerLabelOff", "")}
            innerLabelOn={text("innerLabelOn", "")}
            isDisabled={boolean("isDisabled", false)}
            labelPosition={select(
              "labelPosition",
              labelPositionOptions,
              "right"
            )}
          >
            {text("label", "Toggle Switch Label")}
          </ToggleSwitch>
        </TypicalWrapper>
      );
    },
    {
      info: {
        text:
          "Toggle switches in a list of controls, where one causes a dangerous action."
      }
    }
  )
  .add(
    "Uncontrolled, default selected",
    () => {
      return (
        <TypicalWrapper>
          <ToggleSwitch
            color={color("color")}
            defaultSelected={true}
            innerLabelOff={text("innerLabelOff", "")}
            innerLabelOn={text("innerLabelOn", "")}
            isDisabled={boolean("isDisabled", false)}
            labelPosition={select(
              "labelPosition",
              labelPositionOptions,
              "right"
            )}
          >
            {text("label", "Toggle Switch Label")}
          </ToggleSwitch>
        </TypicalWrapper>
      );
    },
    {
      info: {
        text:
          "Toggle switches in a list of controls, where one causes a dangerous action."
      }
    }
  )
  .add(
    "Child as Label",
    () => {
      return (
        <TypicalWrapper>
          <ToggleSwitch
            color={color("color")}
            innerLabelOff={text("innerLabelOff", "")}
            innerLabelOn={text("innerLabelOn", "")}
            isDisabled={boolean("isDisabled", false)}
            labelPosition={select(
              "labelPosition",
              labelPositionOptions,
              "right"
            )}
          >
            {text("label", "Toggle Switch Label")}
          </ToggleSwitch>
        </TypicalWrapper>
      );
    },
    {
      info: {
        text:
          "Toggle switches in a list of controls, where one causes a dangerous action."
      }
    }
  )
  .add(
    "Test with no child and aria-label",
    () => {
      return (
        <TypicalWrapper>
          <ToggleSwitch
            // label="Toggle Switch Label"
            color={color("color")}
            innerLabelOff={text("innerLabelOff", undefined)}
            innerLabelOn={text("innerLabelOn", undefined)}
            isDisabled={boolean("isDisabled", false)}
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

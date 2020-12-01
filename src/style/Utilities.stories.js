import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { color } from "@storybook/addon-knobs";

import * as c from "../components/util/color";

const stories = storiesOf("Overview|Utils", module);

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

const TestDiv = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  border-radius: 1em;
  display: flex;
  place-content: center;
  border: 1px solid;
  align-items: center;
  color: ${props => c.readableColor(props.color)};
`;

const TestHueDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to right,
    ${props => c.setHue(props.color, 30)},
    ${props => c.setHue(props.color, 60)},
    ${props => c.setHue(props.color, 90)},
    ${props => c.setHue(props.color, 120)},
    ${props => c.setHue(props.color, 150)},
    ${props => c.setHue(props.color, 180)},
    ${props => c.setHue(props.color, 210)},
    ${props => c.setHue(props.color, 240)},
    ${props => c.setHue(props.color, 270)},
    ${props => c.setHue(props.color, 300)},
    ${props => c.setHue(props.color, 330)},
    ${props => c.setHue(props.color, 360)}
  );
`;

const TestChromaDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to right,
    ${props => c.setChroma(props.color, 0)},
    ${props => c.setChroma(props.color, 0.25)},
    ${props => c.setChroma(props.color, 0.5)},
    ${props => c.setChroma(props.color, 0.75)},
    ${props => c.setChroma(props.color, 1)}
  );
`;

const TestLightnessDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to right,
    ${props => c.setLightness(props.color, 0)},
    ${props => c.setLightness(props.color, 0.25)},
    ${props => c.setLightness(props.color, 0.5)},
    ${props => c.setLightness(props.color, 0.75)},
    ${props => c.setLightness(props.color, 1)}
  );
`;

const TestOpacityDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to right,
    ${props => c.setOpacity(props.color, 0)},
    ${props => c.setOpacity(props.color, 0.25)},
    ${props => c.setOpacity(props.color, 0.5)},
    ${props => c.setOpacity(props.color, 0.75)},
    ${props => c.setOpacity(props.color, 1)}
  );
`;

stories.add("Color", () => {
  let testColor = color("color", "blue");
  return (
    <Wrap>
      <TestHueDiv color={testColor}>hue rotation</TestHueDiv>
      <TestChromaDiv color={testColor}>chroma scale</TestChromaDiv>
      <TestLightnessDiv color={testColor}>lightness scale</TestLightnessDiv>
      <TestOpacityDiv color={testColor}>opacity scale</TestOpacityDiv>
    </Wrap>
  );
});

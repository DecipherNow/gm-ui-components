import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { color } from "@storybook/addon-knobs";
import { lch, cubehelix, hsl } from 'd3-color';

import * as c from "../components/util/color";

const stories = storiesOf("Overview|Utils", module);

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;
  place-content: center;
`;

const Heading = styled.h2`
  margin: 0;

  &:not(:first-child){
    margin: 4rem 0 0;
  }
`;

const TestDiv = styled.figure`
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  border-radius: 1em;
  display: flex;
  place-content: center;
  box-shadow: 0 0 4px -2px;
  align-items: center;
  position: relative;
  color: ${props => c.readableColor(props.color)};

  figcaption {
    position: absolute;
    top: calc(100% + 0.5rem);
    color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  }
`;

const TestHueDiv = styled(TestDiv)`
  border-radius: 1000em;
  width: 12rem;
  height: 12rem;

  &:after {
    content: '';
    z-index: 10;
    font-size: 6em;
    width: 1em;
    height: 1em;
    border-radius: inherit;
    position: absolute;
    top: 50%;
    background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
    box-shadow: inset 0 0 4px -2px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  background-image: conic-gradient(
    ${props => c.setHue(props.color, 0, props.colorSpace)},
    ${props => c.setHue(props.color, 30, props.colorSpace)},
    ${props => c.setHue(props.color, 60, props.colorSpace)},
    ${props => c.setHue(props.color, 90, props.colorSpace)},
    ${props => c.setHue(props.color, 120, props.colorSpace)},
    ${props => c.setHue(props.color, 150, props.colorSpace)},
    ${props => c.setHue(props.color, 180, props.colorSpace)},
    ${props => c.setHue(props.color, 210, props.colorSpace)},
    ${props => c.setHue(props.color, 240, props.colorSpace)},
    ${props => c.setHue(props.color, 270, props.colorSpace)},
    ${props => c.setHue(props.color, 300, props.colorSpace)},
    ${props => c.setHue(props.color, 330, props.colorSpace)},
    ${props => c.setHue(props.color, 360, props.colorSpace)}
  );
`;

const TestChromaDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to right,
    ${props => c.setSaturation(props.color, 0, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.25, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.5, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.75, props.colorSpace)},
    ${props => c.setSaturation(props.color, 1, props.colorSpace)}
  );
`;

const TestLightnessDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to right,
    ${props => c.setBrightness(props.color, 0, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.25, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.5, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.75, props.colorSpace)},
    ${props => c.setBrightness(props.color, 1, props.colorSpace)}
  );
`;

const TestOpacityDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to left,
    ${props => c.setOpacity(props.color, 0, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.25, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.5, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.75, props.colorSpace)},
    ${props => c.setOpacity(props.color, 1, props.colorSpace)}
  );
`;

stories.add("Color", () => {
  let testColor = color("color", "#4A90E2");
  return (
    <>
      <Heading>HCL</Heading>
      <Wrap>
        <TestHueDiv color={testColor} colorSpace={lch}><figcaption>hue circle</figcaption></TestHueDiv>
        <TestChromaDiv color={testColor} colorSpace={lch}><figcaption>saturation scale</figcaption></TestChromaDiv>
        <TestLightnessDiv color={testColor} colorSpace={lch}><figcaption>brightness scale</figcaption></TestLightnessDiv>
      </Wrap>
      <Heading>cubehelix</Heading>
      <Wrap>
        <TestHueDiv color={testColor} colorSpace={cubehelix}><figcaption>hue circle</figcaption></TestHueDiv>
        <TestChromaDiv color={testColor} colorSpace={cubehelix}><figcaption>saturation scale</figcaption></TestChromaDiv>
        <TestLightnessDiv color={testColor} colorSpace={cubehelix}><figcaption>brightness scale</figcaption></TestLightnessDiv>
      </Wrap>
      <Heading>HSL</Heading>
      <Wrap>
        <TestHueDiv color={testColor} colorSpace={hsl}><figcaption>hue circle</figcaption></TestHueDiv>
        <TestChromaDiv color={testColor} colorSpace={hsl}><figcaption>saturation scale</figcaption></TestChromaDiv>
        <TestLightnessDiv color={testColor} colorSpace={hsl}><figcaption>brightness scale</figcaption></TestLightnessDiv>
      </Wrap>
    </>
  );
});

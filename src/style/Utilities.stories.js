import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { color, number, select } from "@storybook/addon-knobs";
import { lch, cubehelix, hsl } from 'd3-color';

import * as c from "../components/util/color";

const stories = storiesOf("Utilities|Color", module);

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
  width: 11rem;
  height: 11rem;
  margin: 0;

  &:after {
    content: '';
    z-index: 10;
    font-size: 4em;
    width: 1em;
    height: 1em;
    border-radius: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
    box-shadow: inset 0 0 4px -2px;
    transform: translate(-50%, -50%);
  }
  &:before {
    content: '';
    z-index: 9;
    height: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
    transform: translate(-50%,0) scaleX(0.75);
  }

  background-image: conic-gradient(
    ${props => c.adjustHue(props.color, 0, props.colorSpace)},
    ${props => c.adjustHue(props.color, 30, props.colorSpace)},
    ${props => c.adjustHue(props.color, 60, props.colorSpace)},
    ${props => c.adjustHue(props.color, 90, props.colorSpace)},
    ${props => c.adjustHue(props.color, 120, props.colorSpace)},
    ${props => c.adjustHue(props.color, 150, props.colorSpace)},
    ${props => c.adjustHue(props.color, 180, props.colorSpace)},
    ${props => c.adjustHue(props.color, 210, props.colorSpace)},
    ${props => c.adjustHue(props.color, 240, props.colorSpace)},
    ${props => c.adjustHue(props.color, 270, props.colorSpace)},
    ${props => c.adjustHue(props.color, 300, props.colorSpace)},
    ${props => c.adjustHue(props.color, 330, props.colorSpace)},
    ${props => c.adjustHue(props.color, 360, props.colorSpace)}
  );
`;

const TestChromaDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to right,
    ${props => c.setSaturation(props.color, 0, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.125, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.25, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.375, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.5, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.625, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.75, props.colorSpace)},
    ${props => c.setSaturation(props.color, 0.875, props.colorSpace)},
    ${props => c.setSaturation(props.color, 1, props.colorSpace)}
  );
`;

const TestLightnessDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to right,
    ${props => c.setBrightness(props.color, 0, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.125, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.25, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.375, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.5, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.625, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.75, props.colorSpace)},
    ${props => c.setBrightness(props.color, 0.875, props.colorSpace)},
    ${props => c.setBrightness(props.color, 1, props.colorSpace)}
  );
`;

const TestOpacityDiv = styled(TestDiv)`
  background-image: linear-gradient(
    to left,
    ${props => c.setOpacity(props.color, 0, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.125, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.25, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.375, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.5, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.625, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.75, props.colorSpace)},
    ${props => c.setOpacity(props.color, 0.875, props.colorSpace)},
    ${props => c.setOpacity(props.color, 1, props.colorSpace)}
  );
`;

const PaletteWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  place-items: center;
  place-content: center;
`;

const PaletteItem = styled.div`
  width: 4em;
  height: 4em;
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
  background: ${props => props.color};
`;

const Swatch = ({ color }) => {
  const title =
    "h: " + c.getHue(color) +
    "\ns: " + c.getSaturation(color) +
    "\nb: " + c.getBrightness(color);

  return (<PaletteItem color={color} title={title} />);
}

const PaletteName = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  letter-spacing: 0.03em;
  width: 7em;
  text-align: left;
  align-self: flex-start;
  justify-self: center;
`;

const ColorPalette = ({ sourceColor, colorSpace }) => {
  sourceColor = c.matchHue('#00b42b', sourceColor, colorSpace);
  var infoColor = c.matchHue('#1E6DF6', sourceColor, colorSpace);
  var warningColor = c.matchHue('#F7CD45', sourceColor, colorSpace);
  var dangerColor = c.matchHue('#D83D22', sourceColor, colorSpace);
  return (
    <PaletteWrap>
      <PaletteName>{colorSpace.name}</PaletteName>
      <Swatch color={sourceColor} />
      <Swatch color={infoColor} />
      <Swatch color={warningColor} />
      <Swatch color={dangerColor} />
    </PaletteWrap>
  )
}

stories.add("Color", () => {
  let controlColorSpace = select('controlcolorspace', [lch, cubehelix], lch);
  let testHue = number("base hue", 270, { range: true, min: 0, max: 360 });
  let testSat = number("base saturation", 0.5, { range: true, min: 0, max: 1, step: 0.005 });
  let testBri = number("base brightness", 0.5, { range: true, min: 0, max: 1, step: 0.005 });
  let testColor = c.color(testHue, testSat, testBri, controlColorSpace);

  return (
    <>
      <ColorPalette
        sourceColor={testColor}
        colorSpace={lch}
      />
      <hr />
      <ColorPalette
        sourceColor={testColor}
        colorSpace={cubehelix}
      />
      <hr />
      <ColorPalette
        sourceColor={testColor}
        colorSpace={hsl}
      />
      <Heading>LCH</Heading>
      <Wrap>
        <TestHueDiv color={testColor} colorSpace={lch}><figcaption>hue</figcaption></TestHueDiv>
        <TestChromaDiv color={testColor} colorSpace={lch}><figcaption>saturation</figcaption></TestChromaDiv>
        <TestLightnessDiv color={testColor} colorSpace={lch}><figcaption>brightness</figcaption></TestLightnessDiv>
      </Wrap>
      <Heading>cubehelix</Heading>
      <Wrap>
        <TestHueDiv color={testColor} colorSpace={cubehelix}><figcaption>hue</figcaption></TestHueDiv>
        <TestChromaDiv color={testColor} colorSpace={cubehelix}><figcaption>saturation</figcaption></TestChromaDiv>
        <TestLightnessDiv color={testColor} colorSpace={cubehelix}><figcaption>brightness</figcaption></TestLightnessDiv>
      </Wrap>
      <Heading>HSL</Heading>
      <Wrap>
        <TestHueDiv color={testColor} colorSpace={hsl}><figcaption>hue</figcaption></TestHueDiv>
        <TestChromaDiv color={testColor} colorSpace={hsl}><figcaption>saturation</figcaption></TestChromaDiv>
        <TestLightnessDiv color={testColor} colorSpace={hsl}><figcaption>brightness</figcaption></TestLightnessDiv>
      </Wrap>
    </>
  );
});

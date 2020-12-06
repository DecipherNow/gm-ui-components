import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { color, number, select } from "@storybook/addon-knobs";
import { lch, cubehelix, hsl } from "d3-color";

import * as c from "../components/util/color";

const stories = storiesOf("Utilities|Color", module);

const Story = styled.div`
  width: 40rem;
  max-width: 100%;
`;

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;
  place-content: center;
`;

const HR = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
`;

const Heading = styled.h2`
  margin: 0;

  &:not(:first-child) {
    margin: 4rem 0 0;
  }
`;

const Title = styled.h1`
  margin: 0;

  &:not(:first-child) {
    margin: 4rem 0 0;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  }

  > * {
    float: right;
    font-size: 1rem;
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
    content: "";
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
    content: "";
    z-index: 9;
    height: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
    transform: translate(-50%, 0) scaleX(0.75);
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

const TestSaturationDiv = styled(TestDiv).attrs(props => ({
  title:
    "min: " +
    c.getSaturation(c.setSaturation(props.color, 0, props.colorSpace)) +
    "\nmax: " +
    c.getSaturation(c.setSaturation(props.color, 1, props.colorSpace))
}))`
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

const TestLightnessDiv = styled(TestDiv).attrs(props => ({
  title:
    "min: " +
    c.getBrightness(c.setBrightness(props.color, 0, props.colorSpace)) +
    "\nmax: " +
    c.getBrightness(c.setBrightness(props.color, 1, props.colorSpace))
}))`
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
    "h: " +
    c.getHue(color) +
    "\ns: " +
    c.getSaturation(color) +
    "\nb: " +
    c.getBrightness(color);

  return <PaletteItem color={color} title={title} />;
};

const PaletteName = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  letter-spacing: 0.03em;
  width: 7em;
  text-align: left;
  align-self: center;
  justify-self: center;
`;

const MatchedPalette = ({ sourceColor, colorSpace }) => {
  sourceColor = c.matchHue("#00b42b", sourceColor, colorSpace);
  var infoColor = c.matchHue("#1E6DF6", sourceColor, colorSpace);
  var warningColor = c.matchHue("#F7CD45", sourceColor, colorSpace);
  var dangerColor = c.matchHue("#D83D22", sourceColor, colorSpace);
  return (
    <PaletteWrap>
      <PaletteName>{colorSpace.name}</PaletteName>
      <Swatch color={sourceColor} />
      <Swatch color={infoColor} />
      <Swatch color={warningColor} />
      <Swatch color={dangerColor} />
    </PaletteWrap>
  );
};

const Test = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  code {
    color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  }

  output {
  }
`;

const FunctionExample = ({ color, funcName, amount }) => {
  let func = null;

  switch (funcName) {
    case "setHue":
      func = c.setHue;
      break;
    case "setSaturation":
      func = c.setSaturation;
      break;
    case "setBrightness":
      func = c.setBrightness;
      break;
    case "setOpacity":
      func = c.setOpacity;
      break;
    case "adjustHue":
      func = c.adjustHue;
      break;
    case "adjustSaturation":
      func = c.adjustSaturation;
      break;
    case "adjustBrightness":
      func = c.adjustBrightness;
      break;
    case "adjustOpacity":
      func = c.adjustOpacity;
      break;
    default:
      func = c.adjustBrightness;
  }

  const resultColor = func(color, amount);
  return (
    <>
      <PaletteWrap>
        <PaletteName>
          {funcName + "(" + color + ", " + amount + ")"}
        </PaletteName>
        <Swatch color={resultColor} />
      </PaletteWrap>
    </>
  );
};

stories
  .add("Palettes", () => {
    return (
      <Story>
        <Title>Palettes</Title>
        <PaletteWrap>
          <PaletteName>Before</PaletteName>
          <Swatch color="#00b42b" />
          <Swatch color="#1E6DF6" />
          <Swatch color="#F7CD45" />
          <Swatch color="#D83D22" />
        </PaletteWrap>
        <HR />
        <MatchedPalette sourceColor="#00b42b" colorSpace={lch} />
        <HR />
        <MatchedPalette sourceColor="#00b42b" colorSpace={cubehelix} />
        <HR />
        <MatchedPalette sourceColor="#00b42b" colorSpace={hsl} />
      </Story>
    );
  })
  .add("Scales", () => {
    let controlColorSpace = select("controlcolorspace", [lch, cubehelix], lch);
    let testHue = number("base hue", 270, { range: true, min: 0, max: 360 });
    let testSat = number("base saturation", 0.5, {
      range: true,
      min: 0,
      max: 1,
      step: 0.005
    });
    let testBri = number("base brightness", 0.5, {
      range: true,
      min: 0,
      max: 1,
      step: 0.005
    });
    let testColor = c.color(testHue, testSat, testBri, controlColorSpace);

    return (
      <Story>
        <Title>
          Scales
          <Swatch color={testColor} />
        </Title>
        <Heading>LCH</Heading>
        <Wrap>
          <TestHueDiv color={testColor} colorSpace={lch}>
            <figcaption>hue</figcaption>
          </TestHueDiv>
          <TestSaturationDiv color={testColor} colorSpace={lch}>
            <figcaption>saturation</figcaption>
          </TestSaturationDiv>
          <TestLightnessDiv color={testColor} colorSpace={lch}>
            <figcaption>brightness</figcaption>
          </TestLightnessDiv>
        </Wrap>
        <Heading>cubehelix</Heading>
        <Wrap>
          <TestHueDiv color={testColor} colorSpace={cubehelix}>
            <figcaption>hue</figcaption>
          </TestHueDiv>
          <TestSaturationDiv color={testColor} colorSpace={cubehelix}>
            <figcaption>saturation</figcaption>
          </TestSaturationDiv>
          <TestLightnessDiv color={testColor} colorSpace={cubehelix}>
            <figcaption>brightness</figcaption>
          </TestLightnessDiv>
        </Wrap>
        <Heading>HSL</Heading>
        <Wrap>
          <TestHueDiv color={testColor} colorSpace={hsl}>
            <figcaption>hue</figcaption>
          </TestHueDiv>
          <TestSaturationDiv color={testColor} colorSpace={hsl}>
            <figcaption>saturation</figcaption>
          </TestSaturationDiv>
          <TestLightnessDiv color={testColor} colorSpace={hsl}>
            <figcaption>brightness</figcaption>
          </TestLightnessDiv>
        </Wrap>
      </Story>
    );
  })
  .add("Functions", () => {
    const col = "#00b42b";
    return (
      <Story>
        <Heading>setOpacity()</Heading>
        <FunctionExample color={col} funcName="setOpacity" amount={0.15} />
        <FunctionExample color={col} funcName="setOpacity" amount={0.5} />
        <FunctionExample color={col} funcName="setOpacity" amount={1.85} />
        <Heading>setHue()</Heading>
        <FunctionExample color={col} funcName="setHue" amount={90} />
        <FunctionExample color={col} funcName="setHue" amount={180} />
        <FunctionExample color={col} funcName="setHue" amount={270} />
        <FunctionExample color={col} funcName="setHue" amount={360} />
        <Heading>setSaturation()</Heading>
        <FunctionExample color={col} funcName="setSaturation" amount={0} />
        <FunctionExample color={col} funcName="setSaturation" amount={0.25} />
        <FunctionExample color={col} funcName="setSaturation" amount={0.5} />
        <FunctionExample color={col} funcName="setSaturation" amount={0.75} />
        <FunctionExample color={col} funcName="setSaturation" amount={1} />
        <Heading>setBrightness()</Heading>
        <FunctionExample color={col} funcName="setBrightness" amount={0} />
        <FunctionExample color={col} funcName="setBrightness" amount={0.25} />
        <FunctionExample color={col} funcName="setBrightness" amount={0.5} />
        <FunctionExample color={col} funcName="setBrightness" amount={0.75} />
        <FunctionExample color={col} funcName="setBrightness" amount={1} />
        <Heading>adjustHue()</Heading>
        <FunctionExample color={col} funcName="adjustHue" amount={-180} />
        <FunctionExample color={col} funcName="adjustHue" amount={-90} />
        <FunctionExample color={col} funcName="adjustHue" amount={0} />
        <FunctionExample color={col} funcName="adjustHue" amount={90} />
        <FunctionExample color={col} funcName="adjustHue" amount={180} />
        <Heading>adjustSaturation()</Heading>
        <FunctionExample color={col} funcName="adjustSaturation" amount={-1} />
        <FunctionExample
          color={col}
          funcName="adjustSaturation"
          amount={-0.25}
        />
        <FunctionExample color={col} funcName="adjustSaturation" amount={0} />
        <FunctionExample color={col} funcName="adjustSaturation" amount={0.5} />
        <FunctionExample color={col} funcName="adjustSaturation" amount={1} />
        <Heading>adjustBrightness()</Heading>
      </Story>
    );
  })
  .add("Utilities", () => {
    const baseNumber = 5;
    const baseColor = "#00b42b";

    return (
      <Story>
        <Heading>lerp()</Heading>
        <Test>
          <code>c.lerp(0, 100, 0.5)</code>
          <output>{c.lerp(0, 100, 0.5)}</output>
        </Test>
        <Heading>lerpValueInPropertyRange()</Heading>
        <Test>
          <code>lerpValueInPropertyRange(0, 'c', lch)</code>
          <output>{c.lerpValueInPropertyRange(0, "c", lch)}</output>
        </Test>
        <Test>
          <code>lerpValueInPropertyRange(1, 'c', lch)</code>
          <output>{c.lerpValueInPropertyRange(1, "c", lch)}</output>
        </Test>
        <Test>
          <code>lerpValueInPropertyRange(0.5, 'c', lch)</code>
          <output>{c.lerpValueInPropertyRange(0.5, "c", lch)}</output>
        </Test>
        <Test>
          <code>lerpValueInPropertyRange(0.5, 'l', lch)</code>
          <output>{c.lerpValueInPropertyRange(0.5, "l", lch)}</output>
        </Test>
        <Test>
          <code>lerpValueInPropertyRange(0.5, 's', cubehelix)</code>
          <output>{c.lerpValueInPropertyRange(0.5, "s", cubehelix)}</output>
        </Test>
        <Test>
          <code>lerpValueInPropertyRange(0.5, 'l', cubehelix)</code>
          <output>{c.lerpValueInPropertyRange(0.5, "l", cubehelix)}</output>
        </Test>
        <Test>
          <code>lerpValueInPropertyRange(0.5, 'h', cubehelix)</code>
          <output>{c.lerpValueInPropertyRange(0.5, "h", cubehelix)}</output>
        </Test>
        <Heading>clamp()</Heading>
        <Test>
          <code>clamp(5, 0, 10)</code>
          <output>{c.clamp(5, 0, 10)}</output>
        </Test>
        <Test>
          <code>clamp(100, 0, 10)</code>
          <output>{c.clamp(100, 0, 10)}</output>
        </Test>
        <Test>
          <code>clamp(-100, 0, 10)</code>
          <output>{c.clamp(-100, 0, 10)}</output>
        </Test>
        <Heading>saturationProperty()</Heading>
        <Test>
          <code>saturationProperty(lch)</code>
          <output>{c.saturationProperty(lch)}</output>
        </Test>
        <Test>
          <code>saturationProperty('lch')</code>
          <output>{c.saturationProperty("lch")}</output>
        </Test>
        <Test>
          <code>saturationProperty(hsl)</code>
          <output>{c.saturationProperty(hsl)}</output>
        </Test>
        <Test>
          <code>saturationProperty('hsl')</code>
          <output>{c.saturationProperty("hsl")}</output>
        </Test>
        <Test>
          <code>saturationProperty(cubehelix)</code>
          <output>{c.saturationProperty(cubehelix)}</output>
        </Test>
        <Test>
          <code>saturationProperty('cubehelix')</code>
          <output>{c.saturationProperty("cubehelix")}</output>
        </Test>
        <Heading>colorify()</Heading>
        <Test>
          <code>colorify('#00b42b').toString()</code>
          <output>{c.colorify("#00b42b").toString()}</output>
        </Test>
        <Heading>adjustProperty()</Heading>
        <Test>
          <code>colorify('#00b42b').toString()</code>
          <output>{c.colorify("#00b42b").toString()}</output>
        </Test>
      </Story>
    );
  });

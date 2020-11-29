import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select, boolean, text } from "@storybook/addon-knobs";
import styled from 'styled-components';

import maskImage from './legend.svg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
  grid-gap: 1rem;
  place-items: center;
  place-content: center;
`;

import Progress from "./Progress";

const CustomProgress = styled(Progress)`
  font-size: 10em;
  background-color: #00b42b;
  border: 0;
  color: #fff;
  --circle-width: 2px;
`;

const CustomProgress2 = styled(Progress)`
  --fill-color: currentColor;
  --background-color: #fff;
  --background-opacity: 0.25;

  border: 0;
  height: 0;
  --image-width: 300;
  --image-height: 82;
  padding-top: calc(var(--image-height) / var(--image-width) * 100%);
  width: 50%;
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-image: url(${maskImage});
`;

const Wrapper = styled.div`
  --width: 16;
  --height: 9;
  --padding-top: calc(var(--height) / var(--width) * 100%);
  --cool-color: hsl(56, 100%, 95%);
  height: 0;
  padding-top: var(--padding-top);
  width: 100%;
  background: black;
  color: var(--cool-color);
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_DEFAULT};
  display: flex;
  align-self: stretch;
  justify-self: stretch;
  /* padding-bottom: 0.5rem; */
  padding-right: 1em;
  place-items: flex-end;
  place-content: flex-end;
  background-image: linear-gradient(to bottom, currentColor, currentColor 34%, #000 30%);
  position: relative;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 28%;
    left: 5%;
    height: 0.25em;
    opacity: 0.8;
    width: 5%;
    background: #000;
    border-radius: 100em;
  }

  &:before {
    top: 37%;
    width: 40%;
    height: 0.125em;
    background: var(--cool-color);
  }
`;

const stories = storiesOf("Components|Progress", module);

stories.add(
  "Default",
  () => {
    return (
      <Progress
        value={number("value", 0.5)}
        max={number("max", 1)}
        shape={select('shape', ['bar', 'pie', 'circle'], 'bar')}
        reverse={boolean('reverse', false)}
      />
    );
  },
  {
    info: {
      text:
        "Progress takes the browser's default progress element and extends it with additional states and styles, particularly the 'Pie' alternate shape. Mind the provided CSS Variables: --circle - width, --fill- color, etc."
    }
  }
).add(
  "Pie",
  () => {
    return (
      <Progress
        value={text("value", 0.35)}
        shape={select('shape', ['bar', 'pie', 'circle'], 'pie')}
      />
    );
  },
).add(
  "Circle",
  () => {
    return (
      <Progress
        value={text("value", 0.35)}
        shape={select('shape', ['bar', 'pie', 'circle'], 'circle')}
      />
    );
  },
).add(
  "Variations",
  () => {
    let demoValue = number("value", 0.5, { range: true, min: 0, max: 1, step: 0.05 });

    return (
      <Grid>
        <Progress value={demoValue} />
        <Progress value={demoValue} style={{ border: 0, color: "#00b42b", width: '10em', height: '0.5em' }} />
        <Progress />
        <Progress style={{ border: 0, color: "#00b42b", width: '10em', height: '0.5em' }} />
        <Progress value={demoValue} shape='pie' style={{ fontSize: '10em' }} />
        <Progress shape='circle' style={{
          fontSize: '10em',
          color: 'rebeccapurple',
          '--circle-width': '8px'
        }} />
        <Progress
          shape='circle'
          style={{
            fontSize: '10em',
            backgroundColor: 'rgba(0,0,0,0.08)',
            border: 'none',
            '--fill-color': '#007aff',
            '--circle-width': '4px'
          }}
        />
        <Progress
          reverse
          shape='pie'
          style={{
            fontSize: '10em',
            backgroundColor: 'rgba(0,0,0,0.08)',
            border: 'none',
            '--fill-opacity': 0.5,
            '--fill-color': '#007aff',
            '--circle-width': '4px'
          }}
        />
        <CustomProgress shape="circle" />
        <Wrapper>
          <CustomProgress2 value={demoValue} />
        </Wrapper>
      </Grid>
    );
  },
);

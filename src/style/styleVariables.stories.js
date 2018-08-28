import React from "react";
import { readableColor } from "polished";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import {
  FONT_SIZE_BASE,
  FONT_SIZE_HERO,
  FONT_SIZE_MD,
  FONT_SIZE_LG,
  FONT_SIZE_SM,
  FONT_SIZE_TITLE,
  FONT_SIZE_XS,
  FONT_STACK_BASE,
  FONT_STACK_BRAND,
  FONT_STACK_CODE,
  FONT_WEIGHT_BASE,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_SEMIBOLD,
  COLOR_BACKGROUND_A,
  COLOR_BACKGROUND_B,
  COLOR_BACKGROUND_C,
  COLOR_BRAND_A,
  COLOR_BRAND_B,
  COLOR_INTENT_DANGER,
  COLOR_INTENT_HIGHLIGHT,
  COLOR_INTENT_INFO,
  COLOR_INTENT_SUCCESS,
  COLOR_INTENT_WARNING,
  COLOR_KEYLINE,
  COLOR_KEYLINE_SOLID,
  OPACITY_100,
  OPACITY_70,
  OPACITY_50,
  OPACITY_15,
  RADIUS_05,
  RADIUS_1,
  RADIUS_2,
  RADIUS_3,
  RADIUS_4,
  RADIUS_5,
  RADIUS_6,
  RADIUS_7,
  RADIUS_8
} from "style/styleVariables";
import { spacingScale } from "./styleFunctions";

const stories = storiesOf("Style Variables", module);

const DemoItem = styled.div.attrs({
  title: props => props.demoVarName
})`
  background: transparent;
  border-radius: ${RADIUS_1};
  margin: ${spacingScale(1)};
  font-size: ${FONT_SIZE_SM};
  border: 1px solid #fff;
  box-shadow: 0 0 0 1px ${COLOR_KEYLINE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:after {
    content: '${props => props.demoVarName}';
    margin-top: ${spacingScale(1)};
    font-family: ${FONT_STACK_BASE};
    font-size: ${FONT_SIZE_SM};
    opacity: ${OPACITY_70};
  }
`;

const DemoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: ${FONT_STACK_BASE};

  &:before { 
    content: '${props => props.name}';
    display: block;
    flex: 0 0 100%;
    margin: ${spacingScale(1)};
    user-select: text;
    font-size: ${FONT_SIZE_HERO};
    font-weight: ${FONT_WEIGHT_SEMIBOLD};
    opacity: ${OPACITY_70};
  }

  &:not(:first-of-type) {
    margin-top: ${spacingScale(24)};
  }
`;

const DemoSubSection = DemoSection.extend`
  margin-top: ${spacingScale(4)};
  flex: 0 0 100%;

  &:before {
    font-size: ${FONT_SIZE_MD};
    font-weight: ${FONT_WEIGHT_BOLD};
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  &:not(:first-of-type) {
    margin-top: ${spacingScale(6)};
  }
`;

const ColorDemo = DemoItem.extend`
  background-color: ${props => props.demoVar};
  color: ${props => readableColor(props.demoVar)};
  height: ${spacingScale(6)};
  width: ${spacingScale(22)};

  &:after {
    font-weight: ${FONT_WEIGHT_BOLD};
    opacity: ${OPACITY_70};
    margin: ${spacingScale(0.25)};
  }
`;

const ColorLineDemo = ColorDemo.extend`
  align-items: stretch;
  background-color: transparent;

  &:before {
    content: "";
    border-top: 1px solid ${props => props.demoVar};
    margin: ${spacingScale(1)} ${spacingScale(2)} ${spacingScale(1)};
  }

  &:after {
    color: #000;
    margin: 0;
  }
`;

const FontDemo = DemoItem.extend`
  font-family: ${props => props.demoVar};
  padding: ${spacingScale(1)};
  flex: 0 0 100%;
  align-items: stretch;
  justify-content: flex-start;
  text-align: left;

  &:before {
    content: "The quick brown fox jumps over the lazy dog";
    font-size: ${FONT_SIZE_TITLE};
  }
`;

const FontSizeDemo = FontDemo.extend`
  font-family: ${FONT_STACK_BASE};

  &:before {
    font-size: ${props => props.demoVar};
  }
`;

const FontWeightDemo = FontDemo.extend`
  &:before {
    margin-top: ${spacingScale(1)};
    font-size: ${FONT_SIZE_BASE};
    font-weight: ${props => props.demoVar};
  }
`;

const RadiusDemo = DemoItem.extend`
  height: ${spacingScale(14)};
  width: ${spacingScale(11)};

  &:before {
    content: "";
    border: 1px solid ${COLOR_BRAND_A};
    border-width: 1px 1px 0 0;
    height: ${spacingScale(8)};
    width: ${spacingScale(8)};
    border-top-right-radius: ${props => props.demoVar};
  }
`;

const OpacityDemo = DemoItem.extend`
  height: ${spacingScale(12)};
  width: ${spacingScale(10)};

  &:before {
    content: "";
    height: ${spacingScale(6)};
    width: ${spacingScale(6)};
    border-radius: ${RADIUS_05};
    background: ${COLOR_BRAND_A};
    opacity: ${props => props.demoVar};
  }
`;

const SpacingDemo = DemoItem.extend`
  height: ${spacingScale(10)};
  width: ${spacingScale(14)};

  &:before {
    content: "";
    height: ${spacingScale(0.5)};
    border: 1px solid ${COLOR_BRAND_A};
    border-top: 0;
    width: ${props => props.demoVar};
  }
`;

stories.addDecorator(withKnobs).add("Style Variables", () => (
  <div>
    <DemoSection name="Layout">
      <DemoSubSection name="Spacing">
        <SpacingDemo
          demoVar={spacingScale(0.25)}
          demoVarName={"spacingScale(0.25)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <SpacingDemo
          demoVar={spacingScale(0.5)}
          demoVarName={"spacingScale(0.5)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <SpacingDemo
          demoVar={spacingScale(1)}
          demoVarName={"spacingScale(1)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <SpacingDemo
          demoVar={spacingScale(1.5)}
          demoVarName={"spacingScale(1.5)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <SpacingDemo
          demoVar={spacingScale(2)}
          demoVarName={"spacingScale(2)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <SpacingDemo
          demoVar={spacingScale(3)}
          demoVarName={"spacingScale(3)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <SpacingDemo
          demoVar={spacingScale(4)}
          demoVarName={"spacingScale(4)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <SpacingDemo
          demoVar={spacingScale(5)}
          demoVarName={"spacingScale(5)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <SpacingDemo
          demoVar={spacingScale(6)}
          demoVarName={"spacingScale(6)"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
      <DemoSubSection name="Opacity">
        <OpacityDemo
          demoVar={OPACITY_100}
          demoVarName={"OPACITY_100"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <OpacityDemo
          demoVar={OPACITY_70}
          demoVarName={"OPACITY_70"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <OpacityDemo
          demoVar={OPACITY_50}
          demoVarName={"OPACITY_50"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <OpacityDemo
          demoVar={OPACITY_15}
          demoVarName={"OPACITY_15"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
      <DemoSubSection name="Rounding">
        <RadiusDemo
          demoVar={RADIUS_05}
          demoVarName={"RADIUS_05"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <RadiusDemo
          demoVar={RADIUS_1}
          demoVarName={"RADIUS_1"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <RadiusDemo
          demoVar={RADIUS_2}
          demoVarName={"RADIUS_2"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <RadiusDemo
          demoVar={RADIUS_3}
          demoVarName={"RADIUS_3"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <RadiusDemo
          demoVar={RADIUS_4}
          demoVarName={"RADIUS_4"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <RadiusDemo
          demoVar={RADIUS_5}
          demoVarName={"RADIUS_5"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <RadiusDemo
          demoVar={RADIUS_6}
          demoVarName={"RADIUS_6"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <RadiusDemo
          demoVar={RADIUS_7}
          demoVarName={"RADIUS_7"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <RadiusDemo
          demoVar={RADIUS_8}
          demoVarName={"RADIUS_8"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
    </DemoSection>

    <DemoSection name="Colors">
      <DemoSubSection name="Brand Colors">
        <ColorDemo
          demoVar={COLOR_BRAND_A}
          demoVarName={"COLOR_BRAND_A"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <ColorDemo
          demoVar={COLOR_BRAND_B}
          demoVarName={"COLOR_BRAND_B"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
      <DemoSubSection name="Border Colors">
        <ColorLineDemo
          demoVar={COLOR_KEYLINE}
          demoVarName={"COLOR_KEYLINE"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <ColorLineDemo
          demoVar={COLOR_KEYLINE_SOLID}
          demoVarName={"COLOR_KEYLINE_SOLID"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
      <DemoSubSection name="Intent Colors">
        <ColorDemo
          demoVar={COLOR_INTENT_HIGHLIGHT}
          demoVarName={"COLOR_INTENT_HIGHLIGHT"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <ColorDemo
          demoVar={COLOR_INTENT_SUCCESS}
          demoVarName={"COLOR_INTENT_SUCCESS"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <ColorDemo
          demoVar={COLOR_INTENT_INFO}
          demoVarName={"COLOR_INTENT_INFO"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <ColorDemo
          demoVar={COLOR_INTENT_WARNING}
          demoVarName={"COLOR_INTENT_WARNING"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <ColorDemo
          demoVar={COLOR_INTENT_DANGER}
          demoVarName={"COLOR_INTENT_DANGER"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
      <DemoSubSection name="Background Colors">
        <ColorDemo
          demoVar={COLOR_BACKGROUND_A}
          demoVarName={"COLOR_BACKGROUND_A"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <ColorDemo
          demoVar={COLOR_BACKGROUND_B}
          demoVarName={"COLOR_BACKGROUND_B"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <ColorDemo
          demoVar={COLOR_BACKGROUND_C}
          demoVarName={"COLOR_BACKGROUND_C"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
    </DemoSection>

    <DemoSection name="Typography">
      <DemoSubSection name="Fonts">
        <FontDemo
          demoVar={FONT_STACK_BRAND}
          demoVarName={"FONT_STACK_BRAND"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontDemo
          demoVar={FONT_STACK_BASE}
          demoVarName={"FONT_STACK_BASE"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontDemo
          demoVar={FONT_STACK_CODE}
          demoVarName={"FONT_STACK_CODE"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
      <DemoSubSection name="Font Weights">
        <FontWeightDemo
          demoVar={FONT_WEIGHT_BASE}
          demoVarName={"FONT_WEIGHT_BASE"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontWeightDemo
          demoVar={FONT_WEIGHT_SEMIBOLD}
          demoVarName={"FONT_WEIGHT_SEMIBOLD"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontWeightDemo
          demoVar={FONT_WEIGHT_BOLD}
          demoVarName={"FONT_WEIGHT_BOLD"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
      <DemoSubSection name="Font Sizes">
        <FontSizeDemo
          demoVar={FONT_SIZE_XS}
          demoVarName={"FONT_SIZE_XS"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontSizeDemo
          demoVar={FONT_SIZE_SM}
          demoVarName={"FONT_SIZE_SM"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontSizeDemo
          demoVar={FONT_SIZE_BASE}
          demoVarName={"FONT_SIZE_BASE"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontSizeDemo
          demoVar={FONT_SIZE_MD}
          demoVarName={"FONT_SIZE_MD"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontSizeDemo
          demoVar={FONT_SIZE_LG}
          demoVarName={"FONT_SIZE_LG"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontSizeDemo
          demoVar={FONT_SIZE_TITLE}
          demoVarName={"FONT_SIZE_TITLE"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
        <FontSizeDemo
          demoVar={FONT_SIZE_HERO}
          demoVarName={"FONT_SIZE_HERO"}
          onClick={e => {
            copy(e.target.title);
            alert(`${e.target.title} copied to clipboard`);
          }}
        />
      </DemoSubSection>
    </DemoSection>
  </div>
));

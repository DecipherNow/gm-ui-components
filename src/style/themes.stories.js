import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text, boolean, number } from "@storybook/addon-knobs";
import { theme, invertColorScheme, setSpacingBase } from "style/theme";
import { spacingScale } from "style/styleFunctions";

import ConnectedThemeProvider from 'components/ConnectedThemeProvider';

import { IconCog, IconChevronRight } from "components/Glyphs";
import Breadcrumbs from "components/Breadcrumbs";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import Checkbox from "components/Checkbox";
import Radio from "components/Radio";
import Textarea from "components/Textarea";
import Fieldset from "components/Fieldset";
import Spinner from "components/Spinner";
import TabGroup from "components/TabGroup";
import Tab from "components/Tab";
import Select from "components/Select";

const stories = storiesOf(" Overview|Themes", module);

const DemoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 80vw;
`;

const DemoCanvas = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  /* color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT}; */
`;

const StyledFieldset = styled(Fieldset)`
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
`;

const StyledFieldset2 = styled(Fieldset)`
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};
`;

const Space = styled.span`
  display: inline-block;
  height: ${spacingScale(1)};
  width: ${spacingScale(1)};
`;

const DocumentationLink = styled.h2`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  padding-bottom: ${spacingScale(2)};
  margin-bottom: ${spacingScale(2)};

  a {
    text-decoration: none;
  }
`;

function DemoContent({ themeName }) {
  return (
    <DemoCanvas>
      <Breadcrumbs crumbs={["Overview", "Themes", "Theme"]} />
      <Space />
      <h1>{themeName}</h1>
      <p>
        <IconCog /> Lorem ipsum dolor sit amet. Donec consectetur...
      </p>
      <Space />
      <Spinner orientation={"horizontal"} />
      <Space />
      <TabGroup label="Tab Group">
        <Tab label="Active Tab" active />
        <Tab label="Label" />
        <Tab label="Disabled" disabled />
      </TabGroup>
      <Fieldset>
        <Textarea
          autoFocus={false}
          label="Textarea"
          defaultValue=""
          placeholder="Placeholder Text"
          maxLength={25}
        />
        <Space />
        <Select>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </Select>
        <Space />
        <Checkbox labelPosition="right" label={"Checkbox"} />
        <Radio labelPosition="right" label={"Radio"} />
      </Fieldset>

      <Space />
      <StyledFieldset>
        <ButtonGroup>
          <Button label={"Plain Button"} />
          <Space />
          <Button type={"primary"} label={"Primary Button"} />
        </ButtonGroup>
      </StyledFieldset>
      <Space />
      <StyledFieldset2>
        <ButtonGroup>
          <Button label={"Plain Button"} />
          <Space />
          <Button type={"primary"} label={"Primary Button"} />
        </ButtonGroup>
      </StyledFieldset2>
      <Space />
    </DemoCanvas>
  );
}

DemoContent.propTypes = {
  themeName: PropTypes.string
};

stories.add(
  "Themes",
  () => {
    return (
    <>
      <DocumentationLink>
        <a href="https://github.com/greymatter-io/gm-ui-components#theming">
          Theming the Component Library
          <IconChevronRight />
        </a>
      </DocumentationLink>
      <DemoCols>
        <ConnectedThemeProvider theme={theme}>
          <DemoContent themeName="keen" />
        </ConnectedThemeProvider>
        <ConnectedThemeProvider theme={setSpacingBase(number('spacing', 9), theme)}>
          <DemoContent themeName="keenDark" />
        </ConnectedThemeProvider>
      </DemoCols>
    </>
  )},
  {
    info: {
      source: false
    }
  }
);

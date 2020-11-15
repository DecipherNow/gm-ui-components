import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import {
  theme,
  invertColorScheme,
  setColorSchemeLight,
  addHighContrastInfluence,
  addWin10Influence,
  addMacOS11Influence,
  addMacOSXInfluence,
  setSpacingBase,
  setColorScheme
} from "style/theme";
import { space } from "style/styleFunctions";

import ConnectedThemeProvider, { ConnectedThemeTransformer } from 'components/ConnectedThemeProvider';

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
  padding: 1rem 1rem 0;
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  border: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_SOLID};
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_LG};
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
  height: ${space(1)};
  width: ${space(1)};
`;

const DocumentationLink = styled.h2`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  padding-bottom: ${space(2)};
  margin-bottom: ${space(2)};

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
          <hr style={{ border: "0", borderBottom: '1px solid var(--COLOR_KEYLINE_DEFAULT)'}} />
          <hr style={{ border: "0", borderBottom: '1px solid var(--COLOR_KEYLINE_SOLID)'}} />

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

    // TIDO: Add a toggle for high-contrast
    // const OSOptions = {
    //   addMacOS11Influence,
    //   addMacOSXInfluence,
    //   addWin10Influence
    // }
    // TODO: Fix picker
    // const OSOption = select('OS Influence', OSOptions, addMacOS11Influence);

    // TODO: Find a good way to present these options
    // const modifyTheme = (theme) => {
    //   if (boolean('invertTheme', false)) {
    //     theme = invertColorScheme(theme)
    //   }
    // }

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
          <DemoContent themeName="Default" />
          </ConnectedThemeProvider>
        <ConnectedThemeTransformer fn={addMacOSXInfluence}>
          <DemoContent themeName="mac OS X" />
        </ConnectedThemeTransformer>
        <ConnectedThemeTransformer fn={addMacOS11Influence}>
          <DemoContent themeName="mac OS 11" />
        </ConnectedThemeTransformer>
        <ConnectedThemeTransformer fn={addWin10Influence}>
          <DemoContent themeName="Windows 10" />
        </ConnectedThemeTransformer>
        <ConnectedThemeTransformer fn={invertColorScheme}>
          <DemoContent themeName="Invert Color Scheme" />
        </ConnectedThemeTransformer>
        <ConnectedThemeTransformer fn={addHighContrastInfluence}>
          <DemoContent themeName="The current theme, but with more contrast" />
        </ConnectedThemeTransformer>
        <ConnectedThemeTransformer fn={setColorScheme} args={["dark"]}>
          <DemoContent themeName="The current theme, but light" />
        </ConnectedThemeTransformer>
        <ConnectedThemeTransformer fn={setSpacingBase} args={[12]}>
          <DemoContent themeName="The current theme, but with more spacing" />
        </ConnectedThemeTransformer>
      </DemoCols>
    </>
  )},
  {
    info: {
      source: false
    }
  }
);

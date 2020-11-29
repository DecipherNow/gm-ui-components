import React from "react";
import styled from 'styled-components'
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";
import DefaultSelect from 'react-select';

export const flavourOptions = [
  { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
  { value: 'chocolate', label: 'Chocolate', rating: 'good' },
  { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
  { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];

import {
  ClearIndicator,
  DropdownIndicator,
  SelectTheme,
  SelectStyles
} from './ReactSelectStyles';

const Wrap = styled.div`
  width: 20em;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;

function Select({ ...props }) {

  return (
    <DefaultSelect
      theme={SelectTheme}
      styles={SelectStyles}
      components={{
        ...props.components,
        DropdownIndicator,
        ClearIndicator,
      }}
      {...props}
    />
  );
}

const stories = storiesOf("Components|ReactSelectStyles", module);

stories.add(
  "Default",
  () => {
    return (
      <Wrap>
        <Select isMulti={true} options={flavourOptions} />
        <Select options={flavourOptions} />
      </Wrap>
    );
  },
  {
    info: {
      text:
        ""
    }
  }
);

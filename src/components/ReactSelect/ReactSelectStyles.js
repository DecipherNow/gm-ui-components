import React from 'react';
import styled from 'styled-components';
import { components } from 'react-select';

import Button from '../Button';
import { IconX, IconChevronDown } from '../Glyphs';


export const ClearIndicator = (innerProps) => {
  return (
    <components.DropdownIndicator {...innerProps}>
      <SelectButton>
        <IconX borderWidth={1.5} size="1.5em" />
      </SelectButton>
    </components.DropdownIndicator>
  );
};


export const DropdownIndicator = (innerProps) => {
  return (
    <components.DropdownIndicator {...innerProps}>
      <SelectButton>
        <IconChevronDown size="1.5em" borderWidth={1.5} />
      </SelectButton>
    </components.DropdownIndicator>
  );
};


export const SelectButton = styled(Button)`
  padding: 0.25rem;
  margin: 0.125rem;
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
`;


export const SelectTheme = theme => ({
  ...theme,
  borderRadius: 'var(--CORNER_RADIUS_INPUT)',
  colors: {
    ...theme.colors,
    primary: 'var(--COLOR_INTENT_HIGHLIGHT)'
  }
});


export const SelectStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '2.5rem',
    borderColor: 'var(--COLOR_KEYLINE_DEFAULT)',
    background: 'var(--COLOR_BACKGROUND_TWO)',

    '&:hover': {
      borderColor: 'var(--COLOR_KEYLINE_DEFAULT)',
    },

    '&:focus-within': {
      borderColor: 'var(--COLOR_INTENT_HIGHLIGHT)',
    }
  }),
  input: (provided) => ({
    ...provided,
    margin: '0',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0.25rem 0.75rem'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    backgroundColor: 'transparent'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: '0',
  }),
  option: (provided) => ({
    ...provided,
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: `var(--ZINDEX_DROPDOWN)`,
    background: `var(--COLOR_BACKGROUND_TWO)`,
    borderRadius: `var(--CORNER_RADIUS_CARD_DEFAULT)`,
    boxShadow:
      `0 0.25rem 1rem -0.5rem var(--COLOR_KEYLINE_DEFAULT),
      0 0 0 1px var(--COLOR_KEYLINE_DEFAULT)`,
    color: `var(--COLOR_CONTENT_DEFAULT)`
  }),
  menuList: (provided) => ({
    ...provided,
  }),

};

import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    options: { control: 'object', defaultValue: [] },
    optionLabel: { control: 'text', defaultValue: 'label' },
    editable: { control: 'boolean', defaultValue: false },
    filter: { control: 'boolean', defaultValue: false },
    showClear: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    placeholder: { control: 'text', defaultValue: 'Select...' }
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  args: {
    options: [
      { label: 'Option1', value: '1' },
      { label: 'Option2', value: '2' }
    ]
  }
};

export const Editable: Story = {
  args: {
    options: [
      { label: 'Option1', value: '1' },
      { label: 'Option2', value: '2' }
    ],
    editable: true
  }
};

export const WithFilter: Story = {
  args: {
    options: [
      { label: 'Option1', value: '1' },
      { label: 'Option2', value: '2' }
    ],
    filter: true
  }
};

export const WithClear: Story = {
  args: {
    options: [
      { label: 'Option1', value: '1' },
      { label: 'Option2', value: '2' }
    ],
    showClear: true
  }
};

export const Disabled: Story = {
  args: {
    options: [
      { label: 'Option1', value: '1' },
      { label: 'Option2', value: '2' }
    ],
    disabled: true
  }
};

export const Playground: Story = {
  args: {}
};

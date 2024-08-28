import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from '.';

const meta: Meta<typeof MultiSelect> = {
  title: 'Atoms/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'array', defaultValue: [] },
    options: { control: 'array', defaultValue: [] },
    optionLabel: { control: 'text', defaultValue: 'name' },
    display: {
      control: {
        type: 'inline-radio',
        options: ['list', 'chip']
      },
      defaultValue: 'list'
    },
    filter: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false }
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

type Story = StoryObj<typeof MultiSelect>;

export const Basic: Story = {
  args: { options: ['Option 1', 'Option 2', 'Option 3'] }
};

export const WithChips: Story = {
  args: { options: ['Option 1', 'Option 2', 'Option 3'], display: 'chip' }
};

export const WithFilter: Story = {
  args: { options: ['Option 1', 'Option 2', 'Option 3'], filter: true }
};

export const Disabled: Story = {
  args: { options: ['Option 1', 'Option 2', 'Option 3'], disabled: true }
};

export const Playground: Story = {
  args: {}
};

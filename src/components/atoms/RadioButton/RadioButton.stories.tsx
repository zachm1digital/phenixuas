import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from '.';

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    checked: { control: 'boolean', defaultValue: false },
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

type Story = StoryObj<typeof RadioButton>;

export const Basic: Story = {
  args: { value: 'Option1' }
};

export const Checked: Story = {
  args: { value: 'Option2', checked: true }
};

export const Disabled: Story = {
  args: { value: 'Option3', disabled: true }
};

export const Playground: Story = {
  args: {}
};

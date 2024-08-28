import type { Meta, StoryObj } from '@storybook/react';

import { InputSwitch } from '.';

const meta: Meta<typeof InputSwitch> = {
  title: 'Atoms/InputSwitch',
  component: InputSwitch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', defaultValue: false }
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

type Story = StoryObj<typeof InputSwitch>;

export const Basic: Story = {
  args: { checked: false }
};

export const Preselected: Story = {
  args: { checked: true }
};

export const Invalid: Story = {
  args: { className: 'p-invalid' }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const Playground: Story = {
  args: {}
};

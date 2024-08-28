import type { Meta, StoryObj } from '@storybook/react';

import { InputPassword } from '.';

const meta: Meta<typeof InputPassword> = {
  title: 'Atoms/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    feedback: { control: 'boolean', defaultValue: true },
    toggleMask: { control: 'boolean', defaultValue: false },
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

type Story = StoryObj<typeof InputPassword>;

export const Basic: Story = {
  args: { feedback: false }
};

export const WithMeter: Story = {
  args: {}
};

export const WithToggleMask: Story = {
  args: { toggleMask: true }
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled' }
};

export const Playground: Story = {
  args: {}
};

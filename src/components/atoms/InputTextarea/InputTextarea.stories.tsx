import type { Meta, StoryObj } from '@storybook/react';

import { InputTextarea } from '.';

const meta: Meta<typeof InputTextarea> = {
  title: 'Atoms/InputTextarea',
  component: InputTextarea,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    autoResize: { control: 'boolean', defaultValue: false },
    keyfilter: { control: 'text', defaultValue: '' },
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

type Story = StoryObj<typeof InputTextarea>;

export const Basic: Story = {
  args: { value: 'Basic InputTextarea' }
};

export const AutoResize: Story = {
  args: { value: 'AutoResize InputTextarea', autoResize: true }
};

export const KeyFilter: Story = {
  args: { value: '123', keyfilter: 'int' }
};

export const Disabled: Story = {
  args: { value: 'Disabled InputTextarea', disabled: true }
};

export const Playground: Story = {
  args: {}
};

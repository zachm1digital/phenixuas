import type { Meta, StoryObj } from '@storybook/react';

import { InputNumber } from '.';

const meta: Meta<typeof InputNumber> = {
  title: 'Atoms/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', defaultValue: 0 },
    min: { control: 'number', defaultValue: undefined },
    max: { control: 'number', defaultValue: undefined },
    step: { control: 'number', defaultValue: 1 },
    mode: {
      control: {
        type: 'select',
        options: ['decimal', 'currency', 'percentage']
      },
      defaultValue: 'decimal'
    },
    locale: { control: 'text', defaultValue: undefined },
    prefix: { control: 'text', defaultValue: undefined },
    suffix: { control: 'text', defaultValue: undefined },
    showButtons: { control: 'boolean', defaultValue: false },
    buttonLayout: {
      control: {
        type: 'inline-radio',
        options: ['stacked', 'horizontal']
      },
      defaultValue: 'stacked'
    }
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

type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {}
};

export const WithMinMaxStep: Story = {
  args: { min: 0, max: 100, step: 5 }
};

export const CurrencyMode: Story = {
  args: { mode: 'currency', locale: 'en-US', prefix: '$' }
};

export const PercentageMode: Story = {
  args: { mode: 'percentage', suffix: '%' }
};

export const WithButtons: Story = {
  args: { showButtons: true }
};

export const HorizontalButtonLayout: Story = {
  args: { showButtons: true, buttonLayout: 'horizontal' }
};

export const Playground: Story = {
  args: {}
};

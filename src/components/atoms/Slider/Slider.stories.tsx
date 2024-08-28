import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', defaultValue: 0 },
    step: { control: 'number', defaultValue: 1 },
    range: { control: 'boolean', defaultValue: false },
    orientation: {
      control: {
        type: 'inline-radio',
        options: ['horizontal', 'vertical']
      },
      defaultValue: 'horizontal'
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

type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  args: { value: 50 }
};

export const WithStep: Story = {
  args: { value: 50, step: 20 }
};

export const Range: Story = {
  args: { value: [20, 80], range: true }
};

export const Vertical: Story = {
  args: { value: 50, orientation: 'vertical' }
};

export const Playground: Story = {
  args: {}
};

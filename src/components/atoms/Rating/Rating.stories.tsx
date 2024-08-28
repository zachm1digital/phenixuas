import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from '.';

const meta: Meta<typeof Rating> = {
  title: 'Atoms/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', defaultValue: 0 },
    stars: { control: 'number', defaultValue: 5 },
    cancel: { control: 'boolean', defaultValue: true },
    readOnly: { control: 'boolean', defaultValue: false },
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

type Story = StoryObj<typeof Rating>;

export const Basic: Story = {
  args: { value: 3 }
};

export const WithoutCancel: Story = {
  args: { value: 3, cancel: false }
};

export const TenStars: Story = {
  args: { value: 5, stars: 10 }
};

export const ReadOnly: Story = {
  args: { value: 5, readOnly: true }
};

export const Disabled: Story = {
  args: { value: 5, disabled: true }
};

export const Playground: Story = {
  args: {}
};

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', defaultValue: 'Button' },
    icon: { control: 'text', defaultValue: '' },
    iconPos: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right']
      },
      defaultValue: 'left'
    },
    severity: {
      control: {
        type: 'select',
        options: ['secondary', 'success', 'info', 'warning', 'help', 'danger']
      }
    },
    rounded: { control: 'boolean', defaultValue: false },
    outlined: { control: 'boolean', defaultValue: false }
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

type Story = StoryObj<typeof Button>;

export const IconOnly: Story = {
  args: { icon: 'pi pi-check' }
};

export const LabelAndIcon: Story = {
  args: { label: 'Submit', icon: 'pi pi-check' }
};

export const LabelAndIconRight: Story = {
  args: { label: 'Submit', icon: 'pi pi-check', iconPos: 'right' }
};

export const Playground: Story = {
  args: {}
};

import type { Meta, StoryObj } from '@storybook/react';

import { Editor } from '.';

const meta: Meta<typeof Editor> = {
  title: 'Atoms/Editor',
  component: Editor,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    readOnly: { control: 'boolean', defaultValue: false }
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

type Story = StoryObj<typeof Editor>;

export const Basic: Story = {
  args: { style: { height: '320px' } }
};

export const ReadOnly: Story = {
  args: { value: 'Always bet on Prime!', readOnly: true, style: { height: '320px' } }
};

export const Playground: Story = {
  args: { style: { height: '320px' } }
};

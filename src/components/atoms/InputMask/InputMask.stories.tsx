import type { Meta, StoryObj } from '@storybook/react';

import { InputMask } from '.';

const meta: Meta<typeof InputMask> = {
  title: 'Atoms/InputMask',
  component: InputMask,
  tags: ['autodocs'],
  argTypes: {
    mask: { control: 'text', defaultValue: '' },
    slotChar: { control: 'text', defaultValue: '_' },
    autoClear: { control: 'boolean', defaultValue: true },
    unmask: { control: 'boolean', defaultValue: false },
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

type Story = StoryObj<typeof InputMask>;

export const Basic: Story = {
  args: {
    mask: '99-999-999'
  }
};

export const WithSlotChar: Story = {
  args: {
    mask: '99/99/9999',
    slotChar: 'x'
  }
};

export const AutoClearOff: Story = {
  args: {
    mask: '999-999-999',
    autoClear: false
  }
};

export const UnmaskOnFocus: Story = {
  args: {
    mask: '999-99-9999',
    unmask: true
  }
};

export const ReadOnly: Story = {
  args: {
    mask: '999-999-999',
    readOnly: true
  }
};

export const Playground: Story = {
  args: {}
};

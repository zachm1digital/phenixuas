import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from '.';

const meta: Meta<typeof InputText> = {
  title: 'Atoms/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    placeholder: { control: 'text', defaultValue: '' },
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

type Story = StoryObj<typeof InputText>;

export const Basic: Story = {
  args: { placeholder: 'Basic' }
};

export const WithKeyFilter: Story = {
  args: { keyfilter: 'int', placeholder: 'Integers' }
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled' }
};

export const Playground: Story = {
  args: {}
};

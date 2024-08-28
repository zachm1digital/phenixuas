import type { Meta, StoryObj } from '@storybook/react';

import { DataTable } from '.';

const meta: Meta<typeof DataTable> = {
  title: 'Atoms/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'object', defaultValue: [] },
    selectionMode: {
      control: {
        type: 'select',
        options: ['single', 'multiple', 'checkbox']
      },
      defaultValue: 'single'
    },
    paginator: { control: 'boolean', defaultValue: false },
    rows: { control: 'number', defaultValue: 0 },
    responsive: { control: 'boolean', defaultValue: false }
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

type Story = StoryObj<typeof DataTable>;

export const Basic: Story = {
  args: { value: [] }
};

export const WithPagination: Story = {
  args: { value: [], paginator: true, rows: 10 }
};

export const WithSelection: Story = {
  args: { value: [], selectionMode: 'multiple' }
};

export const Playground: Story = {
  args: {}
};

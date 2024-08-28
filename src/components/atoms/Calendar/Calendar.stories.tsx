import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'primereact/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Atoms/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'date' },
    dateFormat: { control: 'text', defaultValue: 'dd/mm/yy' },
    locale: { control: 'text', defaultValue: 'en' },
    showIcon: { control: 'boolean', defaultValue: false },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
    selectionMode: {
      control: {
        type: 'select',
        options: ['single', 'multiple', 'range']
      },
      defaultValue: 'single'
    },
    showButtonBar: { control: 'boolean', defaultValue: false },
    showTime: { control: 'boolean', defaultValue: false },
    hourFormat: {
      control: {
        type: 'inline-radio',
        options: ['12', '24']
      },
      defaultValue: '24'
    },
    timeOnly: { control: 'boolean', defaultValue: false },
    view: {
      control: {
        type: 'select',
        options: ['date', 'month', 'year']
      },
      defaultValue: 'date'
    },
    numberOfMonths: { control: 'number', defaultValue: 1 },
    touchUI: { control: 'boolean', defaultValue: false },
    inline: { control: 'boolean', defaultValue: false }
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

type Story = StoryObj<typeof Calendar>;

export const Basic: Story = {
  args: {}
};

export const WithIcon: Story = {
  args: { showIcon: true }
};

export const MultipleSelection: Story = {
  args: { selectionMode: 'multiple' }
};

export const RangeSelection: Story = {
  args: { selectionMode: 'range' }
};

export const WithButtonBar: Story = {
  args: { showButtonBar: true }
};

export const WithTime: Story = {
  args: { showTime: true }
};

export const TimeOnly: Story = {
  args: { timeOnly: true }
};

export const MonthPicker: Story = {
  args: { view: 'month', dateFormat: 'mm/yy' }
};

export const YearPicker: Story = {
  args: { view: 'year', dateFormat: 'yy' }
};

export const MultipleMonths: Story = {
  args: { numberOfMonths: 2 }
};

export const TouchUI: Story = {
  args: { touchUI: true }
};

export const Inline: Story = {
  args: { inline: true }
};

export const Playground: Story = {
  args: {}
};

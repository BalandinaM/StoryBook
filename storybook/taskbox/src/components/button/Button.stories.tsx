import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import Button from './Button';


export const ActionsData = {
    onClick: fn()
};

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
      title: 'Button Default',
      state: 'BUTTON_DEFAULT',
  },
};

export const Big: Story = {
  args: {
      title: 'Button Big',
      state: 'BUTTON_BIG',
  },
};

export const Small: Story = {
  args: {
      title: 'Button Small',
      state: 'BUTTON_SMALL',
  },
};
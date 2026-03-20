import type { Meta, StoryObj } from '@storybook/react-vite';
import { Title } from './Title';


// export const ActionsData = {
//     onClick: fn()
// };

const meta = {
  component: Title,
  title: 'Title',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
//   args: {
//     ...ActionsData,
//   },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
      state: 'RED_TITLE',
  },
};

export const Blue: Story = {
  args: {
      state: 'BLUE_TITLE',
  },
};

export const Brown: Story = {
  args: {
      state: 'BROWN_TITLE',
  },
};
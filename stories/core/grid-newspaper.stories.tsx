import type { Meta, StoryObj } from '@storybook/react';
import { GridNewspaperBasic } from '@/app/docs/grid-newspaper/grid-newspaper-basic';

const meta: Meta<typeof GridNewspaperBasic> = {
  title: 'Core/Core/Grid Newspaper Layout',
  component: GridNewspaperBasic,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof GridNewspaperBasic>;

export const Basic: Story = {
  render: () => <GridNewspaperBasic />,
};

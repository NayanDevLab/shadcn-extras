import type { Meta, StoryObj } from '@storybook/react';
import { NewspaperBasic } from '@/app/docs/newspaper/newspaper-basic';

const meta: Meta<typeof NewspaperBasic> = {
  title: 'Core/Core/Newspaper Layout',
  component: NewspaperBasic,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof NewspaperBasic>;

export const Basic: Story = {
  render: () => <NewspaperBasic />,
};

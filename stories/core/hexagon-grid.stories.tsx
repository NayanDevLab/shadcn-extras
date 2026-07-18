import type { Meta, StoryObj } from '@storybook/react';
import { HexGrid, Hexagon } from '@/components/core/hexagon-grid';
import React from 'react';

const meta: Meta<typeof HexGrid> = {
  title: 'Core/Core/Hexagon Grid',
  component: HexGrid,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof HexGrid>;

export const Basic: Story = {
  render: (args) => (
    <HexGrid {...args}>
      <Hexagon
        imageSrc='https://images.unsplash.com/photo-1531297172866-d03e524660d2'
        title='Tech'
        subtitle='Innovation'
      />
      <Hexagon
        imageSrc='https://images.unsplash.com/photo-1498050108023-c5249f4df085'
        title='Code'
        subtitle='Development'
      />
      <Hexagon
        imageSrc='https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
        title='Design'
        subtitle='Creative'
      />
      <Hexagon
        imageSrc='https://images.unsplash.com/photo-1555066931-4365d14bab8c'
        title='Build'
        subtitle='Engineering'
      />
      <Hexagon
        imageSrc='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
        title='Data'
        subtitle='Analytics'
      />
    </HexGrid>
  ),
};

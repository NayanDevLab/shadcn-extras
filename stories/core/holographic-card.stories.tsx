import type { Meta, StoryObj } from '@storybook/react';
import { HolographicCard } from '@/components/core/holographic-card';

const meta: Meta<typeof HolographicCard> = {
  title: 'Core/Core/Holographic Card',
  component: HolographicCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof HolographicCard>;

export const Basic: Story = {
  args: {
    title: 'Holographic Interface',
    description: 'Pure CSS art combining glitch typography, grain textures, floating holograms and 3D depth.',
    buttonText: 'EXPLORE',
  },
  render: (args) => (
    <div className="bg-[#020617] h-[600px] w-full p-8 flex items-center justify-center">
      <HolographicCard {...args} />
    </div>
  )
};

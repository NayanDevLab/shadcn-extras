import type { Meta, StoryObj } from '@storybook/react';
import { TimedCards } from '@/components/core/timed-cards';

const meta: Meta<typeof TimedCards> = {
  title: 'Core/Core/Timed Cards',
  component: TimedCards,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ height: '600px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof TimedCards>;

const DATA = [
  {
    place: 'Switzerland Alps',
    title: 'SAINT',
    title2: 'ANTONIEN',
    description:
      "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
  },
  {
    place: 'Japan Alps',
    title: 'NAGANO',
    title2: 'PREFECTURE',
    description:
      "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
    image: 'https://images.unsplash.com/photo-1578339031317-575510de3e15',
  },
  {
    place: 'Sahara Desert - Morocco',
    title: 'MARRAKECH',
    title2: 'MERZOUGA',
    description:
      'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856',
  },
  {
    place: 'Sierra Nevada - USA',
    title: 'YOSEMITE',
    title2: 'NATIONAL PARK',
    description:
      'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
  },
  {
    place: 'Tarifa - Spain',
    title: 'LOS LANCES',
    title2: 'BEACH',
    description:
      "Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach's long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.",
    image: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db',
  },
  {
    place: 'Cappadocia - Turkey',
    title: 'GÖREME',
    title2: 'VALLEY',
    description:
      'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
    image: 'https://images.unsplash.com/photo-1605652514652-3269a848a602',
  },
];

export const Default: Story = {
  args: {
    data: DATA,
  },
};

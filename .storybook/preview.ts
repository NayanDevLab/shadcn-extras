import type { Preview } from '@storybook/react';
import '../app/globals.css'; // Tailwind + base styles

import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { disable: false },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
    }),
  ],
};
export default preview;

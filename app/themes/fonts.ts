import {
  JetBrains_Mono,
  Lora,
  Orbitron,
  Playfair_Display,
  Quicksand,
  Space_Grotesk,
} from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-theme-playfair',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-theme-lora',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-theme-orbitron',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-theme-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-theme-jetbrains',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-theme-quicksand',
});

/** Class list that exposes every theme font as a CSS variable */
export const themeFontVariables = [
  playfair,
  lora,
  orbitron,
  spaceGrotesk,
  jetbrainsMono,
  quicksand,
]
  .map((font) => font.variable)
  .join(' ');

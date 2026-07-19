export const TOKEN_KEYS = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'border',
  'input',
  'ring',
  'chart-1',
  'chart-2',
  'chart-3',
  'chart-4',
  'chart-5',
] as const;

export type TokenKey = (typeof TOKEN_KEYS)[number];

/** All values are hsl()-wrapped, e.g. `hsl(240 5.9% 10%)` or `hsl(0 0% 100% / 0.6)` */
export type ThemeTokens = Record<TokenKey, string>;

export type FontId =
  | 'system'
  | 'playfair'
  | 'lora'
  | 'orbitron'
  | 'spaceGrotesk'
  | 'jetbrains'
  | 'quicksand';

export interface ThemeFonts {
  sans: FontId;
  heading: FontId;
  mono: FontId;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  /** e.g. '0rem' | '0.75rem' | '1.25rem' */
  radius: string;
  fonts: ThemeFonts;
  light: ThemeTokens;
  dark: ThemeTokens;
  /** Value for a --shadow custom property, per mode */
  shadows?: { light?: string; dark?: string };
  /**
   * Extra CSS with `&` as the scope placeholder. In the live preview `&` becomes
   * `#themes-preview`; in exported CSS the `& ` prefix is stripped so selectors
   * like `[data-slot='card']` apply globally in the user's app.
   */
  extraCss?: string;
  /** Four representative colors shown as dots on the picker card */
  swatches: [string, string, string, string];
}

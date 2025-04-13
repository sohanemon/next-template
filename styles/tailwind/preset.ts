import type { Config } from 'tailwindcss';

import animations from 'tailwindcss-animate';
import { theme } from './theme';

const themePreset = {
  content: [],
  plugins: [theme, animations],
} satisfies Config;

export default themePreset;

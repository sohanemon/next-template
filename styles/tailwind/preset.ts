import type { Config } from 'tailwindcss';

import animations from 'tailwindcss-animate';
import { theme } from './theme';
import { typography } from './typography';

const themePreset = {
  content: [],
  plugins: [theme, typography, animations],
} satisfies Config;

export default themePreset;

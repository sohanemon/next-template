import type { Config } from 'tailwindcss';

import { colors } from '../../lib/config/colors';
import animations from 'tailwindcss-animate';
import { createThemes } from 'tw-colors';
import { base } from './base';
import { theme } from './theme';
import { typography } from './typography';
import { utilities } from './utilities';

const themePreset = {
  content: [],
  plugins: [
    theme,
    base,
    utilities,
    typography,
    animations,
    createThemes(colors),
  ],
} satisfies Config;

export default themePreset;

import type { Config } from 'tailwindcss';
import themePreset from './styles/tailwind/preset';

const config = {
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  presets: [themePreset],
} satisfies Config;

export default config;

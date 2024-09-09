import plugin from 'tailwindcss/plugin';

const fontVariables = ['--font-sans', '--font-mono'];

export const typography = plugin(
  ({ addUtilities }) => {
    addUtilities({
      '.text-heading': { '@apply text-3xl font-bold leading-tight': {} },
    });
  },
  {
    theme: {
      extend: {
        fontFamily: fontVariables.reduce(
          (p: { [key: string]: string[] }, c: string) => {
            const key = c.split('-font-')[1] as string;
            const newObj = Object.assign({}, p);
            newObj[key] = [`var(${c})`];
            return newObj;
          },
          {},
        ),
      },
    },
  },
);

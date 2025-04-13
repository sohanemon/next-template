export const shimmer = (w: number | `${number}`, h: number | `${number}`) => {
  const color = { center: '#efefef', side: '#dfdfdf' };
  return `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${color.side}" offset="20%" />
      <stop stop-color="${color.center}" offset="50%" />
      <stop stop-color="${color.side}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${color.side}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
};

export const getPropertyValue = (variableName: string) =>
  getComputedStyle?.(document?.documentElement)?.getPropertyValue?.(
    variableName,
  );

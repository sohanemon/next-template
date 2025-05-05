import { cleanSrc, svgToBase64 } from '@sohanemon/utils';
import NextImageComponent from 'next/image';
import type React from 'react';

import { shimmer } from '@/lib/utils';
import type { ImgProps } from '@/types/index.types';

function Image({ src, width, height, alt, ...props }: ImgProps) {
  return (
    <NextImageComponent
      width={width || 500}
      height={height || width || 300}
      alt={
        alt ||
        (typeof src === 'string' &&
          src.substring(src.lastIndexOf('/') + 1).slice(0, 20)) ||
        'Picture Element'
      }
      src={cleanSrc(src as string)}
      draggable="false"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...(props as any)}
    />
  );
}

export const Img: React.FC<ImgProps> = ({ placeholder, ...props }) => {
  const imgComp: Record<string, React.ReactNode> = {
    blur: <BlurImg {...props} />,
    shimmer: (
      <Image
        {...props}
        placeholder={`data:image/svg+xml;base64,${svgToBase64(
          shimmer(500, 300),
        )}`}
      />
    ),
  };
  return (
    imgComp[placeholder!] || <Image placeholder={placeholder} {...props} />
  );
};

const BlurImg = async (props: ImgProps) => {
  const blurData = await import('@/lib/action/placeholder').then((f) =>
    f.getPlaceholderImage(props.src),
  );
  return <Image placeholder="blur" blurDataURL={blurData} {...props} />;
};

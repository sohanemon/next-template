import type { ImageProps } from 'next/image';
import type { NextMiddleware } from 'next/server';
import type * as React from 'react';

export type PageProps = Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}>;

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export type NavType = { title: string; href: `/${string}` };

type OmittedImageProps = 'height' | 'width' | 'srcSet' | 'placeholder' | 'alt';

export type ImgProps = ImageProps &
  Omit<ImageProps, OmittedImageProps> &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, OmittedImageProps>;

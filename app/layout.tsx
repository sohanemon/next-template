import { fonts } from '@/lib/config/fonts';
import { siteConfig } from '@/lib/config/site';
import { Providers } from '@/lib/context/providers';
import '@/styles/custom.css';
import '@/styles/globals.css';

import { cn } from '@sohanemon/utils';
import { Analytics } from '@vercel/analytics/react';

export const metadata = siteConfig.metadata;
export const viewport = siteConfig.viewport;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning className="scroll-pt-16 default" lang="en">
      <head />
      <body className={cn('flex min-h-screen flex-col font-sans', fonts)}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}

import { fonts } from '@/lib/config/fonts';
import { siteConfig } from '@/lib/config/site';
import { Providers } from '@/lib/context/providers';
import '@/styles/custom.css';
import '@/styles/globals.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import { cn } from '@sohanemon/utils';

export const metadata = siteConfig.metadata;
export const viewport = siteConfig.viewport;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning className="default scroll-pt-16" lang="en">
      <head />
      <body className={cn('flex min-h-screen flex-col font-sans', fonts)}>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID!} />
      <GoogleTagManager gtmId={process.env.GTM_ID!} />
    </html>
  );
}

"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { ResponsiveIndicator } from "@sohanemon/utils/components";
import { isSSR } from "../utils";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppProgressBar
        shallowRouting
        color="#07E3F8"
        height="2px"
        options={{ showSpinner: false }}
      />
      {children}
      {isSSR || <ResponsiveIndicator />}
    </>
  );
}
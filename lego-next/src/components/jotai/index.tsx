"use client";

import { Provider } from "jotai";

export const JotaiProvider = ({ children }: any) => {
  return <Provider>{children}</Provider>;
};

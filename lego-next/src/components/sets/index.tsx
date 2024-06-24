"use client";

import { useSets } from "./utils";

export const SetsContainer = () => {
  // Fetching sets
  const { isLoading, data } = useSets();

  return isLoading ? <>Loading</> : <>{data.toString()}</>;
};

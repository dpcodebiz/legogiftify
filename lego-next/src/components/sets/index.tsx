"use client";

import { SetCard } from "./cards";
import { useSets } from "./utils";

export const SetsContainer = () => {
  // Fetching sets
  const { isLoading, data } = useSets();

  // TODO loading
  return isLoading ? (
    <>Loading</>
  ) : (
    <>
      <div className="grid grid-cols-6">
        {data?.map((set, index) => (
          <SetCard key={index} set={set}></SetCard>
        ))}
      </div>
    </>
  );
};

"use client";

import { SetCard } from "./cards";
import { useSets } from "./utils";

import styles from "@styles/SetCard.module.scss";

export const SetsContainer = () => {
  // Fetching sets
  const { isLoading, data } = useSets();

  // TODO loading
  return isLoading ? (
    <>Loading</>
  ) : (
    <>
      <div className={styles.container}>
        <div className={styles.action_container}>
          <div>TODO search bar</div>
          <span>Showing most relevant results</span>
        </div>
        {data?.map((set, index) => (
          <SetCard key={index} set={set}></SetCard>
        ))}
      </div>
    </>
  );
};

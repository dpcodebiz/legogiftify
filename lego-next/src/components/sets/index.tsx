"use client";

import { useCallback, useState } from "react";
import { SetCard } from "./cards";
import { useSets } from "./utils";

import styles from "@styles/SetCard.module.scss";
import { throttle } from "radash";

export const SetsContainer = () => {
  // Fetching sets
  const [searchQ, setSearchQ] = useState<string>("");
  const { isLoading, data } = useSets(searchQ);

  const onSearchUpdate = useCallback(
    throttle({ interval: 300 }, (e) => {
      if (e.target.value.length < 0) return;
      setSearchQ(e.target.value);
    }),
    []
  );

  // TODO loading
  return (
    <>
      <div className={styles.container}>
        <div className={styles.action_container}>
          <form>
            <input
              className={styles.search}
              type="text"
              placeholder="Search for a specific set here"
              onChange={onSearchUpdate}
            />
          </form>
        </div>
        <div className={styles.cards_container}>
          {isLoading ? (
            <>Loading</>
          ) : (
            <>
              {data?.map((set, index) => (
                <SetCard key={index} set={set}></SetCard>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

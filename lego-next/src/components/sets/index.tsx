"use client";

import { useCallback, useState } from "react";
import { SetCard } from "./cards";
import { useSets } from "./utils";

import styles from "@styles/SetCard.module.scss";
import { throttle } from "radash";
import Skeleton from "react-loading-skeleton";

export const SetsContainer = () => {
  // Fetching sets
  const [searchQ, setSearchQ] = useState<string>("");
  const { isLoading, data } = useSets(searchQ);

  // Throttle to enhance UX
  const onSearchUpdate = useCallback(
    throttle({ interval: 300 }, (e) => {
      if (e.target.value.length < 0) return;
      setSearchQ(e.target.value);
    }),
    []
  );

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
            [...Array(12)].map((e, index) => (
              <div className="relative" key={index}>
                <Skeleton width={150} height={150} />
              </div>
            ))
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

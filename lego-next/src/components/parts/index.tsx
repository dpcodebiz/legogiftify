"use client";

import { stalePartsAtom } from "@/utils/atoms";
import { PartCard } from "./cards";
import { useParts } from "./utils";

type Props = {
  set_num: string;
};

import styles from "@styles/PartCard.module.scss";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export const PartsContainer = ({ set_num }: Props) => {
  const { isLoading, data, refetch } = useParts(set_num);
  const staleParts = useAtomValue(stalePartsAtom);

  useEffect(() => {
    refetch();
  }, [staleParts, refetch]);

  if (isLoading) return <>Loading</>;

  return (
    <>
      <div className={styles.cards_container}>
        {isLoading ? (
          [...Array(12)].map((e, index) => <Skeleton key={index} />)
        ) : (
          <>
            {data?.map((part, index) => (
              <PartCard key={index} part={part}></PartCard>
            ))}
          </>
        )}
      </div>
    </>
  );
};

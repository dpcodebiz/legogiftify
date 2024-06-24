"use client";

import { PartCard } from "./cards";
import { useParts } from "./utils";

type Props = {
  set_num: string;
};

import styles from "@styles/PartCard.module.scss";

export const PartsContainer = ({ set_num }: Props) => {
  const { isLoading, data } = useParts(set_num);

  if (isLoading) return <>Loading</>;

  return (
    <>
      <div className={styles.cards_container}>
        {data?.map((part, index) => (
          <PartCard key={index} part={part}></PartCard>
        ))}
      </div>
    </>
  );
};

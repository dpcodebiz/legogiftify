"use client";
import { Set } from "@models/set";
import { SetCard } from "../cards";
import { useSet } from "../utils";

export type Props = {
  set_num: string;
};

import styles from "@styles/SetCard.module.scss";

export const SetFullCard = ({ set_num }: Props) => {
  const { data, isLoading } = useSet(set_num);

  // TODO better loading screen
  if (isLoading) return <>Loading...</>;

  return (
    <>
      <div className={styles.container_mono}>
        <SetCard noLink set={data as Set} />
      </div>
    </>
  );
};

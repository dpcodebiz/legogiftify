"use client";

import { PartCard } from "./cards";
import { useParts } from "./utils";

type Props = {
  set_num: string;
};

export const PartsContainer = ({ set_num }: Props) => {
  const { isLoading, data } = useParts(set_num);

  if (isLoading) return <>Loading</>;

  return (
    <>
      {data?.map((part, index) => (
        <PartCard key={index} part={part}></PartCard>
      ))}
    </>
  );
};

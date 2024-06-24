"use client";
import { useSet } from "../utils";

export type Props = {
  set_num: string;
};

export const SetFullCard = ({ set_num }: Props) => {
  const { data, isLoading } = useSet(set_num);

  // TODO loading
  if (isLoading) return <>Loading</>;

  return <>{data?.name}</>;
};

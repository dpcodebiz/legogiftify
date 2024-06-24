"use client";
import { PartsContainer } from "@components/parts";
import { SetAdd } from "@components/sets/add";
import { SetFullCard } from "@components/sets/fullCards";

export default function SetPage({ params }: { params: { set_num: string } }) {
  return (
    <>
      <SetAdd set_num={params.set_num} />
      <SetFullCard set_num={params.set_num} />
      <PartsContainer set_num={params.set_num} />
    </>
  );
}

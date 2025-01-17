"use client";
import { clsx } from "@/utils/styles";
import { PartsContainer } from "@components/parts";
import { SetAdd } from "@components/sets/add";
import { SetFullCard } from "@components/sets/fullCards";

import styles from "@styles/Display.module.scss";
import Link from "next/link";

export default function SetPage({ params }: { params: { set_num: string } }) {
  return (
    <>
      <div className="w-max mx-auto">
        <Link href="/">Go back</Link>
      </div>
      <div className="max-w-screen-xl w-full mx-auto">
        <div className={clsx(styles.section, styles.split_media_screen)}>
          <SetFullCard set_num={params.set_num} />
          <SetAdd set_num={params.set_num} />
        </div>
      </div>
      <hr />
      <div className={styles.section}>
        <PartsContainer set_num={params.set_num} />
      </div>
    </>
  );
}

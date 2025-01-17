import { Set } from "@models/set";
import Link from "next/link";

import styles from "@styles/SetCard.module.scss";
import { clsx } from "@/utils/styles";

type Props = {
  set: Set;
  noLink?: boolean;
};

export const SetCard = ({ set, noLink }: Props) => {
  return (
    <div className={styles.card}>
      <div className={clsx(styles.img, noLink ? styles.noLink : "")}>
        {noLink ? (
          <>
            <img src={set.img_url} alt={set.name} />
          </>
        ) : (
          <Link href={`/sets/${set.set_num}`}>
            <img src={set.img_url} alt={set.name} />
          </Link>
        )}
      </div>
      <div className={styles.description}>
        <div className={styles.head}>
          {noLink ? (
            <span className={styles.name}>{set.name}</span>
          ) : (
            <Link href={`/sets/${set.set_num}`}>
              <span className={styles.name}>
                {set.name.length > 25
                  ? set.name.substring(0, 25) + "..."
                  : set.name}
              </span>
            </Link>
          )}
          <span className={styles.id}>{set.set_num}</span>
        </div>
        <div className={styles.info}>
          <div>{set.year}</div>
          <div>{set.num_parts} parts</div>
        </div>
      </div>
    </div>
  );
};

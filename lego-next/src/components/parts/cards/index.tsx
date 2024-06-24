import { Part } from "@models/part";

import styles from "@styles/PartCard.module.scss";

type Props = {
  part: Part;
};

export const PartCard = ({ part }: Props) => {
  return (
    <>
      <div className={styles.img}>
        <img src={part.img_url} alt={part.part_num} />
        <div className={styles.info}>
          <span className={styles.id}>{part.part_num}</span>
          <span className={styles.quantity}>x{part.quantity}</span>
        </div>
      </div>
    </>
  );
};

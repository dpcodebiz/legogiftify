import { SetsContainer } from "@components/sets";

import styles from "@styles/Display.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.heading_container}>
        <span className={styles.heading}>Lego Giftify</span>
        <span className={styles.subheading}>
          Where Lego&apos;s and Gifts come together
        </span>
      </div>
      <div className={styles.section}>
        <SetsContainer></SetsContainer>
      </div>
    </>
  );
}

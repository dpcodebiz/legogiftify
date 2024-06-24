import { SetsContainer } from "@components/sets";

import styles from "@styles/Display.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.section}>
        <SetsContainer></SetsContainer>
      </div>
    </>
  );
}

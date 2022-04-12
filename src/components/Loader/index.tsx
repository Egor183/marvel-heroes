import { memo } from "react";
import styles from "./styles.module.css";

const Loader = () => {
  return (
    <div className={styles.ldsRoller}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default memo(Loader);

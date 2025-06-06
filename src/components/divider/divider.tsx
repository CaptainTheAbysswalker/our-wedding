import React from "react";
import styles from "./divider.module.css";

export const Divider = () => {
  return (
    <div className={styles.divider}>
      <div className={styles.shadow} />
    </div>
  );
};

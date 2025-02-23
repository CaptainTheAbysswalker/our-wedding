import React from "react";

import styles from "./dressCode.module.css";

export const DressCode = () => {
    return (
                    <section className={styles["dressCode-section"]}>
        <h2 id="dressCode-title">Dress code</h2>
        <p id="dressCode">
          Надевайте всё самое нарядное и красивое и обязательно берите с собой
          хорошее настроение!
        </p>
      </section>
    )
}
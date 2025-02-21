import React from "react";

import styles from "./dressCode.module.css";
import { InView } from "../ui/in-view";

export const DressCode = () => {
    return (
        <InView variants={{
                    hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  }}>
                    <section className={styles["dressCode-section"]}>
        <h2 id="dressCode-title">Dress code</h2>
        <p id="dressCode">
          Надевайте всё самое нарядное и красивое и обязательно берите с собой
          хорошее настроение!
        </p>
      </section>
                </InView>
    )
}
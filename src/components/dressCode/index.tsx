import React from "react";

import styles from "./dressCode.module.css";
import { TextAnimate } from "../magicui/text-animate";

export const DressCode = () => {
    return (
                    <section className={styles["dressCode-section"]}>
                          <h2 id="dressCode-title">Dress code</h2>
        <TextAnimate animation="blurIn" once>Надевайте всё самое нарядное и красивое и обязательно берите с собой
        хорошее настроение!</TextAnimate>
      </section>
    )
}
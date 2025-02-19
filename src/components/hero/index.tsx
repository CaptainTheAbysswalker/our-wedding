import React from "react";
import Image from "next/image";

import styles from "./hero.module.css";

import HeroImage from '../../../public/images/hero.jpg';

export const Hero = ()=>{
    return (
    <div className={styles.hero}>
        <div className={styles["hero-content"]}>
          <Image src={HeroImage} alt="Aлександр & Виктория" priority />
          <div className={styles.overlay}>
            <h1 id="names">Александр & Виктория</h1>
            <p>13.09.2025</p>
            <p id="quote" className={styles.quote}>
              Together forever
            </p>
          </div>
        </div>
      </div>)
}
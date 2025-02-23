import React from "react";
import Image from "next/image";

import styles from "./hero.module.css";

import HeroImage from '../../../public/images/hero7.jpg';
import { TextEffect } from "../ui/text-effect";

export const Hero = ()=>{
    return (
    <div className={styles.hero}>
        <div className={styles["hero-content"]}>
          <Image src={HeroImage} alt="Aлександр & Виктория" priority />
          <div className={styles.overlay}>
            <h1 id="names"><TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} delay={2}> Александр & Виктория </TextEffect></h1>
            <TextEffect className={styles.overlayText} preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} delay={3}>13.09.2025</TextEffect>
            {/* <p id="quote" className={styles.quote}>
              
            </p> */}
          </div>
        </div>
      </div>)
}
import React from "react";
import Image from "next/image";

import styles from "./hero.module.css";

import HeroImage from '../../../public/images/hero11.jpg';
import Heart from '../../../public/icons/HeartIcon.svg';
import { TextEffect } from "../ui/text-effect";

export const Hero = ()=>{
    return (
    <div className={styles.hero}>
        <div className={styles["hero-content"]}>
          <Image src={HeroImage} alt="Aлександр & Виктория" priority />
          <div className={styles.overlay}>
            <TextEffect as="h1" per='char' preset='fade'delay={2} speedReveal={0.6} speedSegment={0.3}> Александр & Виктория </TextEffect>
            <TextEffect className={styles.overlayText} per='char' preset='fade' delay={3} speedReveal={0.6} speedSegment={0.3}>13.09.2025</TextEffect>
            <div className="heart"> <Image src={Heart} alt="heart" width={24} height={24}/></div>
          </div>
        </div>
      </div>)
}
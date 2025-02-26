import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
// import HeroImage0 from '../../../public/images/hero.jpg';

import styles from "./hero.module.css";

import Heart from '../../../public/icons/HeartIcon.svg';
import { TextEffect } from "../ui/text-effect";
import { getRandomHeroImage } from "./getImagesForHero";

export const Hero = ()=>{

    const [heroImage, setHeroImage] = useState<StaticImageData | null>(null)

    useEffect (()=> {
        setHeroImage(getRandomHeroImage())
    }, [])

    return (
    <div className={styles.hero}>
        <div className={styles["hero-content"]}>
          {heroImage && <Image src={heroImage} alt="Aлександр & Виктория" priority />}
          <div className={styles.overlay}>
            <TextEffect as="h1" per='char' preset='fade'delay={2} speedReveal={0.6} speedSegment={0.3}> Александр & Виктория </TextEffect>
            <TextEffect className={styles.overlayText} per='char' preset='fade' delay={3} speedReveal={0.6} speedSegment={0.3}>13.09.2025</TextEffect>
            <div className="heart"> <Image src={Heart} alt="heart" width={24} height={24}/></div>
          </div>
        </div>
      </div>)
}
"use client";

import styles from "./page.module.css";
import React, { useEffect } from "react";

import { guestsList, soloGuests } from "./guests-list";
import { ScrollProgressDemo } from "@/components/scroll-progress/scroll";
import { Loader } from "@/components/loader";
// import { Map } from "@/components/map";
import { Modal } from "@/components/modal/modal";
import { pasteImage } from "@/lib/pastImage";
import { Hero } from "@/components/hero";
import { Details } from "@/components/details";
import { Shedule } from "@/components/schedule";
import { Footer } from "@/components/footer";
import { ApprovedOrRejected } from "@/components/approve";
import { DressCode } from "@/components/dressCode";
import { Place } from "@/components/place";
import { Greetings } from "@/components/greetings";

export default function Home() {
  const [guestName, setGuestName] = React.useState("Дорогие гости");
  const [showModal, setShowModal] = React.useState(false);
  const [isSolo, setIsSolo] = React.useState(false);


  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const guest = searchParams.get("guest_id");

    if (guest) {
      setIsSolo(soloGuests.includes(guest));
      const guestFromUrl = guestsList[`${guest}`];
      setGuestName(guestFromUrl);
    }
  }, []);

  useEffect(() => {
    pasteImage();
  }, []);


  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const openModalOnBtnClick = () => {
    const modal = document.getElementById("myModal");
    localStorage.setItem("approved", "true");
    setTimeout(() => {
      setShowModal(true);
      modal?.setAttribute("style", "display: flex; opacity: 1");
    }, 5000);
  };

  return (
    <>
      <Loader />
      <ScrollProgressDemo />
      <main className={styles.main}>
        <Hero />
        <Greetings isSolo={isSolo} guestName={guestName} />
        <Place />
        <DressCode />
        <Details />
        <Shedule />
        <ApprovedOrRejected guestName={guestName} openModalOnBtnClick={openModalOnBtnClick}/>
        <Modal setShowModal={setShowModal} guest={guestName} />
        <Footer />
      </main>
    </>
  );
}

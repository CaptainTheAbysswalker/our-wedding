"use client";

import styles from "./page.module.css";
import React, { useEffect } from "react";

import { guestsList } from "./guests-list";
import { ConfettiFireworks } from "./button";
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
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Home() {
  const [guestName, setGuestName] = React.useState("Дорогие гости");
  const [showModal, setShowModal] = React.useState(false);
  const [approved, setApproved] = React.useState(false);
  const [rejected, setRejeced] = React.useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const guest = searchParams.get("guest");

    if (guest) {
      const guestFromUrl = guestsList[`${guest}`];
      setGuestName(guestFromUrl);
    }
  }, []);

  useEffect(() => {
    pasteImage();
  }, []);

  useEffect(() => {
    const lsApproved = localStorage.getItem("approved");
    const lsRejected = localStorage.getItem("rejected");

    setApproved(Boolean(lsApproved));
    setRejeced(Boolean(lsRejected));
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const openModalonBtnClick = () => {
    setApproved(true);
    localStorage.setItem("approved", "true");
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  };

  const rejectedBtnClick = () => {
    setRejeced(true);
    localStorage.setItem("rejected", "true");
  };

  return (
    <>
      <Loader />
      <ScrollProgressDemo />
      <main className={styles.main}>
        <Hero />
        <Greetings guestName={guestName} />
        <Place />
        <DressCode />
        <Details />
        <Shedule />

        {!approved && !rejected && (
          <section>
            <h2 id="approve-title">Подтверждение</h2>
            <TextAnimate animation="blurIn" className={styles["approve-text"]} once>
              Пожалуйста подтведите свое присутствие до 01&nbsp;июля&nbsp;2025
            </TextAnimate>
            <div className={styles["buttons"]}>
              <div
                className={styles["button-wrapper"]}
                onClick={openModalonBtnClick}
              >
                <ConfettiFireworks />
              </div>
              <button type="button" onClick={rejectedBtnClick}>
                Отклонить
              </button>
            </div>
          </section>
        )}
        <ApprovedOrRejected approved={approved} rejected={rejected} />
        {showModal && <Modal setShowModal={setShowModal} guest={guestName} />}
        <Footer />
      </main>
    </>
  );
}

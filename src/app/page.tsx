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
import { InView } from "@/components/ui/in-view";
import { DressCode } from "@/components/dressCode";
import { Place } from "@/components/place";
import { Greetings } from "@/components/greetings";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const openModalonBtnClick = () => {
    setApproved(true);
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  };

  const rejectedBtnClick = () => {
    setRejeced(true);
  };

  return (
    <>
      {loading && <Loader />}
      <ScrollProgressDemo />
      <main className={styles.main}>
        <Hero/>
        <Greetings guestName={guestName}/>
        <Place/>
        <DressCode/>
        <Details/>
        <Shedule/>

        <InView variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}>

        {!approved && !rejected && (
          <section>
            <h2 id="approve-title">Подтверждение</h2>
            <p id="approve" className={styles["approve-text"]}>
              Пожалуйста подтведите свое присутствие до 01&nbsp;июля&nbsp;2025
            </p>
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
        <ApprovedOrRejected approved={approved} rejected={rejected}/>
        </InView>
        {showModal && <Modal setShowModal={setShowModal} guest={guestName} />}
        <Footer/>
      </main>
    </>
  );
}

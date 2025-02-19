"use client";

import styles from "./page.module.css";
import Script from "next/script";
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
        <Script
          src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=ru_RU`}
          strategy="beforeInteractive"
        />
        <Hero/>
        <section className={styles["greeting-section"]}>
          <h2 id="greetings-title">{guestName}!</h2>
          <p id="greetings">
            С огромным удовольствием приглашаем Вас на нашу свадьбу, которая
            состоится <br />{" "}
            <span id="wedding-date">13 сентября 2025 года</span>
          </p>
        </section>
        <section>
          <h2 id="place-title">Место проведения</h2>
          <p id="place">
            Мы будем вас ждать по адресу <br />{" "}
            <a href="https://yandex.eu/maps/-/CHqHzMzG" target="_blank">
              {" "}
              Санкт-Петербург, п.Комарово, Приморское ш., 452А
            </a>
          </p>
          <p>
            Всех желающих будет ожидать трансфер, который также после праздника
            совершит обратный маршрут в Санкт-Петербург
          </p>
        </section>
        <section className={styles["dressCode-section"]}>
          <h2 id="dressCode-title">Dress code</h2>
          <p id="dressCode">
            Надевайте всё самое нарядное и красивое и обязательно берите с собой
            хорошее настроение!
          </p>
        </section>
        <Details/>
        <Shedule/>

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

        {/* <Map /> */}
        {showModal && <Modal setShowModal={setShowModal} guest={guestName} />}
        <Footer/>
      </main>
    </>
  );
}

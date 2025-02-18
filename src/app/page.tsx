"use client";

import styles from "./page.module.css";
import Script from "next/script";
import React, { useEffect } from "react";

import { guestsList } from "./guests-list";
import Image from "next/image";
import HeroImage from "../../public/images/hero14.jpg";
import HostFoto from "../../public/images/alina.jpeg";
import Arc from "../../public/icons/arc.gif";
// import Car from "../../public/icons/car.gif";
import Cheers from "../../public/icons/cheers.gif";
import Dance from "../../public/icons/dance.gif";
import Dinner from "../../public/icons/dinner.gif";
import Cake from "../../public/icons/cake.gif";
import Finish from "../../public/icons/finish.gif";
import { ConfettiFireworks } from "./button";
import { ScrollProgressDemo } from "@/components/scroll-progress/scroll";
import { Loader } from "@/components/loader";
// import { Map } from "@/components/map";
import { Modal } from "@/components/modal/modal";
import { Divider } from "@/components/divider/divider";
import { pasteImage } from "@/lib/pastImage";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [guestName, setGuestName] = React.useState("Дорогие гости");
  const [showModal, setShowModal] = React.useState(false);
  const [approved, setApproved] = React.useState(false);
  const [rejected, setRejeced] = React.useState(false);

  const text = approved
    ? "Мы очень рады, что вы разделите этот счастливый день с нами. Увидимся на нашей свадьбе!"
    : "Очень жаль, что вы не сможете разделить этот счастливый день с нами. ";

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
        </div>
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
        <section className={styles["details"]}>
          <h2 id="details-title">Детали</h2>
          <ul className={styles["details-list"]}>
            <li>
              Сразу после свадьбы мы улетаем в путешествие, поэтому просим не
              обременять себя выбором цветов, Ваше присутствие скрасит этот день
              ярче любых букетов!
            </li>
            <Divider />
            <li>
              Не волнуйтесь, если вдруг не с кем оставить малыша. Мы очень рады
              видеть на своем празднике всю Вашу семью. На нашем празднике будет
              организован досуг для детей. Взрослые могут спокойно насладиться
              праздником.
            </li>
            <Divider />
            <li>
              Если вы подготовили для нас сюрприз или творческий подарок, не
              забудьте предупредить нашy ведущyю Алину. Она поможет воплотить
              вашу идею или отговорит вас, и ответит на все вопросы.
            </li>
            <div className={styles["host-info"]}>
              <a href="https://t.me/alinaveduspb" target="_blank">
                <Image
                  src={HostFoto}
                  alt="alina"
                  className={styles["host-image"]}
                />
              </a>
            </div>
          </ul>
        </section>
        <section className={styles["schedule-section"]}>
          <h2 id="schedule-title">Свадебное расписание</h2>
          <ul className={styles["schedule-list"]}>
            {/* <li>
              <Image
                src={Car}
                alt="car"
                className={styles["icons"]}
                unoptimized
              />
              <strong>15:30</strong>- Трансфер
            </li> */}
            <li>
              <Image
                src={Cheers}
                alt="cheers"
                className={styles["icons"]}
                unoptimized
              />
              <strong>16:00</strong> - Сбор гостей/фуршет
            </li>
            <li>
              <Image
                src={Arc}
                alt="larch"
                className={styles["icons"]}
                unoptimized
              />
              <strong>16:40</strong> - Церемония
            </li>
            <li>
              <Image
                src={Dinner}
                alt="dinner"
                className={styles["icons"]}
                unoptimized
              />
              <strong>17:00</strong> - Праздничный ужин
            </li>
            <li>
              <Image
                src={Cake}
                alt="cake"
                className={styles["icons"]}
                unoptimized
              />
              <strong>21:00</strong> - Торт
            </li>
            <li>
              <Image
                src={Dance}
                alt="dance"
                className={styles["icons"]}
                unoptimized
              />
              <strong>22:00</strong> - Танцы
            </li>
            <li>
              <Image
                src={Finish}
                alt="end"
                className={styles["icons"]}
                unoptimized
              />
              <strong>23:00</strong> - Завершение вечера
            </li>
          </ul>
        </section>

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

        {(approved || rejected) && (
          <section>
            <p>{text}</p>
          </section>
        )}

        {/* <Map /> */}
        {showModal && <Modal setShowModal={setShowModal} guest={guestName} />}
        <footer className={styles["footer"]}>
          <p id="footer-text">
            &copy; 2025 Wedding of Alexandr & Viktoria. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

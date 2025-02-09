'use client';

import styles from "./page.module.css";
import Script from "next/script";
import React, { useEffect } from "react";
import { initMap } from "./helpers/map";

import {guestsList} from './guests-list';

export default function Home() {
  useEffect(() => {
    initMap();
  }, [])

  return (
    <main className={styles.main}>
      <Script src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=ru_RU`}
      strategy="beforeInteractive"
     />
    {/* <div className={styles['language-selector']}>
        <button >Eng</button>
        <button >Ру</button>
    </div> */}
    <div className={styles.hero}>
        <div className={styles['hero-content']}>
            <div className={styles.overlay}>
                <h1 id="names">Александр & Виктория</h1>
                <p id="wedding-date">13.09.2025</p>
                <p id="quote" className={styles.quote}>Together forever</p>
            </div>
        </div>
    </div>
    <section className={styles['greeting-section']}>
        <h2 id="greetings-title">Дорогие гости!</h2>
        <p id="greetings">С огромным удовольствием приглашаем Вас на свадьбу</p>
    </section>
    <section className={styles['schedule-section']}>
        <h2 id="schedule-title">Расписание</h2>
        <ul className={styles['schedule-list']}>
            <li><strong>15:30</strong> - Трансфер</li>
            <li><strong>16:00</strong> - Сбор гостей/фуршет</li>
            <li><strong>16:40</strong> - Церемония</li>
            <li><strong>17:00</strong> - Праздничный ужин</li>
            <li><strong>21:00</strong> - Торт</li>
            <li><strong>22:00</strong> - Танцы</li>
            <li><strong>23:00</strong> - Завершение вечера/трансфер</li>
        </ul>
    </section>

<section className={styles['dressCode-section']}>
    <h2 id="dressCode-title">dress code</h2>
    <p id="dressCode">
    Надевайте всё самое нарядное и красивое и обязательно берите с собой хорошее настроение!</p>
</section>

    <section className={styles['presents-section']}>
        <h2 id="presents-title">Подарки</h2>
        <p id="presents-text">
        Сразу после свадьбы мы улетаем в путешествие, поэтому просим не обременять себя выбором цветов, Ваше присутствие скрасит этот день ярче любых букетов!
        </p>
    </section>

    <section className={styles['details']}>
        <h2 id="details-title">Детали</h2>
        <ul className={styles['details-list']}>
            <li>Если вы подготовили для нас сюрприз или творческий подарок, не забудьте предупредить нашy ведущyю. Она поможет воплотить вашу идею или отговорит вас, и ответит на все вопросы.</li>
            <li>Не волнуйтесь, если вдруг не с кем оставить малыша. Мы очень рады видеть на своем празднике всю Вашу семью. На нашем празднике будет организован досуг для детей. Взрослые могут спокойно насладиться праздником.</li>
            <li>не волнуйтесь о том, как потом добраться на наш праздник. Всех желающих будет ожидать трансфер в 15:30 который также в 00:00 совершит обратный маршрут в Санкт-Петербург</li>
        </ul>
    </section>

    <section className={styles['form-section']}>
        <h2 id="form-title">Help us make your experience even better!</h2>
        <form className={styles['wedding-form']}>
            <label id="transport-label">Do you need transport to the venue?</label>
            <select id="transport" name="transport">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <label id="alcohol-label">Do you have any alcohol preferences?</label>
            <input type="text" id="alcohol" name="alcohol" placeholder="e.g. Red wine, beer" />

            <label id="diet-label">Do you have any dietary restrictions?</label>
            <input type="text" id="diet" name="diet" placeholder="e.g. Vegetarian, gluten-free" />

            <label id="attendance-label">Will you attend the event?</label>
            <select id="attendance" name="attendance">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <button type="submit" className={styles['submit-btn']} id="submit-btn">Отправить</button>
        </form>
    </section>

    <div id="map" />

    <section className={styles['buttons']}>
        {/* <a href="#" className={styles['calendar-btn']} id="calendar-btn">Добавить в календарь</a> */}
        <a href="#" className={styles['accept-btn']} id="accept-btn">Принять приглашение</a>
    </section>

    <footer className={styles['footer']}>
        <p id="footer-text">&copy; 2025 Wedding of Alexandr & Viktoria. All rights reserved.</p>
    </footer>
  </main>
  );
}

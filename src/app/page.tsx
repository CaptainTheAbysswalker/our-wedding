'use client';

import styles from "./page.module.css";
import Script from "next/script";
import React, { useEffect } from "react";
import { initMap } from "./helpers/map";

import {guestsList} from './guests-list';
import Image from "next/image";
import HeroImage from '../../public/images/hero.jpg';
import Arc from '../../public/icons/arc.gif';
import Car from '../../public/icons/car.gif';
import Cheers from '../../public/icons/cheers.gif';
import Dance from '../../public/icons/dance.gif';
import Dinner from '../../public/icons/dinner.gif';
import Cake from '../../public/icons/cake.gif';
import Finish from '../../public/icons/finish.gif';
import { useSearchParams } from "next/navigation";

export default function Home() {
  useEffect(() => {
    initMap();
  }, [])

  const searchParams = useSearchParams();
  const guest = searchParams.get('guest');
  let guestName = 'Дорогие гости';

  if (guest) {
    const guestFromUrl = guestsList[`${guest}`];
    guestName = guestFromUrl;
  }

  return (
    <main className={styles.main}>
      <Script src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=ru_RU`}
      strategy="beforeInteractive"
     />
    <div className={styles.hero}>
        <div className={styles['hero-content']}>
        <Image src={HeroImage} alt="Aлександр & Виктория" priority fill/>
            <div className={styles.overlay}>
                <h1 id="names">Александр & Виктория</h1>
                <p id="wedding-date">13.09.2025</p>
                <p id="quote" className={styles.quote}>Together forever</p>
            </div>
        </div>
    </div>
    <section className={styles['greeting-section']}>
        <h2 id="greetings-title">{guestName}!</h2>
        <p id="greetings">С огромным удовольствием приглашаем Вас на нашу свадьбу, которая состоится 13 сентября 2025 года</p>
    </section>
<section className={styles['dressCode-section']}>
    <h2 id="dressCode-title">Dress code</h2>
    <p id="dressCode">
    Надевайте всё самое нарядное и красивое и обязательно берите с собой хорошее настроение!</p>
</section>
    <section className={styles['details']}>
        <h2 id="details-title">Детали</h2>
        <ul className={styles['details-list']}>
        <li>Сразу после свадьбы мы улетаем в путешествие, поэтому просим не обременять себя выбором цветов, Ваше присутствие скрасит этот день ярче любых букетов!</li>
        <li>Как добраться на наш праздник? Всех желающих будет ожидать трансфер в 15:30, который также в 00:00 совершит обратный маршрут в Санкт-Петербург</li>
        <li>Не волнуйтесь, если вдруг не с кем оставить малыша. Мы очень рады видеть на своем празднике всю Вашу семью. На нашем празднике будет организован досуг для детей. Взрослые могут спокойно насладиться праздником.</li>
        <li>Если вы подготовили для нас сюрприз или творческий подарок, не забудьте предупредить нашy ведущyю. Она поможет воплотить вашу идею или отговорит вас, и ответит на все вопросы.</li>
        </ul>
    </section>
    <section className={styles['schedule-section']}>
        <h2 id="schedule-title">Свадебное расписание</h2>
        <ul className={styles['schedule-list']}>
            <li><Image src={Car} alt="car" className={styles['icons']} unoptimized/><strong>15:30</strong>- Трансфер</li>
            <li><Image src={Cheers} alt="cheers" className={styles['icons']} unoptimized/><strong>16:00</strong> - Сбор гостей/фуршет</li>
            <li><Image src={Arc} alt="larch" className={styles['icons']} unoptimized/><strong>16:40</strong> - Церемония</li>
            <li><Image src={Dinner} alt="dinner" className={styles['icons']}unoptimized /><strong>17:00</strong> - Праздничный ужин</li>
            <li><Image src={Cake} alt="cake" className={styles['icons']} unoptimized/><strong>21:00</strong> - Торт</li>
            <li><Image src={Dance} alt="dance" className={styles['icons']} unoptimized /><strong>22:00</strong> - Танцы</li>
            <li><Image src={Finish} alt="end" className={styles['icons']} unoptimized/><strong>23:00</strong> - Завершение вечера</li>
        </ul>
    </section>

    <section className={styles['form-section']}>
        <h2 id="form-title">Пожалуйста, oтветьте на несколько вопросов</h2>
        <form className={styles['wedding-form']}>
            < label id="transfer">Потребуется ли вам трансфер?</label>
                <input name="transfer" value="before" id='before' type="radio" />
                <label id="before" htmlFor="before">Tолько до торжества</label>
                <input name="transfer" value="after" id="after" type="radio" />
                <label id="after" htmlFor="after"> Только после торжества</label>
                <input name="transfer" value="yes" id="yes" type="radio" />
                 <label id="yes" htmlFor="yes">До и после торжества</label>
                <input name="transfer" value="no" type="radio" />
                <label htmlFor="no">Нет</label>
            <label id="alcohol-label">Какой алкоголь предпочитаете?</label>
            <input type="text" id="alcohol" name="alcohol" placeholder="e.g. Red wine, beer" />
            <label id="diet-label">У вас есть какие-то ограничения в еде?</label>
            <input type="text" id="diet" name="diet" placeholder="вегетарианец, алергия на мороженое" />
            <label id="child">Будет ли с вами на празднике ребенок?</label>
            <input type="radio" id="yes" name="child" value='yes' />
            <label id="yes" htmlFor="yes">Да</label>
            <input type="radio" id="no" name="child" value='no' />
            <label id="no" htmlFor="no">Нет</label>
            <button type="submit" className={styles['submit-btn']} id="submit-btn">Отправить</button>
        </form>
    </section>

    <section className={styles['buttons']}>
        {/* <a href="#" className={styles['calendar-btn']} id="calendar-btn">Добавить в календарь</a> */}
        <a href="#" className={styles['accept-btn']} id="accept-btn">Принять приглашение</a>
    </section>

    <div id="map" />

    <footer className={styles['footer']}>
        <p id="footer-text">&copy; 2025 Wedding of Alexandr & Viktoria. All rights reserved.</p>
    </footer>
  </main>
  );
}

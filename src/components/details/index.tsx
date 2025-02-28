import React from "react";
import Image from "next/image";

import { Divider } from "../divider/divider"
import styles from "./details.module.css";

import HostFoto from "../../../public/images/alina.jpeg";
import { TextAnimate } from "../magicui/text-animate";


export const Details = () => {
    return (
                        <section className={styles["details"]}>
        <h2 id="details-title">Детали</h2>
        <ul className={styles["details-list"]}>
          <li>
            <TextAnimate animation="blurIn">
            Сразу после свадьбы мы улетаем в путешествие, поэтому просим не
            обременять себя выбором цветов, Ваше присутствие скрасит этот день
            ярче любых букетов!
            </TextAnimate>
          </li>
          <Divider />
          <li>
            <TextAnimate animation="blurIn">
            Не волнуйтесь, если вдруг не с кем оставить малыша. Мы очень рады
            видеть на своем празднике всю Вашу семью. На нашем празднике будет
            организован досуг для детей. Взрослые могут спокойно насладиться
            праздником.
            </TextAnimate>
          </li>
          <Divider />
          <li>
            <TextAnimate animation="blurIn">
            В этот день в 10 утра у нас будет регистрация во Дворце бракосочетания №1, после которой запланированы сборы и фотосессия,
            мы понимаем, что это неудобно и поэтому приглашаем вас сразу на выездную регистрацию, но если вы всё же захотите присутствовать - сообщите нам!
            </TextAnimate>
          </li>
          <Divider />
          <li>
            <TextAnimate animation="blurIn">
            Если вы подготовили для нас сюрприз или творческий подарок, не
            забудьте предупредить нашy ведущyю Алину. Она поможет воплотить
            вашу идею или отговорит вас, и ответит на все вопросы.
            </TextAnimate>
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
      </section>)
}
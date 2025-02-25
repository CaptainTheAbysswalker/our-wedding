import React from "react";
import { TextAnimate } from "../magicui/text-animate";

export const Greetings = ({guestName}: {guestName: string}) => {
    return (
    <section>
      <h2 id="greetings-title">{guestName}!</h2>
      <TextAnimate animation="blurIn" once>
        С огромным удовольствием приглашаем Вас на нашу свадьбу, которая
        состоится
      </TextAnimate>
      <p className="wedding-date">13 сентября 2025 года</p>
    </section>)
}
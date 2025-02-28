import React from "react";
import { TextAnimate } from "../magicui/text-animate";
import { CALENDAR_URL } from "@/lib/constants";

export const Greetings = ({guestName}: {guestName: string}) => {
  const addToCalendarHandler = () => {
    window?.open(CALENDAR_URL, "_blank")?.focus();
  }
    return (
    <section>
      <h2 id="greetings-title">{guestName}!</h2>
      <TextAnimate animation="blurIn">
        С огромным удовольствием приглашаем Вас на нашу свадьбу, которая
        состоится
      </TextAnimate>
      <p onClick={addToCalendarHandler} className="wedding-date">13 сентября 2025 года</p>
    </section>)
}
import React from "react";

export const Greetings = ({guestName}: {guestName: string}) => {
    return (
    <section>
      <h2 id="greetings-title">{guestName}!</h2>
      <p id="greetings">
        С огромным удовольствием приглашаем Вас на нашу свадьбу, которая
        состоится <br />{" "}
        <span id="wedding-date">13 сентября 2025 года</span>
      </p>
    </section>)
}
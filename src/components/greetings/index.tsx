import React from "react";
import { InView } from "../ui/in-view";

export const Greetings = ({guestName}: {guestName: string}) => {
    return (<InView variants={{
        hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}>
    <section>
      <h2 id="greetings-title">{guestName}!</h2>
      <p id="greetings">
        С огромным удовольствием приглашаем Вас на нашу свадьбу, которая
        состоится <br />{" "}
        <span id="wedding-date">13 сентября 2025 года</span>
      </p>
    </section>
    </InView>)
}
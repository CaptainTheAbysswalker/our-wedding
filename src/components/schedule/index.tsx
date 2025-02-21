import React from "react";
import Image from "next/image";

import styles from "./schedule.module.css";

import Cheers from "../../../public/icons/cheers.gif";
import Arc from "../../../public/icons/arc.gif";
import Dinner from "../../../public/icons/dinner.gif";
import Cake from "../../../public/icons/cake.gif";
import Dance from "../../../public/icons/dance.gif";
import Finish from "../../../public/icons/finish.gif";
import { InView } from "../ui/in-view";

export const Shedule = () => {
    return (
        <InView variants={{
                    hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  }}>
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
        </InView>
    )

}
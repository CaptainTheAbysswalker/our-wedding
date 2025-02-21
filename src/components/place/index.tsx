import React from "react";
import { InView } from "../ui/in-view";

export const Place = () => {
    return (
    <InView variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}>
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
              </InView>)
}
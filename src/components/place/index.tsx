import React from "react";
import { TextAnimate } from "../magicui/text-animate";

export const Place = () => {
    return (
     <section>
              <h2 id="place-title">Место проведения</h2>
              <TextAnimate animation="blurIn">Мы будем вас ждать по адресу</TextAnimate>
                <a href="https://yandex.eu/maps/-/CHqHzMzG" target="_blank">
                  Санкт-Петербург, п.Комарово, Приморское ш., 452А
                </a>
              <TextAnimate animation="blurIn">
                Всех желающих будет ожидать трансфер, который также после праздника
                совершит обратный маршрут в Санкт-Петербург
              </TextAnimate>
            </section>)
}
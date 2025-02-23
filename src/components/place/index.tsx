import React from "react";

export const Place = () => {
    return (
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
            </section>)
}
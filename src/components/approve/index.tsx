import React, { useEffect } from "react";
import { TextAnimate } from "../magicui/text-animate";
import { ShinyButton } from "../magicui/shiny-button";
import { ConfettiFireworks } from "@/app/button";

import styles from "./approve.module.css";

export const ApprovedOrRejected = ({  openModalOnBtnClick}: { openModalOnBtnClick: ()=>void}) => {
      const [approved, setApproved] = React.useState(false);
      const [rejected, setRejeced] = React.useState(false);

      const rejectedBtnClick = () => {
        setRejeced(true);
        localStorage.setItem("rejected", "true");
      };

      const changeDecision = ()=> {
        localStorage.removeItem("approved");
        localStorage.removeItem("rejected");
        setApproved(false);
        setRejeced(false);
      }
      const approvedBtnClick = () => {   
        openModalOnBtnClick()
         setApproved(true);}
    const text = approved
    ? "Мы очень рады, что вы разделите этот счастливый день с нами. Увидимся на нашей свадьбе!"
    : "Очень жаль, что вы не сможете разделить этот счастливый день с нами. ";

const madeDecision = approved || rejected;

  useEffect(() => {
    const lsApproved = localStorage.getItem("approved");
    const lsRejected = localStorage.getItem("rejected");

    setApproved(Boolean(lsApproved));
    setRejeced(Boolean(lsRejected));
  }, []);

    return madeDecision ? (
        <section className="madeСhoice">
          <TextAnimate animation="blurIn" duration={5} className="approve-text">{text}</TextAnimate>
          <ShinyButton onClick={changeDecision}>Изменить решение</ShinyButton>
        </section>
      ) : <section>
      <h2 id="approve-title">Подтверждение</h2>
      <TextAnimate animation="blurIn">
        Пожалуйста подтведите свое присутствие
      </TextAnimate>
      <TextAnimate animation="blurIn" className={"approve-text"}>до 01&nbsp;июля&nbsp;2025</TextAnimate>
      <div className={styles["buttons"]}>
        <div onClick={approvedBtnClick}>
          <ConfettiFireworks />
        </div>
        <button type="button" onClick={rejectedBtnClick}>
          Отклонить
        </button>
      </div>
    </section>}
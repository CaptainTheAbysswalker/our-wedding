import React from "react";
import { TextAnimate } from "../magicui/text-animate";
import { ShinyButton } from "../magicui/shiny-button";

export const ApprovedOrRejected = ({approved, rejected, changeDecision}: {approved: boolean, rejected: boolean , changeDecision: () => void} ) => {
    const text = approved
    ? "Мы очень рады, что вы разделите этот счастливый день с нами. Увидимся на нашей свадьбе!"
    : "Очень жаль, что вы не сможете разделить этот счастливый день с нами. ";


const madeDecision = approved || rejected;

    return madeDecision ? (
        <section>
          <TextAnimate animation="blurIn" duration={5} className="approve-text">{text}</TextAnimate>
          <ShinyButton onClick={changeDecision}>Изменить решение</ShinyButton>
        </section>
      ) : null}
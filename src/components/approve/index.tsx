import React from "react";
import { TextAnimate } from "../magicui/text-animate";

export const ApprovedOrRejected = ({approved, rejected}: {approved: boolean, rejected: boolean}) => {
    const text = approved
    ? "Мы очень рады, что вы разделите этот счастливый день с нами. Увидимся на нашей свадьбе!"
    : "Очень жаль, что вы не сможете разделить этот счастливый день с нами. ";


const madeDecision = approved || rejected;

    return madeDecision ? (
        <section>
          <TextAnimate animation="blurIn" duration={5} once>{text}</TextAnimate>
        </section>
      ) : null}
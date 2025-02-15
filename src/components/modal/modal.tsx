import styles from "./modal.module.css";

import { Form } from "../form/form";
import { MouseEventHandler } from "react";

export const Modal = ({
  setShowModal,
}: {
  setShowModal: (state: boolean) => void;
}) => {
    const handleCloseModal = () => {
        setShowModal(false);
    }
  return (
    <div
      id="myModal"
      className={styles["modal"]}
      onClick={handleCloseModal}
    >
      <div className={styles["modal-content"]} onClick={(e)=>{e.stopPropagation();}}>
        <span className={styles["close"]}>&times;</span>
        <Form />
      </div>
    </div>
  );
};

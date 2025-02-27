import styles from "./modal.module.css";

import { Form } from "../form/form";

export const Modal = ({
  setShowModal,
  guest,
}: {
  setShowModal: (state: boolean) => void;
  guest: string;
}) => {
    const handleCloseModal = () => {
        const modal = document.getElementById("myModal");
        modal?.setAttribute("style", "display: none; opacity: 0");
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
        <Form guest={guest} handleCloseModal={handleCloseModal}/>
      </div>
    </div>
  );
};

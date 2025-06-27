import React from "react";
import "./ModalWithForm.css";
import closebutton from "../../assets/closebutton.svg";

const ModalWithForm = ({ isOpen, children }) => {
  return (
    //     <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
    <div className="modal">
      <div className="modal__content">
        <button type="button" className="modal__close">
          <img src={closebutton} alt="modal close button" />
        </button>
        <form className="modal__form">{children}</form>
      </div>
    </div>
  );
};

export default ModalWithForm;

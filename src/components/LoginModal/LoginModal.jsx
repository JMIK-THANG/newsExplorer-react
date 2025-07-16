import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  handleCloseClick,
  handleLogin,
  handleSignupClick,
}) => {
  console.log({ handleLogin });
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(handleLogin);
    handleLogin(data);
  };
  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      title="Sign in"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="login-modal-email"
          className="modal__input"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="login-modal-password"
          className="modal__input"
          placeholder="Email"
          value={data.password}
          onChange={handleChange}
        />
      </label>
      <div className="modal__button-container">
        <button className="modal__button modal__button_type_primary">
          Sign in
        </button>
        <button
          onClick={handleSignupClick}
          className="modal__button modal__button_type_secondary"
        >
          or <span>Sign Up</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;

"use client";

import React, { useState } from "react";

import Parallax from "./components/Parallax/Parallax";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";

import "./Home.css";

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className={"home-root"}>
        <div className={"home-content"}>
          <h1 className={"home-header"}>
            <strong>React.js</strong>
          </h1>
          <p className={"home-paragraph"}>
            Приложение с использованием <br /> серверного рендеринга
          </p>
          <Button onClick={() => setIsOpenModal(true)}>Модальное окно</Button>
        </div>
        <Parallax />
      </div>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <span className={"home-modal_content"}>
            Контент внутри ленивого модального окна
          </span>
        </Modal>
      )}
    </>
  );
};

export default HomePage;

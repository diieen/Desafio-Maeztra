import { Modal } from "@mui/material";
import { useState } from "react";

import useWindowWidth from "../WindowWidth";

import banner from "../../assets/smart-news.png";
import mail from "../../assets/icon-mail.svg";
import airplane from "../../assets/icon-airplane.svg";

import "./style.scss";

const SmartNews = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const { width } = useWindowWidth();

  const classes = {
    root: "smartNews",
    hidden: "smartNews--hidden"
  }

  return (
    <Modal
        open={open}
        onClose={handleClose}
        classes={classes}
    >
        <div className="smartNews__content">
            <button className="smartNews__content__close" onClick={handleClose}>FECHAR</button>
            <div className="smartNews__content__container">
                {
                    width > 1024 && (
                        <div className="smartNews__content__container__image">
                            <img src={banner} width="426" alt="SmartNews" />
                        </div>
                    )
                }

                <div className="smartNews__content__container__infos">
                    <div className="smartNews__content__container__infos__icon">
                        <img src={mail} alt="Ícone de e-mail" />
                    </div>
                    <div className="smartNews__content__container__infos__welcome">
                        <p>Bem Vindo à MAEZTRA</p>
                    </div>
                    <div className="smartNews__content__container__infos__text">
                        <p>Receba em Primeira mão<br/><b>desconto e ofertas exclusivas</b></p>
                    </div>
                    <div className="smartNews__content__container__infos__form">
                        <input type="email" placeholder="Digite seu e-mail" />
                        <button title="Enviar">
                            ENVIAR
                            <img src={airplane} alt="Ícone de avião" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
  );
};

export default SmartNews;

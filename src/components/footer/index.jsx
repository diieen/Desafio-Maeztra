import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import useWindowWidth from '../../components/windowWidth';

import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";
import linkedin from "../../assets/icon-linkedin.svg";
import visa from "../../assets/flag-visa.svg";
import mastercard from "../../assets/flag-mastercard.svg";
import vtex from "../../assets/logo-vtex.svg";
import maeztra from "../../assets/logo-maeztra.svg";

import "./style.scss";

const Footer = () => {
  const { width } = useWindowWidth();
  const AccordionClasses = {
    root: 'footer__accordions__item',
    expanded: 'footer__accordions__item--expanded'
  }

  const SummaryClasses = {
    root: 'footer__accordions__item__summary',
    content: 'footer__accordions__item__summary__content',
    expanded: 'footer__accordions__item__summary__content--expanded'
  }

  const DetailsClasses = {
    root: 'footer__accordions__item__details',
    expanded: 'footer__accordions__item__details--expanded'
  }

  return (
    <footer className="footer">
        <div className="footer__newsletter">
            <div className="container-footer">
                <h2>Recebe Nossa Newsletter</h2>
                <div className="footer__newsletter__form">
                    <input type="email" placeholder="Digite seu e-mail" />
                    <button title="Enviar">Enviar</button>
                </div>
            </div>
        </div>

        {
            width < 1024 ? (
                <div className="footer__accordions container-footer">
                    <Accordion disableGutters="true" classes={AccordionClasses}>
                        <AccordionSummary classes={SummaryClasses}>
                            <p>Informações</p>
                            <div className="footer__accordions__item__summary__content__icon" />
                        </AccordionSummary>
                        <AccordionDetails classes={DetailsClasses}>
                            <a href="#" title="Quem somos">Quem somos</a>
                            <a href="#" title="Prazo de Envio">Prazo de Envio</a>
                            <a href="#" title="Trocas e Devoluções">Trocas e Devoluções</a>
                            <a href="#" title="Promoções e Cupons">Promoções e Cupons</a>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion disableGutters="true" classes={AccordionClasses}>
                        <AccordionSummary classes={SummaryClasses}>
                            <p>Minha Conta</p>
                            <div className="footer__accordions__item__summary__content__icon" />
                        </AccordionSummary>
                        <AccordionDetails classes={DetailsClasses}>
                            <a href="#" title="Minha Conta">Minha Conta</a>
                            <a href="#" title="Meus Pedidos">Meus Pedidos</a>
                            <a href="#" title="Cadastre-se">Cadastre-se</a>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion disableGutters="true" classes={AccordionClasses}>
                        <AccordionSummary classes={SummaryClasses}>
                            <p>Onde nos Encontrar</p>
                            <div className="footer__accordions__item__summary__content__icon" />
                        </AccordionSummary>
                        <AccordionDetails classes={DetailsClasses}>
                            <a href="#" title="Lojas">Lojas</a>
                            <a href="#" title="Endereço">Endereço</a>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ) : (
                <div className="footer__links container-footer">
                    <div className="footer__links__column">
                        <p>Informações</p>
                        <div className="footer__links__column__anchors">
                            <a href="#" title="Quem somos">Quem somos</a>
                            <a href="#" title="Prazo de Envio">Prazo de Envio</a>
                            <a href="#" title="Trocas e Devoluções">Trocas e Devoluções</a>
                            <a href="#" title="Promoções e Cupons">Promoções e Cupons</a>
                        </div>
                    </div>

                    <div className="footer__links__column">
                        <p>Minha Conta</p>
                        <div className="footer__links__column__anchors">
                            <a href="#" title="Minha Conta">Minha Conta</a>
                            <a href="#" title="Meus Pedidos">Meus Pedidos</a>
                            <a href="#" title="Cadastre-se">Cadastre-se</a>
                        </div>
                    </div>

                    <div className="footer__links__column">
                        <p>Onde nos Encontrar</p>
                        <div className="footer__links__column__anchors">
                            <a href="#" title="Lojas">Lojas</a>
                            <a href="#" title="Endereço">Endereço</a>
                        </div>
                    </div>
                </div>
            )
        }

        <div className="footer__bottom">
            <div className="container">
                <div className="footer__bottom">
                    <div className="footer__bottom__social">
                        <a href="#" title="Facebook" className="footer__bottom__social__icon">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="#" title="Linkedin" className="footer__bottom__social__icon">
                            <img src={linkedin} alt="Linkedin" />
                        </a>
                        <a href="#" title="Instagram" className="footer__bottom__social__icon">
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="#" title="Youtube" className="footer__bottom__social__icon">
                            <img src={youtube} alt="Youtube" />
                        </a>
                    </div>
                    <div className="footer__bottom__payment">
                        <img src={visa} alt="Visa" />
                        <img src={mastercard} alt="Mastercard" />
                        <img src={visa} alt="Visa" />
                        <img src={mastercard} alt="Mastercard" />
                    </div>
                    <div className="footer__bottom__organizers">
                        <div className="footer__bottom__organizers__powered">
                            <p>Powered by</p>
                            <img src={vtex} alt="VTEX" />
                        </div>
                        <div className="footer__bottom__organizers__developed">
                            <p>Developed by</p>
                            <img src={maeztra} alt="Maeztra" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

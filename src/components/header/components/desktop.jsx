import logo from "../../../assets/logo-header.svg";
import user from "../../../assets/icon-user.svg";
import heart from "../../../assets/icon-heart.svg";
import bag from "../../../assets/icon-shoppingbag.svg";

const HeaderDesktop = () => {
  return (
    <div className="header__content">
      <div className="container">
        <div className="header__content__logo">
          <img src={logo} width="147" alt="Maeztra Store" />
        </div>

        <div className="header__content__search">
          <input type="text" placeholder="O Que Você Busca?" />
          <button type="button" title="Buscar">Buscar</button>
        </div>

        <div className="header__content__interactive">
          <div className="header__content__interactive__account header__content__interactive__item">
            <a href="#" title="Minha conta">
              <img src={user} width="14" alt="Ícone de usuário" />
              <p>Minha Conta</p>
            </a>
          </div>

          <div className="header__content__interactive__wishlist header__content__interactive__item">
            <a href="#" title="Meus Favoritos">
              <img src={heart} width="18" alt="Ícone de coração" />
              <p>Meus Favoritos</p>
            </a>
          </div>

          <div className="header__content__interactive__cart header__content__interactive__item">
            <button title="Meu Carrinho">
              <img src={bag} width="14" alt="Ícone de sacola" />
              <p>Meu Carrinho</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;

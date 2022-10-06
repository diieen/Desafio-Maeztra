import menu from '../../../assets/icon-menu.svg';
import bag from '../../../assets/icon-shoppingbagmobile.svg';
import logo from '../../../assets/logo-header.svg';
import search from '../../../assets/icon-busca.svg';

const HeaderMobile = () => {
    return (
        <div className="header__content">
            <div className="header__content__left">
                <button title="Menu" className="header__content__left__menu">
                    <img src={menu} width="24" alt="Ícone de menu" />
                </button>

                <div className="header__content__left__logo">
                    <img src={logo} width="110" alt="Maeztra Store" />
                </div>
            </div>

            <div className="header__content__right">
                <button title="Pesquisar" className="header__content__right__search">
                    <img src={search} width="24" alt="Ícone de pesquisa" />
                </button>
                <button title='Meu Carrinho' className="header__content__right__cart">
                    <img src={bag} width="21" alt="Ícone de sacola" />
                </button>
            </div>
        </div>
    )
}

export default HeaderMobile;
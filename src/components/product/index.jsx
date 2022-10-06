import { useState } from 'react';

import "./style.scss";

const Product = (props) => {
    const [selectedSku, setSelectedSku] = useState(0);

    return (
        <div className="product">
            <a href={props.url}>
                <div className="product__img">
                    <img src={props.img} alt={props.name} width="100%" />
                </div>
            </a>
            <div className="product__section">
                <div className="product__section__infos">
                    <div className="product__section__skus">
                        {
                            props.colors.map((color, index) => {
                                return (
                                    <div 
                                        className={`product__section__skus__item${selectedSku == index ? ' product__section__skus__item--active' : ''}`}
                                        key={index} 
                                        style={{background: color}}
                                        onClick={() => setSelectedSku(index)} 
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="product__section__price">
                        <p>{props.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                    <div className="product__section__name">
                        <p>{props.name}</p>
                    </div>
                    <div className="product__section__description">
                        <p>{props.description}</p>
                    </div>
                </div>
                <button className="product__section__addToCart" title="Adicionar">
                    Adicionar
                </button>
            </div>
        </div>
    )
}

export default Product;
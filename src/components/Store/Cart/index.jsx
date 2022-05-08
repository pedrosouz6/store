import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { useAmountProduct } from '../../../hooks/Store/AmountProduct/index';

import StoreTotal from '../Total';

import { Container } from "./style";

export default function StoreCart() {

    const { modifyAmount, setModifyAmount } = useAmountProduct();

    const [ productsCart, setProductsCart ] = useState([]);
    const [ priceProducts, setPriceProducts ] = useState(0);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        setProductsCart(products);

        if(products.length > 0) {
            let totalPrice = 0;

            for(let i = 0; i < products.length; i++) {
                totalPrice += products[i].price_product;
            }

            setPriceProducts(totalPrice);
        }

    }, [modifyAmount]);


    function DeleteProductCart(id) {
        const productsDelete = productsCart.filter(item => item.id_product !== id);
        localStorage.setItem('products', JSON.stringify(productsDelete));

        setModifyAmount(!modifyAmount);
    }

    return (
        <Container>
            <div className="center--store">
                <div className="store--cart__container">
                    <div className="store--cart__products">
                        <h1>Seu carrinho</h1>
                        { productsCart.length > 0 &&
                        <p>Total de {productsCart.length} produto(s) e R$ {priceProducts},00 </p> }
                        
                        <div className="store--cart__products__cards">
                            { productsCart.length === 0 ? 
                            <p id='message--cart'>Seu carrinho está vazio.</p> :

                            productsCart.map((item, key) => (
                                <div className="store--cart__card" key={key}>
                                    <div className="store--cart__img">
                                        <img src={item.url_product} alt="Imagem do produto" />
                                    </div>
                                    <div className="store--cart__content">
                                        <div className="store--cart__title">
                                            <h3>{ item.name_product }</h3>
                                            <button onClick={() => DeleteProductCart(item.id_product)}>
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                        <div className="store--cart__description">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur expedita nulla exercitationem voluptates, sint quaerat deleniti, velit, nostrum dolorum sequi aperiam quos quas harum sunt soluta tempora iusto accusantium.</p>
                                        </div>
                                        <div className="store--cart__price">
                                            <span>R$ {item.price_product},00</span>
                                        </div>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                    <StoreTotal priceProducts={priceProducts} />
                </div>
            </div>
        </Container>
    )
} 
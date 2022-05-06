import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { useAmountProduct } from '../../../hooks/Store/AmountProduct/index';

import ButtonBack from '../ButtonBack/index';
import StoreTotal from '../Total';

import { Container } from "./style";

export default function StoreCart() {

    const { modifyAmount, setModifyAmount } = useAmountProduct();

    const [ productsCart, setProductsCart ] = useState([]);

    const [ priceProducts, setPriceProducts ] = useState(0);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')) || [];

        if(products) {

            if(products.length > 0) {
            let priceTotal = 0;
    
                for(let i = 0; i < products.length; i++){
                    priceTotal += products[i].price_product;
                }
                setPriceProducts(priceTotal);
            }
            setProductsCart(products);
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
                <ButtonBack />
                <div className="store--cart__container">
                    <div className="store--cart__products">
                        <h1>Seu carrinho</h1>
                        <p>Total ({ 
                            productsCart.length === 1 ? 
                            `${productsCart.length} produtos` :
                            `${productsCart.length} produtos` }) R$ {priceProducts},00
                        </p>

                        <div className="store--cart__products__cards">
                            { productsCart.length === 0 ? 
                            'Seu carrinho está vazio' :
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
                                            <select>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
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
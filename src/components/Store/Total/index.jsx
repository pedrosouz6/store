import { useEffect, useState } from 'react';

import ModalThanks from '../Modal/Thanks/index';
import { useAmountProduct } from '../../../hooks/Store/AmountProduct/index';
import { instance } from '../../../services/index';

import { Container } from "./style";

export default function StoreTotal({ priceProducts, productsCart }) {
    console.log(productsCart)

    const { modifyAmount } = useAmountProduct();
    const [ empty, setEmpty ] = useState(true);
    const [ thanks, setThanks ] = useState(false);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        if(products.length < 1) {
            return setEmpty(false);
        }

        return setEmpty(true);
    }, [modifyAmount]);

    const id_products = productsCart.map(item => item.id_product);

    function ModalThanksValidate() {
        instance.post('/buy/product', {
            id_client: 1, 
            id_products
        });
        if(empty) {
            setThanks(!thanks);
        }
    }

    return (
        <Container>
            { thanks && <ModalThanks thanks={thanks} setThanks={setThanks} /> }
            <h2>Resumo do pedido</h2>
            <div className="store--total__total__products">
                <p>Total de produtos</p>
                <p>R$ { empty ? priceProducts : '0' },00</p>
            </div>
            <div className={priceProducts > 900 ? "store--total__total__delivery none" : "store--total__total__delivery"}>
                <p>Entrega</p>
                <p>R$ 45,00</p>
            </div>
            <div className="store--total__total__final">
                <p><strong>Total</strong></p>
                <p><strong>R$ { empty ? priceProducts > 900 ? priceProducts : priceProducts + 45 : '0'},00</strong></p>
            </div>
            <div className="store--total__button__buy">
                <button onClick={() => ModalThanksValidate()}>Finalizar compra</button>
            </div>
        </Container>
    )
}
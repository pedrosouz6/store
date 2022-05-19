import { useEffect, useState } from 'react';

import ModalThanks from '../Modal/Thanks/index';
import ModalCreateAccount from '../Modal/CreateAccount';
import ModalNoProduct from '../Modal/NoProduct';

import { useAmountProduct } from '../../../hooks/Store/AmountProduct/index';
import { useUser } from '../../../hooks/User/index';
import { instance } from '../../../services/index';

import { Container } from "./style";

export default function StoreTotal({ priceProducts, productsCart }) {

    const { modifyAmount } = useAmountProduct();
    const { userLogged } = useUser();

    const [ empty, setEmpty ] = useState(true);
    const [ thanks, setThanks ] = useState(false);
    const [ createAccount, setCreateAccount ] = useState(false);
    const [ noProduct, setNoProduct ] = useState(false);

    const user = JSON.parse(localStorage.getItem('user') || null);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        if(products.length < 1) {
            return setEmpty(true);
        }

        return setEmpty(false);
    }, [modifyAmount]);

    const id_products = productsCart.map(item => item.id_product);

    function ModalThanksValidate(id) {
        console.log(id)
        instance.post('/buy/product', {
            id_client: id, 
            id_products
        });
        if(!empty) {
            setThanks(!thanks);
        }
    }

    function ValidateUserLogged() {
        if(empty) {
            return setNoProduct(true);
        }
        
        if(userLogged) {
            ModalThanksValidate(user.user.id);
            return setCreateAccount(false);
        }

        setCreateAccount(true);
    }

    return (
        <Container>
            { thanks && <ModalThanks thanks={thanks} setThanks={setThanks} /> }

            { noProduct && <ModalNoProduct setNoProduct={setNoProduct} /> }

            { createAccount && <ModalCreateAccount createAccount={createAccount} setCreateAccount={setCreateAccount} /> }

            <h2>Resumo do pedido</h2>
            <div className="store--total__total__products">
                <p>Total de produtos</p>
                <p>R$ { !empty ? priceProducts : '0' },00</p>
            </div>
            <div className={priceProducts > 900 ? "store--total__total__delivery none" : "store--total__total__delivery"}>
                <p>Frete</p>
                <p>R$ 40,00</p>
            </div>
            <div className="store--total__total__final">
                <p><strong>Total</strong></p>
                <p><strong>R$ { !empty ? priceProducts > 900 ? priceProducts : priceProducts + 40 : '0'},00</strong></p>
            </div>
            <div className="store--total__button__buy">
                <button onClick={() => ValidateUserLogged()}>Finalizar compra</button>
            </div>
        </Container>
    )
}
import { RiShoppingBag3Fill } from 'react-icons/ri';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from '../../../services/index';
import { useAmountProduct } from '../../../hooks/Store/AmountProduct/index';

import { Container } from "./style";

export default function StoreDetails() {

    const { id } = useParams();

    const { modifyAmount, setModifyAmount } = useAmountProduct();
    const [ datasDetails, setDatasDetails ] = useState([]);
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem('products')) || [] );

        instance.get(`/get/details/${id}`)
        .then(response => response.data)
        .then(respost => {
            if(respost.error) {
                return console.log(respost.message);
            }

            return setDatasDetails(respost.results[0]);
        })
    }, []);

    function AddProduct() {
        setModifyAmount(!modifyAmount);
        const validateProduct = products.filter(item => item.id_product == id);

        if(validateProduct.length == 0) {
            return setProducts([...products, datasDetails]);
        }
    }

    if(products.length > 0) {
        localStorage.setItem('products', JSON.stringify(products));
    }

    return (
        <Container>
            <div className="center--store">
                <div className="store--details__container">
                    <div className="store--details__img">
                        <img src={datasDetails.url_product} alt="Imagem do produto" />
                    </div>
                    <div className="store--details__info">
                        <div className="store--details__category">
                            <h4>{datasDetails.category_product}</h4>
                        </div>

                        <div className="store--details__name__product">
                            <h3>{datasDetails.brand_product} {datasDetails.name_product}</h3>
                        </div>

                        <div className="store--details__price">
                            <p><strong>R$ {datasDetails.price_product},00</strong></p>
                        </div>

                        <div className="store--details__freight">
                            <span>
                                * Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$ 900,00.
                            </span>
                        </div>

                        <div className="store--details__description">
                            <h4>Descrição</h4>
                            {
                                datasDetails.description_product ? 
                                datasDetails.description_product : (
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga rem distinctio, delectus ipsa amet at omnis dolore vitae, dolorum iusto incidunt quibusdam aliquam. Delectus modi, asperiores possimus laudantium rem porro.</p>
                            )}
                        </div>

                        <div className="store--details__button__add">
                            <button onClick={() => AddProduct()}>
                                <i><RiShoppingBag3Fill /></i>  Adicionar ao carrinho
                            </button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </Container>
    )
}
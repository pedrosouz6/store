import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { instance } from "../../../services";
import StoreFilter from "../Filter";

import { Container } from "./style";

export default function StoreSlipper() {

    const [ datasSlipper, setDatasSlipper ] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        instance.get('/get/slipper')
        .then(response => response.data)
        .then(respost => setDatasSlipper(respost.results));
    }, []);

    function PageDetails(id) {
        navigate(`/details/${id}`)
    }

    return (
        <Container>
            <div className="center--store">
                <div className="store--slipper__container">
                    <div className="store--slipper__title__filter">
                        <h1>Chinelo</h1>
                        <StoreFilter />
                    </div>
                </div>

                <div className="store--slipper__container__cards">
                    { datasSlipper.map((item, key) => (
                        <div className="store--slipper__cards" key={key} onClick={() => PageDetails(item.id_product)}>
                            <div className="store--slipper__cards__image">
                                <img src={item.url_product} alt="" />
                            </div>
                            <div className="store--slipper__cards__content">
                                <div className="store--slipper__cards__content__brand">
                                    <p>{ item.brand_product }</p>
                                </div>

                                <div className="store--slipper__cards__content__name">
                                    <p>{ item.name_product } - { item.gender_product }</p>
                                </div>

                                <div className="store--slipper__cards__content__price">
                                    <p>R$ {item.price_product},00</p>
                                </div>
                            </div>
                        </div>  
                    )) }
                </div>

            </div>
        </Container>
    )
}
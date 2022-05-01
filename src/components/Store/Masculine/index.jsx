import { useEffect, useState } from "react";

import { instance } from "../../../services";
import StoreFilter from "../Filter";

import { Container } from "./style";

export default function StoreSlipper() {

    const [ datasMasculine, setDatasMasculine ] = useState([]);

    useEffect(() => {
        instance.get('/get/masculine')
        .then(response => response.data)
        .then(respost => setDatasMasculine(respost.results));
    }, []);

    // datasMasculine.sort((one, two) => {
    //     console.log(one.price_product - two.price_product)
    // })

    return (
        <Container>
            <div className="center--store">
                <div className="store--masculine__container">
                    <div className="store--masculine__title__filter">
                        <h1>Masculino</h1>
                        <StoreFilter />
                    </div>
                </div>

                <div className="store--masculine__container__cards">
                    { datasMasculine.map((item, key) => (
                        <div className="store--masculine__cards" key={key}>
                            <div className="store--masculine__cards__image">
                                <img src={item.url_product} alt="" />
                            </div>
                            <div className="store--masculine__cards__content">
                                <div className="store--masculine__cards__content__brand">
                                    <p>{ item.brand_product }</p>
                                </div>

                                <div className="store--masculine__cards__content__name">
                                    <p>{ item.name_product } - { item.gender_product }</p>
                                </div>

                                <div className="store--masculine__cards__content__price">
                                    <p>R$ {item.price_product},00</p>
                                </div>

                                <div className="store--masculine__cards__button__add">
                                    <button>Adicionar a sacola</button>
                                </div>
                            </div>

                        </div>  
                    )) }
                </div>

            </div>
        </Container>
    )
}
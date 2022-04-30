import { useEffect, useState } from "react";
import { instance } from "../../../services";

import { Container } from "./style";

export default function StoreSlipper() {

    const [ datasSlipper, setDatasSlipper ] = useState([]);

    useEffect(() => {
        instance.get('/get/slipper')
        .then(response => response.data)
        .then(respost => setDatasSlipper(respost.results));
    }, []);

    console.log(datasSlipper)

    return (
        <Container>
            <div className="center--store">
                <div className="store--slipper__container">
                    <div className="store--slipper__header">
                        <h1>Chinelo</h1>
                    </div>
                </div>

                <div className="store--sneakers__container__cards">
                    { datasSlipper.map((item, key) => (
                        <div className="store--sneakers__cards" key={key}>
                            <div className="store--sneakers__cards__image">
                                <img src={item.url_product} alt="" />
                            </div>
                            <div className="store--sneakers__cards__content">
                                <div className="store--sneakers__cards__content__brand">
                                    <p>{ item.brand_product }</p>
                                </div>

                                <div className="store--sneakers__cards__content__name">
                                    <p>{ item.name_product } - { item.gender_product }</p>
                                </div>

                                <div className="store--sneakers__cards__content__price">
                                    <p>R$ {item.price_product},00</p>
                                </div>

                                <div className="store--sneakers__cards__button__add">
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
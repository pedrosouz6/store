import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { instance } from "../../../services";
import StoreFilter from "../Filter";

import { Container } from "./style";

export default function StoreSlipper() {

    const [ datasFeminine, setDatasFeminine ] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        instance.get('/get/feminine')
        .then(response => response.data)
        .then(respost => setDatasFeminine(respost.results));
    }, []);

    function PageDetails(id) {
        navigate(`/details/${id}`)
    }

    return (
        <Container>
            <div className="center--store">
                <div className="store--feminine__container">
                    <div className="store--feminine__title__filter">
                        <h1>Feminino</h1>
                        <StoreFilter />
                    </div>
                </div>

                <div className="store--feminine__container__cards">
                    { datasFeminine.map((item, key) => (
                        <div className="store--feminine__cards" key={key}onClick={() => PageDetails(item.id_product)}>
                            <div className="store--feminine__cards__image">
                                <img src={item.url_product} alt="" />
                            </div>
                            <div className="store--feminine__cards__content">
                                <div className="store--feminine__cards__content__brand">
                                    <p>{ item.brand_product }</p>
                                </div>

                                <div className="store--feminine__cards__content__name">
                                    <p>{ item.name_product } - { item.gender_product }</p>
                                </div>

                                <div className="store--feminine__cards__content__price">
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
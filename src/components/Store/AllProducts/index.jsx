import { useProducts } from "../../../hooks/Products";

import StoreAllProductsFilter from "./Filter";
import StoreFooter from "../Footer";
import { Container } from "./style";

export default function StoreAllProducts(){

    const { datasProducts } = useProducts();

    console.log(datasProducts)

    return (
        <Container>
            <div className="center--store">
                <div className="store--all--products__container">
                    <div className="store--all--products__title__filter">

                        <h1>Todos os produtos</h1>
                        <StoreAllProductsFilter />

                    </div>

                    <div className="store--all--products__container__cards">
                        { datasProducts.map((item, key) => (
                            <div className="store--all--products__cards" key={key}>
                                <div className="store--all--products__cards__image">
                                    <img src={item.url_product} alt="" />
                                </div>
                                <div className="store--all--products__cards__content">
                                    <div className="store--all--products__cards__content__brand">
                                        <p>{ item.brand_product }</p>
                                    </div>

                                    <div className="store--all--products__cards__content__name">
                                        <p>{ item.name_product } - { item.gender_product }</p>
                                    </div>

                                    <div className="store--all--products__cards__content__price">
                                        <p>R$ {item.price_product},00</p>
                                    </div>

                                </div>
                            </div>  
                        )) }
                    </div>
                </div>
            </div>
            <StoreFooter />
        </Container>
    )
}
import { useProducts } from "../../../hooks/Products";

import StoreAllProductsFilter from "./Filter";
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
                                {item.name_product}
                            </div>  
                        )) }
                    </div>
                </div>
            </div>
        </Container>
    )
}
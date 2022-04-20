import DashboardProductsAllProductsProducts from './Products/index';
import Search from './Search/index';

import { Container } from "./style";

export default function DashboardProductsAllProducts() {
    return (
        <Container>
            <div className="center--dashboard">
                <div className="dashboard--all--products__container">
                    <div className="dashboard--all--products__title__search">
                        <h2>Todos os produtos</h2>
                        <Search />
                    </div>
                    <DashboardProductsAllProductsProducts />
                </div>
            </div>
        </Container>
    )
}
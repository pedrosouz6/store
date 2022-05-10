import DashboardProductsAllProductsProducts from './Products/index';
import Search from './Search/index';
import Title from '../../Title';

import { useProducts } from '../../../../hooks/Products';

import { Container } from "./style";


export default function DashboardProductsAllProducts() {

    const { errorAPI, datasProducts } = useProducts();

    return (
        <Container>
            <div className="center--dashboard">
                <div className="dashboard--all--products__container">
                    <div className="dashboard--all--products__title__search">
                        <Title text='Todos os produtos' />
                        { !errorAPI && <Search /> }
                        
                    </div>
                    <DashboardProductsAllProductsProducts />
                </div>
            </div>
        </Container>
    )
}
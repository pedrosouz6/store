import { useEffect, useState } from 'react';
import { useProducts } from '../../../../../hooks/Products/index';

import { Container } from "./style";

export default function DashboardProductsAllProductsSearch() {

    const { datasProducts, setDatasProducts } = useProducts();

    const [ statusValue, setStatusValue ] = useState('');

    function SearchStatus(status) {
        let filter = datasProducts.filter(item => item.status_product == status);
        setDatasProducts(filter);
    }

    return (
        <Container>
            <div className="search--product">
                <input type="text" placeholder="Nome do produto" />
            </div>

            <select>
                <option>Marca</option>
            </select>

            <select>
                <option>Categoria</option>
            </select>

            <select onChange={(e) => SearchStatus(e.target.value)}>
                <option value=''>Status</option>
                <option value='1'>Ativo</option>
                <option value='0'>Desativo</option>
            </select>
        </Container>
    )
}
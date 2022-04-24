import { useEffect, useState } from 'react';
import { useProducts } from '../../../../../hooks/Products/index';
import { instance } from '../../../../../services';

import { Container } from "./style";

export default function DashboardProductsAllProductsSearch() {

    const { datasProducts, setProductsFilters } = useProducts();

    const [ nameProduct, setNameProduct ] = useState('');
    const [ brandProduct, setBrandProduct ] = useState('');
    const [ categoryProduct, setCategoryProduct ] = useState('');
    const [ statusValue, setStatusValue ] = useState('');
    
    useEffect(() => {
        instance.post(`/filter/products`, {
            nameProduct,
            brandProduct,
            categoryProduct,
            statusValue
        })
        .then(response => response.data)
        .then(respost => setProductsFilters(respost.results))
    }, [nameProduct, brandProduct, categoryProduct, statusValue]);


    return (
        <Container>
            
            <div className="search--product">
                <input
                type="text"
                placeholder="Nome do produto"
                onChange={(e) => setNameProduct(e.target.value)} />
            </div>

            <select onChange={(e) => setBrandProduct(e.target.value)}>

                <option value="">Marca</option>

                { datasProducts.map((item, key) => (
                    <option value={item.brand_product} key={key}>
                        { item.brand_product }
                    </option>
                )) }

            </select>

            <select onChange={(e) => setCategoryProduct(e.target.value)}>

                <option value=''>Categoria</option>

                { datasProducts.map((item, key) => (
                    <option value={item.category_product} key={key}>
                        { item.category_product }
                    </option>
                )) }

            </select>

            <select onChange={(e) => setStatusValue(e.target.value)}>
                <option value=''>Status</option>
                <option value='1'>Ativo</option>
                <option value='0'>Desativo</option>
            </select>

        </Container>
    )
}
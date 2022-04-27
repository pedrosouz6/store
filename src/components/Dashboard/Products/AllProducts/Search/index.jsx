import { useEffect, useState } from 'react';
import { useProducts } from '../../../../../hooks/Products/index';
import { instance } from '../../../../../services';

import { Container } from "./style";

export default function DashboardProductsAllProductsSearch() {

    const { datasProducts, setProductsFilters, addNewProduct } = useProducts();

    const [ nameProducts, setNameProducts ] = useState('');
    const [ brandProduct, setBrandProduct ] = useState('');
    const [ categoryProduct, setCategoryProduct ] = useState('');
    const [ genderProduct, setGenderProduct ] = useState('');
    const [ statusValue, setStatusValue ] = useState('');

    const brandNoRepeat = new Set();
    const categoryNoRepeat = new Set();
    const genderNoRepeat = new Set();

    datasProducts.forEach(element => {
        brandNoRepeat.add(element.brand_product);
        categoryNoRepeat.add(element.category_product);
        genderNoRepeat.add(element.gender_product);
    });

    useEffect(() => {
        const nameProduct = nameProducts.trim();
        instance.post(`/filter/products`, {
            nameProduct,
            brandProduct,
            categoryProduct,
            statusValue,
            genderProduct
        })
        .then(response => response.data)
        .then(respost => {
            setProductsFilters(respost.results);
        })
    }, [nameProducts, brandProduct, categoryProduct, statusValue, addNewProduct, genderProduct]);


    return (
        <Container>
            
            <div className="search--product">
                <input
                type="text"
                placeholder="Nome do produto"
                onChange={(e) => setNameProducts(e.target.value)} />
            </div>

            <select onChange={(e) => setBrandProduct(e.target.value)}>

                <option value="">Marca</option>

                { [...brandNoRepeat].map((item, key) => (
                    <option value={item} key={key}>
                        { item }
                    </option>
                )) }

            </select>

            <select onChange={(e) => setCategoryProduct(e.target.value)}>

                <option value=''>Categoria</option>

                { [...categoryNoRepeat].map((item, key) => (
                    <option value={item} key={key}>
                        { item }
                    </option>
                )) }

            </select>

            <select onChange={(e) => setGenderProduct(e.target.value)}>

                <option value=''>Gênero</option>

                { [...genderNoRepeat].map((item, key) => (
                    <option value={item} key={key}>
                        { item }
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
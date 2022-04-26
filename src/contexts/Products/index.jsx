import { createContext, useState, useEffect } from "react";

import { instance } from '../../services/index';

export const ContextProducts = createContext();

export default function ProviderProducts({ children }) {

    const [ datasProducts, setDatasProducts ] = useState([]);
    const [ productsFilters, setProductsFilters ] = useState([]);
    const [ addNewProduct, setAddNewProduct ] = useState(false);
    const [ errorAPI, setErroAPI ] = useState(false);

    useEffect(() => {
        instance.get('/get/products')
        .then(response => response.data)
        .then(respost => {
            setErroAPI(respost.error);

            if(!respost.error) {
                setErroAPI(respost.error)
                setDatasProducts(respost.results);
            }
        });
    }, [addNewProduct]);

    return(
        <ContextProducts.Provider value={{
            datasProducts,
            productsFilters,
            setProductsFilters,
            addNewProduct,
            setAddNewProduct,
            errorAPI
        }}>

            { children }

        </ContextProducts.Provider>
    )
}
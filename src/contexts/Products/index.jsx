import { createContext, useState, useEffect } from "react";

import { instance } from '../../services/index';

export const ContextProducts = createContext();

export default function ProviderProducts({ children }) {

    const [ datasProducts, setDatasProducts ] = useState([]);
    const [ addNewProduct, setAddNewProduct ] = useState(false);

    useEffect(() => {
        instance.get('/get/products')
        .then(response => response.data)
        .then(respost => setDatasProducts(respost.results));
    }, [addNewProduct])

    return(
        <ContextProducts.Provider value={{
            datasProducts,
            addNewProduct,
            setAddNewProduct
        }}>

            { children }

        </ContextProducts.Provider>
    )
}
import { createContext, useState, useEffect } from "react";

import { instance } from "../../services";

export const ContextSales = createContext();

export default function ProviderSales({ children }) {

    const [ purchases, setPurchases ] = useState([]);

    useEffect(() => {
        instance.get('/get/buy')
        .then(response => response.data)
        .then(respost => setPurchases(respost));
    }, [])

    return (
        <ContextSales.Provider value={{
            purchases
        }}>

            { children }

        </ContextSales.Provider>
    )
}
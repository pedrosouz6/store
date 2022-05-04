import { useState, createContext } from "react";

export const ContextAmountProduct = createContext();

export default function ProviderAmountProduct({ children }){

    const [ modifyAmount, setModifyAmount ] = useState(false);

    return (
        <ContextAmountProduct.Provider value={{
            modifyAmount,
            setModifyAmount
        }}>

            { children }

        </ContextAmountProduct.Provider>
    )
}
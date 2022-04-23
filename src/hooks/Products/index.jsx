import { useContext } from "react";
import { ContextProducts } from "../../contexts/Products";

export const useProducts = () => {
    return useContext(ContextProducts);
}
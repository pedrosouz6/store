import { ContextSales } from '../../contexts/Sales/index';
import { useContext } from 'react';

export const useSales = () => {
    return useContext(ContextSales);
}
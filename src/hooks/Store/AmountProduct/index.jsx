import { useContext } from 'react';
import { ContextAmountProduct } from '../../../contexts/Store/AmountProduct/index';

export const useAmountProduct = () => {
    return useContext(ContextAmountProduct);
}
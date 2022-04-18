import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GrMoney } from 'react-icons/gr';

import { Aside } from './style';

export default function AsideDashboard() {
    return (
        <Aside>
            <i><FaCartPlus /></i>
            <AiOutlineShoppingCart />
            <GrMoney /> 
        </Aside>
    )
}
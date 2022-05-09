import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdAddShoppingCart } from 'react-icons/md';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

import { Aside } from './style';

export default function AsideDashboard() {

    const [ asideClose, setAsideClose ] = useState(false);

    function AsideClose() {
        setAsideClose(!asideClose);
        localStorage.setItem('preferenceAside', !asideClose);
    }

    useEffect(() => {
        const preference = localStorage.getItem('preferenceAside');
        const responsePreference = JSON.parse(preference);

        if(responsePreference) {
            return setAsideClose(responsePreference);
        }
    }, [])

    return (
        <Aside closeAside={asideClose}>
            <div className="aside--dashboard__container">
                <div className="aside--dashboard__header">
                    <i onClick={() => AsideClose()}>
                        { asideClose ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold /> }
                    </i>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to='/dashboard/products' activeclassname='active'>
                                <i><MdAddShoppingCart /></i>
                                <span className={asideClose ? 'removeNames' : ''}>Produtos</span>
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to='/dashboard/sales' activeclassname='active'>
                                <i><MdOutlineAttachMoney /></i>
                                <span className={asideClose ? 'removeNames' : ''}>Vendas</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Aside>
    )
}
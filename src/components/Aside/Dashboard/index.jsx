import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    } 

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
                            <Link to='/dashboard'>
                                <i><MdAddShoppingCart /></i>
                                <span className={asideClose ? 'removeNames' : ''}>Produtos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>
                                <i><AiOutlineShoppingCart /></i>
                                <span className={asideClose ? 'removeNames' : ''}>Pedidos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>
                                <i><MdOutlineAttachMoney /></i>
                                <span className={asideClose ? 'removeNames' : ''}>Vendas</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Aside>
    )
}
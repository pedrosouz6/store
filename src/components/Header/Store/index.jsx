import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { RiShoppingBag3Fill } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';

import { useAmountProduct } from '../../../hooks/Store/AmountProduct/index';

import StoreSearch from '../../Store/Search';
import { Header } from './style';

export default function HeaderStore() {

    const navigate = useNavigate();
    const { modifyAmount } = useAmountProduct();

    const [ amountProducts, setAmountProducts ] = useState([]);

    function PageCart() {
        navigate('/cart');
    }

    useEffect(() => {
        setAmountProducts(JSON.parse(localStorage.getItem('products')) || []);
    }, [modifyAmount])

    return (
        <Header>
            <div className="center--store">
                <div className="header--store__container">

                    <div className="header--store__top">
                        <div className="header--store__logo">
                            <h1>Logo</h1>   
                        </div>

                        <nav>
                            <ul>
                                <li><StoreSearch /></li>
                                <li onClick={() => PageCart()} id='amount__products'>
                                    
                                    <button>
                                        <i><RiShoppingBag3Fill /></i>
                                        <span>{ amountProducts.length }</span>
                                    </button>
                                    
                                </li>

                                <li id='menu__responsive'>
                                    <button>
                                        <i><AiOutlineMenu /></i>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header--store__bottom">
                        <nav>
                            <ul>
                                <li><NavLink to='/' activeclassname='active'>Todos os produtos</NavLink></li>
                                <li><NavLink to='/news' activeclassname='active'>Novidades</NavLink></li>
                                <li><NavLink to='/sneakers' activeclassname='active'>Tênis</NavLink></li>
                                <li><NavLink to='/slipper' activeclassname='active' >Chinelo</NavLink></li>
                                <li><NavLink to='/masculine' activeclassname='active' >Masculino</NavLink></li>
                                <li><NavLink to='/feminine' activeclassname='active' >Feminino</NavLink></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </Header>
    )
}
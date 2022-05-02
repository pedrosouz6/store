import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import StoreSearch from '../../Store/Search';
import { Header } from './style';

export default function HeaderStore() {

    const navigate = useNavigate();

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
                                <li><Link to='/register'>login/criar conta</Link></li>
                                <li onClick={() => navigate('/cart')}>
                                    <Link to='/'><i><AiOutlineShoppingCart /></i></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header--store__bottom">
                        <nav>
                            <ul>
                                <li><NavLink to='/' activeClassName='active'>Todos os produtos</NavLink></li>
                                <li><NavLink to='/news' activeClassName='active'>Novidades</NavLink></li>
                                <li><NavLink to='/sneakers' activeClassName='active'>Tênis</NavLink></li>
                                <li><NavLink to='/slipper' activeClassName='active' >Chinelo</NavLink></li>
                                <li><NavLink to='/masculine' activeClassName='active' >Masculino</NavLink></li>
                                <li><NavLink to='/feminine' activeClassName='active' >Feminino</NavLink></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </Header>
    )
}
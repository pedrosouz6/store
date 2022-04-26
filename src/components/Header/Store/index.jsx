import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import StoreSearch from '../../Store/Search';
import { Header } from './style';

export default function HeaderStore() {
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
                                <li>login/criar conta</li>
                                <li>
                                    <Link to='/'><i><AiOutlineShoppingCart /></i></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header--store__bottom">
                        <nav>
                            <ul>
                                <li>Novidades</li>
                                <li>Tênis</li>
                                <li>Masculino</li>
                                <li>Feminino</li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </Header>
    )
}
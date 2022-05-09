import { Link } from 'react-router-dom';

import { Header } from './style';

import { MdKeyboardArrowDown } from 'react-icons/md';

export default function HeaderDashboard() {
    return (
        <Header>
            <div className="header--dashboard__container">
                <Link to='/'>loja/<span>dev.com</span></Link>


                <div className="header--dashboard__user">
                    <span>Pedro</span>
                    <div className="img"></div>
                    <i><MdKeyboardArrowDown /></i>
                </div>
            </div>
        </Header>
    )
}
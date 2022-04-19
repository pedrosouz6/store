import { Header } from './style';

import { MdKeyboardArrowDown } from 'react-icons/md';

export default function HeaderDashboard() {
    return (
        <Header>
            <div className="header--dashboard__container">
                <h1>Dashboard</h1>

                <div className="header--dashboard__user">
                    <span>Pedro</span>
                    <div className="img"></div>
                    <i><MdKeyboardArrowDown /></i>
                </div>
            </div>
        </Header>
    )
}
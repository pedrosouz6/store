import AsideDashboard from '../../components/Aside/Dashboard/index';
import HeaderDashboard from '../../components/Header/Dashboard/index';

import { Main } from './style';

export default function Dashboard() {
    return (
        <Main>
            <div className="page--dashboard__container">
                <div className="page--dashboard__aside">
                    <AsideDashboard /> 
                </div>

                <div className="page--dashboard__header__content">
                    <HeaderDashboard />
                    <div className="center--dashboard">
                        <div className="page--dashboard__content">
                            <h2>Conteudo</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
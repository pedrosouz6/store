import AsideDashboard from '../../../components/Aside/Dashboard/index';
import HeaderDashboard from '../../../components/Header/Dashboard/index';
import DashboardProducts from '../../../components/Dashboard/Products';

import { Main } from './style';

export default function Dashboard() {
    return (
        <Main>
            <div className="page--dashboard__container">
                <AsideDashboard /> 

                <section className="page--dashboard__header__content">
                    <HeaderDashboard />
                    <DashboardProducts />
                </section>  
            </div>
        </Main>
    )
}
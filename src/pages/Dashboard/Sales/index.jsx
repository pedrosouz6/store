import AsideDashboard from '../../../components/Aside/Dashboard/index';
import HeaderDashboard from '../../../components/Header/Dashboard/index';
import DashboardSales from '../../../components/Dashboard/Sales/index';
import DashboardSalesClient from '../../../components/Dashboard/Sales/Client';

import { Main } from './style';

export default function Dashboard() {
    return (
        <Main>
            <div className="page--dashboard__container">
                <AsideDashboard /> 

                <section className="page--dashboard__header__content">
                    <HeaderDashboard />
                    <DashboardSales />
                    <DashboardSalesClient />
                </section>  
            </div>
        </Main>
    )
}
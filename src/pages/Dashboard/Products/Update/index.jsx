import AsideDashboard from '../../../../components/Aside/Dashboard/index';
import HeaderDashboard from '../../../../components/Header/Dashboard/index';

import DashboardProductsUpdateProducts from '../../../../components/Dashboard/Products/UpdateProducts/index';

import { Main } from './style';

export default function DashboardProductUpdate() {
    return (
        <Main>
            <div className="page--dashboard__container">
                <AsideDashboard /> 

                <section className="page--dashboard__header__content">
                    <HeaderDashboard />
                    <DashboardProductsUpdateProducts />
                 </section>  
            </div>
        </Main>
    )
}
import AsideDashboard from '../../../components/Aside/Dashboard/index';
import HeaderDashboard from '../../../components/Header/Dashboard/index';
import DashboardProductsAddProducts from '../../../components/Dashboard/Products/AddProducts/index';
import DashboardProductsAllProducts from '../../../components/Dashboard/Products/AllProducts';

import { Main } from './style';

export default function Dashboard() {
    return (
        <Main>
            <div className="page--dashboard__container">
                <AsideDashboard /> 

                <section className="page--dashboard__header__content">
                    <HeaderDashboard />
                    <DashboardProductsAddProducts />
                    <DashboardProductsAllProducts />
                 </section>  
            </div>
        </Main>
    )
}
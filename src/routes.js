import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Store from './pages/Store/index';
import DashboardProducts from './pages/Dashboard/Products/index';
import DashboardSales from './pages/Dashboard/Sales/index';

import ProviderProducts from './contexts/Products';

export default function Routess() {
    return (
        <Router>
            <ProviderProducts>
                <Routes>
                    <Route path='*' element={ <Store /> } />
                    <Route path='/' element={ <Store /> } />
                    <Route path='/dashboard/products' element={ <DashboardProducts /> } />
                    <Route path='/dashboard/sales' element={ <DashboardSales /> } />
                </Routes>
            </ProviderProducts>
        </Router>
    )
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StoreHome from './pages/Store/Home/index';
import StoreSneakers from './pages/Store/Sneakers/index';
import StoreNews from './pages/Store/News/index';
import StoreSlipper from './pages/Store/Slipper/index';
import StoreMasculine from './pages/Store/Masculine/index';
import StoreFeminine from './pages/Store/Feminine/index';


import DashboardProducts from './pages/Dashboard/Products/index';
import DashboardSales from './pages/Dashboard/Sales/index';
import DashboardProductsUpdate from './pages/Dashboard/Products/Update/index';


import RegisterClient from './pages/Register/Client/index';
import LoginClient from './pages/Login/Client/index';


import StoreCart from './pages/Store/Cart/index';
import StoreDetails from './pages/Store/Details';


import ProviderProducts from './contexts/Products';
import ProviderAmountProduct from './contexts/Store/AmountProduct';
import ProviderSales from './contexts/Sales';

export default function Routess() {
    return (
        <Router>
            <ProviderProducts>
                <ProviderAmountProduct>
                    <ProviderSales>
                        <Routes>
                            <Route path='*' element={ <StoreHome /> } />
                            <Route path='/' element={ <StoreHome /> } />
                            <Route path='/news' element={ <StoreNews /> } />
                            <Route path='/sneakers' element={ <StoreSneakers /> } />
                            <Route path='/slipper' element={ <StoreSlipper /> } />
                            <Route path='/masculine' element={ <StoreMasculine /> } />
                            <Route path='/feminine' element={ <StoreFeminine /> } />


                            <Route path='/dashboard/products' element={ <DashboardProducts /> } />
                            <Route path='/dashboard/products/update/:id' element={ <DashboardProductsUpdate /> } />
                            <Route path='/dashboard/sales' element={ <DashboardSales /> } />

                            <Route path='/register' element={ <RegisterClient /> } /> 
                            <Route path='/login' element={ <LoginClient /> } /> 

                            <Route path='/cart' element={ <StoreCart /> } />  
                            <Route path='/details/:id' element={ <StoreDetails /> } />  
                        </Routes>
                    </ProviderSales>
                </ProviderAmountProduct>
            </ProviderProducts>
        </Router>
    )
}
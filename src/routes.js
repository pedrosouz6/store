import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Store from './pages/Store/index';
import Dashboard from './pages/Dashboard/index';

export default function Routess() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Store /> } />
                <Route path='/dashboard' element={ <Dashboard /> } />
            </Routes>
        </Router>
    )
}
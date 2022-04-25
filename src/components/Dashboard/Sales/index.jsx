import DashboardSalesCards from "./Cards";
import DashboardSalesGrafic from "./Graphic";

import { Container } from "./style";

export default function DashboardSales() {
    return (
        <Container>
            <div className="center--dashboard">
                <h1>Vendas</h1>
                <div className="dashboard--sales__container">
                    <DashboardSalesCards />
                    <DashboardSalesGrafic />
                </div>
            </div>
        </Container>
    )
}
import DashboardSalesCards from "./Cards";
import Title from "../Title";

import { Container } from "./style";

export default function DashboardSales() {
    return (
        <Container>
            <div className="center--dashboard">
                <Title text='Vendas' />
                <div className="dashboard--sales__container">
                    <DashboardSalesCards />
                </div>
            </div>
        </Container>
    )
}
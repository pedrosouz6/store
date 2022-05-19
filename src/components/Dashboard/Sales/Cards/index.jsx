import { Container } from "./style";

import { useSales } from '../../../../hooks/Sales/index';

export default function DashboardSalesCards() {

    const { purchases } = useSales();

    let totalSales = 0;

    for(let i = 0; i < purchases.length; i++) {
        totalSales += purchases[i].price_product;
    }

    return (
        <Container>

            <div className="dashboard--sales--cards__container">
                <div className="dashboard--sales--cards__cards">
                    <p>R$ { totalSales },00</p>
                    <span>Total de vendas</span>
                </div>
                <div className="dashboard--sales--cards__cards">
                    <p>{ purchases.length }</p>
                    <span>Itens vendidos</span>
                </div>
                <div className="dashboard--sales--cards__cards">
                    <p>{ purchases.length }</p>
                    <span>Número de Pedidos</span>
                </div>
                <div className="dashboard--sales--cards__cards">
                    <p>R$ 0,00</p>
                    <span>Total de Reembolso</span>
                </div>
            </div>
            
        </Container>
    )
}
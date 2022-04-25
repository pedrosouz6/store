import { Container } from "./style";

export default function DashboardSalesCards() {
    return (
        <Container>

            <div className="dashboard--sales--cards__container">
                <div className="dashboard--sales--cards__cards">
                    <p>R$ 3.043.846,00</p>
                    <span>Total de vendas</span>
                </div>
                <div className="dashboard--sales--cards__cards">
                    <p>3.334</p>
                    <span>Itens vendidos</span>
                </div>
                <div className="dashboard--sales--cards__cards">
                    <p>871</p>
                    <span>Número de Pedidos</span>
                </div>
                <div className="dashboard--sales--cards__cards">
                    <p>R$ 534.000,00</p>
                    <span>Total de Reembolso</span>
                </div>
            </div>
            
        </Container>
    )
}
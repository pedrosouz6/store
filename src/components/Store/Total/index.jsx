import { Container } from "./style";

export default function StoreTotal() {
    return (
        <Container>
            <h2>Resumo do pedido</h2>
            <div className="store--total__total__products">
                <p>Total de produtos</p>
                <p>R$ 8.493,00</p>
            </div>
            <div className="store--total__total__delivery">
                <p>Entrega</p>
                <p>R$ 8.493,00</p>
            </div>
            <div className="store--total__total__final">
                <p><strong>Total</strong></p>
                <p><strong>R$ {8.49300 * 2},00</strong></p>
            </div>
            <div className="store--total__button__buy">
                <button>Finalizar compra</button>
            </div>
        </Container>
    )
}
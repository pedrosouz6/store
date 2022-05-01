import { Container } from "./style";

export default function StoreTotal() {
    return (
        <Container>
            <h2>Resumo do pedido</h2>
            <div className="store--total__total__products">
                <p>Total de produtos</p>
                <p>R$ 8493,00</p>
            </div>
            <div className="store--total__total__delivery">
                <p>Entrega</p>
                <p>R$ 8493,00</p>
            </div>
        </Container>
    )
}
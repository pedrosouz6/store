import { Container } from "./style";

export default function StoreTotal({ priceProducts }) {
    return (
        <Container>
            <h2>Resumo do pedido</h2>
            <div className="store--total__total__products">
                <p>Total de produtos</p>
                <p>R$ { priceProducts },00</p>
            </div>
            <div className={priceProducts > 900 ? "store--total__total__delivery none" : "store--total__total__delivery"}>
                <p>Entrega</p>
                <p>R$ 45,00</p>
            </div>
            <div className="store--total__total__final">
                <p><strong>Total</strong></p>
                <p><strong>R$ {priceProducts > 900 ? priceProducts : priceProducts + 45},00</strong></p>
            </div>
            <div className="store--total__button__buy">
                <button>Finalizar compra</button>
            </div>
        </Container>
    )
}
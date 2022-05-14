import { Container } from "./style";

export default function StoreModalNoProduct({ setNoProduct }) {
    return (
        <Container>
            <div className="store--modal__container">
                <div className="store--modal__header">
                    <h3>Sem Produto</h3>
                </div>
                    
                <div className="store--modal__content">
                    <p>
                        Seu carrinho está vazio.
                    </p>
                </div>

                <div className="store--modal__footer">
                    <button onClick={() => setNoProduct(false)}>Fechar</button>
                </div>
            </div>
        </Container>
    )
}
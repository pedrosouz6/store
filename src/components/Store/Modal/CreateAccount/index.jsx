import { Container } from "./style";

export default function StoreModalCreateAccount() {
    return (
        <Container>
            <div className="store--modal__container">
                <div className="store--modal__header">
                    <h3>Informação</h3>
                </div>
                    
                <div className="store--modal__content">
                    <p>
                        Para realizar a compra é necessário criar uma conta.
                    </p>
                </div>

                <div className="store--modal__footer">
                    <button>Criar conta</button>
                </div>
            </div>
        </Container>
    )
}
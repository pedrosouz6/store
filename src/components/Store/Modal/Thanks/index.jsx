import { Container } from "./style";

export default function StoreModal({ thanks, setThanks }) {
    return (
        <Container>
            <div className="store--modal__container">
                <div className="store--modal__header">
                    <h3>Agradecemos pela sua compra</h3>
                </div>
                    
                <div className="store--modal__content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius quaerat rem natus soluta, nobis error reiciendis repudiandae, assumenda perferendis doloribus excepturi magni quis deleniti a quasi quam ratione tempore.
                    </p>
                </div>

                <div className="store--modal__footer">
                    <button onClick={() => setThanks(!thanks)}>Fechar</button>
                </div>
            </div>
        </Container>
    )
}
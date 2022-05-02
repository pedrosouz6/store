import { useParams } from "react-router-dom";

import { Container } from "./style";

export default function StoreDetails() {

    const { id } = useParams();

    return (
        <Container>
            <div className="center--store">
                <div className="store--details__container">
                    <div className="store--details__img">
                        <img src="https://capputeeno-ricmaloy.vercel.app/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fxesque-dev%2Fchallenge-images%2Fcaneca-01.jpg&w=640&q=75" alt="" />
                    </div>
                    <div className="store--details__info">
                        <div className="store--details__category">
                            <h4>Tênis</h4>
                        </div>

                        <div className="store--details__name__product">
                            <h3>Yeezy Boost</h3>
                        </div>

                        <div className="store--details__price">
                            <p><strong>R$ 900,00</strong></p>
                        </div>

                        <div className="store--details__freight">
                            <span>
                                * Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
                            </span>
                        </div>

                        <div className="store--details__description">
                            <h4>Descrição</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur iste repudiandae quasi molestiae sequi deserunt ab nobis voluptas! Libero officia commodi voluptatum hic saepe distinctio molestias aliquid a, at eligendi!</p>
                        </div>

                        <div className="store--details__button__add">
                            <button>
                                Adicionar ao carrinho
                            </button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </Container>
    )
}
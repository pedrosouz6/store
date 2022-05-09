import { Container } from "./style";

export default function DashboardProductsPreview({ urlImage, brandProduct, nameProduct, priceProduct }) {
    return (
        <Container>
            <h3>Veja como está ficando</h3>

            <div className="dashboard--products__card--preview">
                <div className="dashboard--products__card__img">
                    { urlImage.trim()  === '' ? 'Imagem do Produto' : <img src={urlImage} alt="Endereço errado" /> }
                </div>

                <div className="dashboard--products__card__content">
                    <div className="dashboard--products__card__brand__product">
                        <p>
                            <strong>
                                { brandProduct.trim() === '' ? 'Marca do Produto' : brandProduct }
                            </strong>
                        </p>
                    </div>

                    <div className="dashboard--products__card__name__product">
                        <p>{ nameProduct.trim() === '' ? 'Nome do Produto' : nameProduct }</p>
                    </div>

                    <div className="dashboard--products__card__price__product">
                        { priceProduct === '' ? 'Preço' : 'R$ ' + priceProduct+',00' }
                    </div>
                </div>
            </div>
        </Container>
    )
}
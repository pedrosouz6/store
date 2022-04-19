import { Container } from './style';

export default function DashboardProducts() {
    return (
        <Container>
            <div className='center--dashboard'>
                <div className='dashboard--products__container'>
                    <div className='dashboard--products__add__products'>
                        <div className="dashboard--products__form__products">

                            <h2>Adicionar produto</h2>

                            <form>
                                <div className="dashboard--products__two-items">
                                    <input type='text' placeholder='Nome' />
                                    <input type='text' placeholder='Categoria' />
                                </div>

                                <div className="dashboard--products__three-items">
                                    <input type="number" placeholder='Preço' />
                                    <input type="number" placeholder='Quantidade' />
                                    <select className='three-items'>
                                        <option>Escolher o status</option>
                                        <option value="active">Ativo</option>
                                        <option value="disabled">Desativo</option>
                                    </select>
                                </div>

                                <input type='url' placeholder='URL da imagem' />
                                <textarea rows="5" placeholder='Descrição' />
                            </form>

                        </div>

                        <div className="dashboard--products__preview__product">

                            <h3>Veja como está ficando</h3>

                            <div className="dashboard--products__card--preview">
                                <div className="dashboard--products__card__img">
                                    img
                                </div>
                                <div className="dashboard--products__card__content">
                                    <div className="dashboard--products__card__name__product">
                                        <p>Camisa da Gangster</p>
                                    </div>
                                    <div className="dashboard--products__card__price__product">
                                        <span><strong>R$ 29.00</strong></span>
                                    </div>
                                    <div className="dashboard--products__card__btn">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
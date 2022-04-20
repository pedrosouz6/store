import { useState } from 'react'

import { Container } from './style';

export default function DashboardProductsAddProducts() {

    const [ nameProduct, setNameProduct ] = useState('');
    const [ priceProduct, setPriceProduct ] = useState('');
    const [ urlImage, setUrlImage ] = useState('');

    return (
        <Container>
            <div className='center--dashboard'>
                <div className='dashboard--products__container'>
                    <div className='dashboard--products__add__products'>
                        <div className="dashboard--products__form__products">

                            <h2>Adicionar produto</h2>

                            <form>
                                <div className="dashboard--products__two-items">
                                    <input 
                                    type='text' 
                                    placeholder='Nome'
                                    value={nameProduct}
                                    onChange={e => setNameProduct(e.target.value)} />

                                    <input 
                                    type='text'
                                    placeholder='Categoria' />
                                </div>

                                <div className="dashboard--products__three-items">
                                    <input 
                                    type="number" 
                                    placeholder='Preço'
                                    value={priceProduct}
                                    onChange={e => setPriceProduct(e.target.value)} />
                                    <input type="number" placeholder='Quantidade' />
                                    <select className='three-items'>
                                        <option>Escolher o status</option>
                                        <option value="active">Ativo</option>
                                        <option value="disabled">Desativo</option>
                                    </select>
                                </div>

                                <input 
                                type='url' 
                                placeholder='URL da imagem' 
                                value={urlImage}
                                onChange={e => setUrlImage(e.target.value)} />
                                <textarea rows="6" placeholder='Descrição' />

                                <div className="dashboard--products__button">
                                    <input type="submit" value="Adicionar" />
                                </div>
                            </form>

                        </div>

                        <div className="dashboard--products__preview__product">

                            <h3>Veja como está ficando</h3>

                            <div className="dashboard--products__card--preview">
                                <div className="dashboard--products__card__img">

                                    { urlImage === '' ? 'Imagem do Produto' : <img src={urlImage} alt="Endereço errado" /> }
                                    
                                </div>
                                <div className="dashboard--products__card__content">
                                    <div className="dashboard--products__card__name__product">
                                        <p>{ nameProduct === '' ? 'Nome do Produto' : nameProduct }</p>
                                    </div>

                                    <div className="dashboard--products__card__price__product">
                                        <span>
                                            <strong>
                                                { priceProduct === '' ? 
                                                'Preço' : 
                                                'R$ ' + priceProduct.replace('.', ',') }
                                            </strong>
                                        </span>
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
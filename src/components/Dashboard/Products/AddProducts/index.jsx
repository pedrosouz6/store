import { useState } from 'react';

import { instance } from '../../../../services/index';
import PopUp from '../../../PopUp';

import { Container } from './style';

export default function DashboardProductsAddProducts() {

    const [ nameProduct, setNameProduct ] = useState('');
    const [ brandProduct, setBrandProduct ] = useState('');
    const [ categoryProduct, setCategoryProduct ] = useState('');
    const [ descriptionProduct, setDescriptionProduct ] = useState('');
    const [ statusProduct, setStatusProduct ] = useState('');
    const [ amountProduct, setAmountProduct ] = useState('');
    const [ priceProduct, setPriceProduct ] = useState('');
    const [ urlImage, setUrlImage ] = useState('');

    const [ errorValidate, setErrorValidate ] = useState(false);

    const [ messageAPI, setMessageAPI ] = useState('');

    function FieldValidation(e) {
        e.preventDefault();

        const validate = 
        nameProduct.trim() === '' || 
        brandProduct.trim() === '' || 
        categoryProduct.trim() === '' || 
        statusProduct.trim() === '' || 
        amountProduct.trim() === '' || 
        priceProduct.trim() === '' || 
        urlImage.trim() === ''

        if(validate) {
            return setErrorValidate(true);
        }

        setErrorValidate(false);
        AddProduct();
    }

    function AddProduct() {
        instance.post('/add/products', {
            nameProduct,
            brandProduct,
            categoryProduct,
            statusProduct,
            amountProduct,
            priceProduct,
            urlImage,
            descriptionProduct
        })
        .then(response => response.data)
        .then(respost => {
            if(respost.error) {
                return setMessageAPI(respost.message);
            }

            return setMessageAPI(respost.message);
        })
    }

    return (
        <Container>
            <div className='center--dashboard'>

                { !messageAPI == '' && <PopUp text={messageAPI} /> }

                <div className='dashboard--products__container'>
                    <div className='dashboard--products__add__products'>
                        <div className="dashboard--products__form__products">

                            <h2>Adicionar produto</h2>

                            <form onSubmit={(e) => FieldValidation(e)}>
                                <div className="dashboard--products__two-items">
                                    <input 
                                    type='text' 
                                    placeholder='Nome'
                                    value={nameProduct}
                                    onChange={e => setNameProduct(e.target.value)} />

                                    <input 
                                    type="text" 
                                    placeholder='Marca'
                                    value={brandProduct}
                                    onChange={e => setBrandProduct(e.target.value)} />

                                    <input 
                                    type='text'
                                    placeholder='Categoria'
                                    value={categoryProduct}
                                    onChange={e => setCategoryProduct(e.target.value)} />
                                </div>

                                <div className="dashboard--products__three-items">

                                    <input 
                                    type="number" 
                                    placeholder='Preço'
                                    value={priceProduct}
                                    onChange={e => setPriceProduct(e.target.value)} />

                                    <input 
                                    type="number" 
                                    placeholder='Quantidade'
                                    value={amountProduct}
                                    onChange={e => setAmountProduct(e.target.value)} />

                                    <select className='three-items' onChange={e => setStatusProduct(e.target.value)}>
                                        <option disabled selected>Escolher o status</option>
                                        <option value={true}>Ativo</option>
                                        <option value={false}>Desativo</option>
                                    </select>
                                </div>

                                <input 
                                type='url' 
                                placeholder='URL da imagem' 
                                value={urlImage}
                                onChange={e => setUrlImage(e.target.value)} />

                                <textarea
                                rows="6" 
                                placeholder='Descrição'
                                value={descriptionProduct}
                                onChange={e => setDescriptionProduct(e.target.value)} />

                                { errorValidate && 
                                <div className="dashboard--products__message__erro">
                                    <p>Preencha o(s) campo(s) acima, para poder adicionar o produto.</p>
                                </div> 
                                }

                                <div className="dashboard--products__button">
                                    <input type="submit" value="Adicionar" />
                                </div>
                            </form>

                        </div>

                        <article className="dashboard--products__preview__product">

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
                                        { priceProduct.trim() === '' ? 'Preço' : 'R$ ' + priceProduct.replace('.', ',') }
                                    </div>
                                    
                                    <div className="dashboard--products__card__btn">
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </Container>
    )
}
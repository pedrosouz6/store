import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { instance } from '../../../../services/index';
import { useProducts } from '../../../../hooks/Products';

import PopUp from '../../../PopUp/Message';
import DashboardProductsPreview from '../Preview';

import { Container } from './style';

export default function DashboardProductsUpdateProducts() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { addNewProduct, setAddNewProduct } = useProducts();

    const [ nameProduct, setNameProduct ] = useState('');
    const [ brandProduct, setBrandProduct ] = useState('');
    const [ categoryProduct, setCategoryProduct ] = useState('');
    const [ descriptionProduct, setDescriptionProduct ] = useState('');
    const [ genderProduct, setGenderProduct ] = useState('');
    const [ statusProduct, setStatusProduct ] = useState('');
    const [ amountProduct, setAmountProduct ] = useState('');
    const [ priceProduct, setPriceProduct ] = useState('');
    const [ urlImage, setUrlImage ] = useState('');

    const [ errorValidate, setErrorValidate ] = useState(false);

    const [ messageAPI, setMessageAPI ] = useState(null);

    function FieldValidation(e) {
        e.preventDefault();

        const validate = 
        nameProduct.trim() === '' || 
        genderProduct.trim() === '' ||
        brandProduct.trim() === '' || 
        categoryProduct.trim() === '' || 
        statusProduct === '' || 
        amountProduct === '' || 
        priceProduct === '' || 
        urlImage.trim() === ''

        if(validate) {
            return setErrorValidate(true);
        }

        setErrorValidate(false);
        setMessageAPI(null);
        UpdateProduct();
    }

    function UpdateProduct() {
        instance.put(`/update/products/${id}`, {
            nameProduct,
            brandProduct,
            categoryProduct,
            genderProduct,
            statusProduct,
            amountProduct,
            priceProduct,
            urlImage,
            descriptionProduct
        })
        .then(response => response.data)
        .then(respost => {
            if(respost.error) {
                return setMessageAPI(false);
            }

            setMessageAPI(true);
            setAddNewProduct(!addNewProduct);
            navigate('/dashboard/products')
        })
    }
    
    useEffect(() => {
        if(id) {
            instance.get(`/get/products/${id}`)
            .then(response => response.data)
            .then(respost => {
                if(respost.error) {
                    return setMessageAPI(false);
                }

                const datas = respost.results[0];

                setNameProduct(datas.name_product);
                setBrandProduct(datas.brand_product);
                setCategoryProduct(datas.category_product);
                setGenderProduct(datas.gender_product);
                setPriceProduct(datas.price_product);
                setAmountProduct(datas.amount_product);
                setStatusProduct(datas.status_product);
                setUrlImage(datas.url_product);
                setDescriptionProduct(datas.description_product);
            })
        }
    }, []);


    return (
        <Container>
            <div className='center--dashboard'>

                { messageAPI === true ? <PopUp text='Produto atualizado com sucesso.' class='success'  /> : 
                messageAPI === false && <PopUp text='Erro ao atualizar o produto.' class='error' /> }

                <div className='dashboard--products__container'>
                    <div className='dashboard--products__update__products'>
                        <div className="dashboard--products__form__products">

                            <h2>Atualizar produto</h2>

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
                                    type="text"
                                    placeholder='Gênero'
                                    value={genderProduct}
                                    onChange={e => setGenderProduct(e.target.value)} />

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
                                        <option value={true} selected={statusProduct == 1 && true}>Ativo</option>
                                        <option value={false} selected={statusProduct == 0 && true}>Desativo</option>
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
                                    <input type="submit" value="Atualizar" />
                                </div>
                            </form>

                        </div>

                        <DashboardProductsPreview 
                        urlImage={urlImage} 
                        brandProduct={brandProduct} 
                        nameProduct={nameProduct} 
                        priceProduct={priceProduct} />
                        
                    </div>
                </div>
            </div>
        </Container>
    )
}
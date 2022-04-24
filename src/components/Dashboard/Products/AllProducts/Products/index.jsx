import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import { useProducts } from '../../../../../hooks/Products/index';
import PopUpDeleteProduct from '../../../../PopUp/DeleteProduct';

import { Container } from "./style";

export default function DashboardProductsAllProductsProducts() {

    const navigate = useNavigate()

    const [ popUpDelete, setPopUpDelete ] = useState(false);
    const [ idDelete, setIdDelete ] = useState(null);

    const { productsFilters } = useProducts();

    function PopUpDelete(id) {
        setPopUpDelete(true);
        setIdDelete(id);
    }

    function UpdateProducts(id) {
        navigate(`/dashboard/products/update/${id}`);
    }

    return (
        <Container>
            
            { popUpDelete && <PopUpDeleteProduct id={idDelete} setPopUpDelete={setPopUpDelete} /> }

            { productsFilters.length > 0 ? 
             
                <table>
                    <thead>
                        <tr>
                            <td className="td__name">Nome</td>
                            <td className="td__brand">Marca</td>
                            <td className="td__category">Categoria</td>
                            <td className="td__price">Preço</td>
                  
                            <td className="td__amount">Quant</td>
                            <td className="td__status">Status</td>
                            <td className="td__image">Imagem</td>
                            <td className="td__description">Descrição</td>
                            <td className="td__actions">Ações</td>
                        </tr>
                    </thead>
                        <tbody>
    
                            { productsFilters.map((item, key) => (
                                <tr key={key}>
                                    <td>{ item.name_product }</td>
                                    <td>{ item.brand_product }</td>
                                    <td>{ item.category_product }</td>
                                    <td> R$ { item.price_product },00</td>
                                    <td className="td__amount">{ item.amount_product }</td>
    
                                    <td className="td__status">
                                        { item.status_product === 1 ? 'Ativo' : 'Desativo' }
                                    </td>
    
                                    <td>
                                        <img src='https://img.freepik.com/fotos-gratis/fundo-de-pintura-grunge_1409-1337.jpg?w=2000' alt='Imagem do produto' />
                                    </td>
    
                                    <td className="td__description">
                                        { item.description_product === '' ? 
                                        'Produto sem descrição' : 
                                        item.description_product }
                                    </td>
    
                                    <td className='td__actions'> 
                                        <i className='remove__item' onClick={() => PopUpDelete(item.id_product)}><FaTrash /></i>  
                                        <i className='edit_item' onClick={() => UpdateProducts(item.id_product)}><FaEdit /></i> 
                                    </td>
                                </tr>
                            )) }

                        </tbody>
                </table>

                : (<p>Nenhum produto com essa(s) característica(s) foi encontrado. </p>)
            }
        </Container>
    )
}
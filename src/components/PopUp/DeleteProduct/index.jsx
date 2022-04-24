import { MdClose } from 'react-icons/md';

import { instance } from '../../../services';
import { useProducts } from '../../../hooks/Products';

import { Container } from "./style";


export default function PopUpDeleteProduct({ id, setPopUpDelete }) {

    const { addNewProduct, setAddNewProduct } = useProducts();

    function ClosePopUp() {
        setPopUpDelete(false);
    }

    function DeleteProduct() {
        instance.delete(`/delete/products/${id}`)
        .then(response => response.data)
        .then(respost => {
            if(!respost.error) {
                return setAddNewProduct(!addNewProduct);
            }
        });

        return ClosePopUp();
    }

    return (
        <Container>
            <div className="center--dashboard">

                <div className="popup--delete--product__container">
                    <header>
                        <h4>Confirmação</h4>
                        <i onClick={() => ClosePopUp()} ><MdClose /></i>
                    </header>
                    <article>
                        <p>Você tem certeza que deseja apagar esse produto?</p>
                    </article>
                    <footer>
                        <button id='cancele' onClick={() => ClosePopUp()}>Cancelar</button>
                        <button id='delete' onClick={() => DeleteProduct()}>Apagar</button>
                    </footer>
                </div>
            </div>
        </Container>
    )
}
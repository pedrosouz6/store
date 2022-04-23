import { MdClose } from 'react-icons/md';

import { Container } from "./style";

export default function PopUpDeleteProduct({ id, setPopUpDelete }) {
    console.log(id)

    function ClosePopUp() {
        setPopUpDelete(false);
    }

    return (
        <Container>
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
                    <button id='delete'>Apagar</button>
                </footer>
            </div>
        </Container>
    )
}
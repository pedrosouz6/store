import { FaArrowCircleLeft } from 'react-icons/fa';

import { Container } from "./style";

export default function StoreButtonBack() {
    
    function BackPage() {
        window.history.back();
    }

    return (
        <Container>
            <div className="center--store">
                <div className="store--button--back__container">
                    <button onClick={() => BackPage()}>
                        <i><FaArrowCircleLeft /></i>
                        Voltar
                    </button>
                </div>
            </div>
        </Container>
    )
}
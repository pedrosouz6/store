import { useNavigate } from "react-router-dom";

import { Container } from "./style";

export default function StoreModalCreateAccount({ createAccount, setCreateAccount }) {

    const navigate = useNavigate();

    function CreateAccount() {
        setCreateAccount(false);
        navigate('/register');
    }

    function CloseCreateAccount() {
        setCreateAccount(false);
    }

    return (
        <Container>
            <div className="store--modal__container">
                <div className="store--modal__header">
                    <h3>Informação</h3>
                </div>
                    
                <div className="store--modal__content">
                    <p>
                        Para realizar a compra é necessário que você crie uma conta.
                    </p>
                </div>  

                <div className="store--modal__footer">
                    <button onClick={() => CloseCreateAccount()} id='cancel'>Fechar</button>
                    <button onClick={() => CreateAccount()} id='create'>Criar conta</button>
                </div>
            </div>
        </Container>
    )
}
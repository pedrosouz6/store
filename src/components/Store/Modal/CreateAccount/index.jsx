import { useNavigate } from "react-router-dom";

import { Container } from "./style";

export default function StoreModalCreateAccount({ createAccount, setCreateAccount }) {

    const navigate = useNavigate();

    function CreateAccount() {
        setCreateAccount(false);
        navigate('/register');
    }

    return (
        <Container>
            <div className="store--modal__container">
                <div className="store--modal__header">
                    <h3>Informação</h3>
                </div>
                    
                <div className="store--modal__content">
                    <p>
                        Para realizar a compra é necessário que você criar uma conta.
                    </p>
                </div>  

                <div className="store--modal__footer">
                    <button onClick={() => CreateAccount()}>Criar conta</button>
                </div>
            </div>
        </Container>
    )
}
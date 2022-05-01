import { useState } from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { instance } from '../../../services';

import { Container } from './style';

export default function LoginClient() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ messageErro, setMessageErro ] = useState(false);

    function FieldValidation(e) {
        e.preventDefault();
        const validate = 
        email.trim() === '' ||
        password.trim() === '';

        if(validate) {
            return setMessageErro(true);
        }

        setMessageErro(false);
        Login();
    }

    function Login() {
        instance.post('/login/client', {
            email,
            password
        })
        .then(response => response.data)
        .then(respost => console.log(respost));
    }

    return (
        <Container>
            <div className='center--store'>
                <div className='login--client__container'>

                    <div className="login--client__header">
                        <h1>Logo</h1>
                    </div>
                    
                    <div className="login--client__login">
                        <h1>Login</h1>
                        <form onSubmit={e => FieldValidation(e)}>

                            <i><FaUserCircle /></i>

                            <input 
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            />

                            <input
                            type='password'
                            placeholder='Senha'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            />

                            { messageErro && <p id='message--erro'>Preencha o(s) campo(s)</p>  }

                            <input type='submit' value='Entrar' />
                        </form>
                    </div>

                </div>
            </div>
        </Container>
    )
}
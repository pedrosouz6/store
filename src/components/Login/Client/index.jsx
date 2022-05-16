import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { instance } from '../../../services';
import { useUser } from '../../../hooks/User';

import { Container } from './style';

export default function LoginClient() {

    const navigate = useNavigate();
    const { validateUser, setValidateUser } = useUser();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ messageErro, setMessageErro ] = useState(false);
    const [ messageAPI, setMessageAPI ] = useState('');

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
        .then(respost => {
            if(respost.error) {
                return setMessageAPI(respost.message);
            }

            return DatasUser(respost);
        });
    }
    
    function DatasUser(datas) {
        setMessageAPI('');
        localStorage.setItem('user', JSON.stringify(datas));
        setValidateUser(!validateUser);
        navigate('/');
    }

    return (
        <Container>
            <div className='center--store'>
                <div className='login--client__container'>

                    <div className="login--client__header">
                        <Link to='/'>loja/<span>dev.com</span></Link>
                    </div>
                    
                    <div className="login--client__login">
                        <h1>Login</h1>
                        <form onSubmit={e => FieldValidation(e)}>

                            <div className="icon">
                                <i><FaUserCircle /></i>
                            </div>
                            
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
                            { !messageAPI == ''  && <p id='message--erro'>{ messageAPI }</p>  }

                            <input type='submit' value='Entrar' />

                            <Link to='/register'>Criar conta</Link>
                        </form>
                    </div>

                </div>
            </div>
        </Container>
    )
}
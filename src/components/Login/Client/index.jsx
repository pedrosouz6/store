import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

import { FaUserCircle } from 'react-icons/fa';
import { instance } from '../../../services';
import { useUser } from '../../../hooks/User';

import { Container } from './style';

export default function LoginClient() {

    const navigate = useNavigate();
    const { validateUser, setValidateUser } = useUser();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ typePassword, setTypePassword ] = useState(true);
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

    function TypePassword(e) {
        e.preventDefault();
        setTypePassword(!typePassword);
    }

    return (
        <Container>
            <div className='center--store'>
                <div className='login--client__container'>

                    <div className="login--client__header">
                        <Link to='/'>loja/<span>dev.com</span></Link>
                    </div>
                    
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

                        <div className="password">
                            <input
                            type={ typePassword ? 'password' : 'text' }   
                            placeholder='Senha'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            />

                            <button onClick={e => TypePassword(e)}>
                                { typePassword ? <i><FaEye /></i> : <i><FaEyeSlash /></i>}
                            </button>
                        </div>

                        { messageErro && <p id='message--erro'>Preencha o(s) campo(s)</p>  }
                        { !messageAPI == ''  && <p id='message--erro'>{ messageAPI }</p>  }

                        <input type='submit' value='Entrar' />

                        <Link to='/reset-password/client'>Esqueceu a senha?</Link> <br/>
                        <Link to='/register'>Criar conta</Link>
                    </form>

                </div>
            </div>
        </Container>
    )
}
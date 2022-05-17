import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { instance } from '../../../services';

import { Container } from './style';

export default function ResetPasswordClient() {

    const navigate = useNavigate();
    const { email } = useParams();

    const [ password, setPassword ] = useState('');
    const [ typePassword, setTypePassword ] = useState(true);

    const [ messageErro, setMessageErro ] = useState(false);
    const [ messageAPI, setMessageAPI ] = useState('');

    function FieldValidation(e) {
        e.preventDefault();
        const validate = password.trim() === '';

        if(validate) {
            return setMessageErro(true);
        }

        setMessageErro(false);
        Login();
    }

    function Login() {
        instance.put('/new-password/client', {
            email,
            password
        })
        .then(response => response.data)
        .then(respost => {
            if(respost.error) {
                return setMessageAPI(respost.message);  
            }

            return DatasUser();
        });
    }
    
    function DatasUser() {
        setMessageAPI('');
        navigate('/');
    }

    function TypePassword(e) {
        e.preventDefault();
        setTypePassword(!typePassword);
    }

    return (
        <Container>
            <div className='center--store'>
                <div className='reset--password--client__container'>

                    <div className="reset--password--client__header">
                        <Link to='/'>loja/<span>dev.com</span></Link>
                    </div>
                    
                    <h1>Digite sua nova senha</h1>
                    
                    <form onSubmit={e => FieldValidation(e)}>

                        <div className="icon">
                            <i><FaUserCircle /></i>
                        </div>

                        <div className="email">
                            <p>{ email }</p>
                        </div>
                        
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

                        { messageErro && <p id='message--erro'>Digite seu email</p>  }
                        { !messageAPI == ''  && <p id='message--erro'>{ messageAPI }</p>  }

                        <input type='submit' value='Mudar senha' />

                    </form>
                </div>
            </div>
        </Container>
    )
}
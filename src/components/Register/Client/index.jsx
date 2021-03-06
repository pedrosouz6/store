import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

import { FaUserCircle } from 'react-icons/fa';
import { instance } from '../../../services/index';
import { useUser } from '../../../hooks/User';

import { Container } from './style';

export default function RegisterClient() {

    const { validateUser, setValidateUser } = useUser();
    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ typePassword, setTypePassword ] = useState(true);

    const [ messageErro, setMessageErro ] = useState(false);
    const [ messageAPI, setMessageAPI ] = useState('');

    function FieldValidation(e) {
        e.preventDefault();
        const validate = 
        name.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '';

        if(validate) {
            return setMessageErro(true);
        }

        setMessageErro(false);
        AddClient();
    }

    function AddClient() {
        instance.post('/add/client', {
            name,
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
        setValidateUser(!validateUser);
        localStorage.setItem('user', JSON.stringify(datas));
        navigate('/');
    }

    function TypePassword(e) {
        e.preventDefault();
        setTypePassword(!typePassword);
    }

    return (
        <Container>
            <div className='center--store'>
                <div className='register--client__container'>

                    <div className="register--client__header">
                        <Link to='/'>loja/<span>dev.com</span></Link>
                    </div>
                    
                    <div className="register--client__create__account">
                        <h1>Criar conta</h1>
                        <form onSubmit={e => FieldValidation(e)}>

                            <i><FaUserCircle /></i>
                            
                            <input 
                            type='text' 
                            placeholder='Nome'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            />

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
                            { !messageAPI == '' && <p id='message--erro'>{ messageAPI }</p> }

                            <input type='submit' value='Criar conta' />
                            
                            <Link to='/login'>J?? tenho conta</Link>
                        </form>
                    </div>

                </div>
            </div>
        </Container>
    )
}
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { instance } from '../../../services/index';

import { Container } from './style';

export default function RegisterClient() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ messageErro, setMessageErro ] = useState(false);

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
            if(!respost.error) {
                return TokenInLocalStogare(respost.token);
            }    
        });
    }

    function TokenInLocalStogare(token) {
        localStorage.setItem('user', JSON.stringify(token));
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

                            <input
                            type='password'
                            placeholder='Senha'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            />

                            { messageErro && <p id='message--erro'>Preencha o(s) campo(s)</p>  }

                            <input type='submit' value='Criar conta' />
                            
                            <Link to='/login'>Já tenho conta</Link>
                        </form>
                    </div>

                </div>
            </div>
        </Container>
    )
}
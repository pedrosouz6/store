import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { instance } from '../../services';

import { Container } from './style';

export default function ResetPasswordClient() {

    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');

    const [ messageErro, setMessageErro ] = useState(false);
    const [ messageAPI, setMessageAPI ] = useState('');

    function FieldValidation(e) {
        e.preventDefault();
        const validate = email.trim() === '';

        if(validate) {
            return setMessageErro(true);
        }

        setMessageErro(false);
        // Login();
        DatasUser();
    }

    // function Login() {
    //     instance.post('/login/client', {
    //         email
    //     })
    //     .then(response => response.data)
    //     .then(respost => {
    //         if(respost.error) {
    //             return setMessageAPI(respost.message);
    //         }    

    //         return DatasUser(respost);
    //     });
    // }
    
    function DatasUser() {
        setMessageAPI('');
        navigate(`/new-password/client/${email}`);
    }

    return (
        <Container>
            <div className='center--store'>
                <div className='reset--password--client__container'>

                    <div className="reset--password--client__header">
                        <Link to='/'>loja/<span>dev.com</span></Link>
                    </div>
                    
                    <h1>Digite seu email</h1>
                    
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

                        { messageErro && <p id='message--erro'>Digite seu email</p>  }
                        { !messageAPI == ''  && <p id='message--erro'>{ messageAPI }</p>  }

                        <input type='submit' value='Próximo passo' />

                    </form>
                </div>
            </div>
        </Container>
    )
}
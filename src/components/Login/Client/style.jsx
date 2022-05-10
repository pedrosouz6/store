import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const {
    background_primary,
    background_second,
    background_thirdy,
    transition,
    textColor
} = Colors.light;

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: ${background_thirdy};

    display: flex;
    align-items: center;
    justify-content: center;

    .login--client__container {
        flex: 1 1 300px;
        max-width: 400px;
        height: auto;
    }

    .login--client__header a {
        display: block;
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 25px;
        color: ${textColor};
        text-decoration: none;
        cursor: pointer;

        &:hover span {
            color: ${background_primary};
        }
    }

    .login--client__login {
        width: 100%;

        h1 {
            font-size: 25px;
            text-align: center;
            margin-bottom: 1rem;
        }
    }

    form {
        padding: 30px 25px;
        border-radius: 10px;
        background-color: ${background_second};

        i {
            display: block;
            font-size: 88px;
            text-align: center;
            color: ${background_primary};
        }
    
        input {
            width: 100%;
            height: 40px;
    
            background-color: white;
            color: #333;
    
            padding: 0 10px;
            margin-bottom: 1.5rem;
            border-radius: 5px;
            letter-spacing: .3px;
    
            outline: none;
            border: none;

            transition: ${transition};

            &:focus {
                border: 2px solid ${background_primary};
            }
            
            &:last-child {
                margin-bottom: 0;
            }
        }

        input[type='submit'] {
            background-color: ${background_primary};
            color: ${background_thirdy};
            font-size: 11pt;
            letter-spacing: .3px;
            
            cursor: pointer;

            &:hover {
                opacity: .8;
            }
        }
    }   

    #message--erro {
        margin-bottom: 1.5rem;
        text-align: center;
    }
`
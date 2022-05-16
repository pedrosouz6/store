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
    .reset--password--client__container {
        width: 100%;
        height: 100vh;
        background-color: ${background_thirdy};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .reset--password--client__header a {
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

    h1 {
        font-size: 25px;

        text-align: center;
        margin-bottom: 1rem;
    }

    form {
        flex: 0 1 200px;
        max-width: 400px;
        width: 100%;
        padding: 30px 25px;
        border-radius: 10px;
        background-color: ${background_second};

        a {
            display: block;
            text-align: center;
            color: ${textColor};
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

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
            border: 2px solid white;

            transition: ${transition};

            &:focus {
                border: 2px solid ${background_primary};
            }
            
            &:last-child {
                margin-bottom: 0;
            }
        }

        .email {
            width: 100%;
            height: 40px;
            padding: 0 10px;
            background-color: white;
            border-radius: 5px;
            margin-bottom: 1.5rem;

            p {
                line-height: 40px;
            }
        }

        .password {
            width: 100%;
            height: 40px;
            margin-bottom: 1.5rem;

            position: relative;

            input {
                padding-right: 40px;
                position: absolute;
                left: 0;
                top: 0;
            }

            i {
                cursor: pointer;
                font-size: 13pt;
                position: absolute;
                top: 50%;
                transform: translateY(-40%);
                right: 10px;
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
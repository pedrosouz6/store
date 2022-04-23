import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    textColor,
    errorColor,
    transition
} = Colors.light;

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 9999;

    background-color: rgba(0, 0, 0, .1);

    .popup--delete--product__container {
        position: fixed;
        top: 50%;
        left: 50%;
        
        transform: translate(-50%, -50%);
        
        width: 320px;
        height: auto;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, .3);
        border-radius: 5px;

        z-index: 10000;

        header {
            border-radius: 5px 5px 0 0;
            padding: 6px;
            background-color: red;
            
            display: flex;
            justify-content: space-between;
            align-items: center;

            h4 {
                color: white;
                font-weight: 400;
                letter-spacing: .3px;
            }

            i {
                cursor: pointer;
                font-size: 14pt;
                padding-top: 5px;
                color: white;
                transition: ${transition};

                &:hover {
                    opacity: .8;
                }
            }
        }
    
        article {
            padding: 15px 10px;
        }

        footer {
            border-top: 1px solid silver;
            display: flex;
            justify-content: end;
            gap: 1rem;
            padding: 10px;

            button {
                height: 30px;
                width: 70px;
                border: none;
                border-radius: 3px;
                letter-spacing: .3px;
                font-weight: 500;
                cursor: pointer;
                transition: ${transition};
            }
            
            #cancele {
                background-color: #e4e4e4;
                color: ${textColor};
            }
            
            #delete {
                color: white;
                background-color: ${errorColor};
            }

            #cancele:hover,
            #delete:hover {
                opacity: .8;
            }
        }
    }

`
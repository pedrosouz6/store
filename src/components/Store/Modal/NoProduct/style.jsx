import styled from 'styled-components';

import { Colors } from '../../../../styles/Default/index';

const {
    background_primary,
    transition
} = Colors.light;

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, .3);

    .store--modal__container {
        flex: 1 1 250px;
        max-width: 450px;

        background-color: white;

        padding: 20px 15px;
        border-radius: 2px;
    }   

    .store--modal__header h3 {
        text-align: center;
        font-weight: 500;
        letter-spacing: .3px;
    }
    
    .store--modal__content {
        margin: 1.5rem 0;
    }

    .store--modal__footer {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        button {
            width: 150px;
            height: 35px;
            border-radius: 25px;

            background-color: #268f37;
            color: white;

            letter-spacing: .3px;
            font-size: 11pt;
            font-weight: 500;

            cursor: pointer;
            border: none;
            outline: none;

            transition: ${transition};

            &:hover {
                opacity: .8;
            }
        }
    }
`
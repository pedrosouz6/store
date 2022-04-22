import styled from 'styled-components';

import { Colors } from '../../styles/Default';

const {
    successColor,
    errorColor,
    background_second
} = Colors.light;

export const Container = styled.div `
    .popup {
        width: 200px;
        height: auto;
        background-color: ${successColor};

        position: absolute;
        top: 10px;
        right: 10px;
    
        padding: 7px;
        border-radius: 5px;

        z-index: 1000;
        opacity: 0;

        animation: popup 4s ease-in-out;

    }

    p {
        letter-spacing: .3px;
        font-size: 11pt;
        color: white;
    }

    @keyframes popup {
        20% {
            opacity: 1;
            right: 40px;
            top: 55px;
        }

        80% {
            opacity: 1;
            right: 40px;
            top: 55px;
        }
    }
`

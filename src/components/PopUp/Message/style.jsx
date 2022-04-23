import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    successColor,
    errorColor,
} = Colors.light;

export const Container = styled.div `
    .popup {
        width: 200px;
        height: auto;
        
        position: absolute;
        top: 10px;
        right: 10px;
        
        padding: 7px;
        border-radius: 5px;
        
        z-index: 1000;
        opacity: 0;
        
        animation: popup 4s ease-in-out;
    }
    
    .success {
        background-color: ${successColor};
    }

    .error {
        background-color: ${errorColor};
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

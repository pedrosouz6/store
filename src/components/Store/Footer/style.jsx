import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    background_primary
} = Colors.light;

export const Container = styled.div `
    background-color: #dddddd;
    width: 100%;
    
    footer {
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`
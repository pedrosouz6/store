import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    background_primary
} = Colors.light;

export const Container = styled.form `
    width: 100%;
    height: 37px;
    position: relative;

    input {
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0; 
        
        border-radius: 2px;
        padding: 0 30px 0 5px;
        border: none;
    }

    i {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-40%);
        font-size: 15px;
    }
`
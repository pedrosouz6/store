import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    background_second
} = Colors.light;

export const Container = styled.div `
    select {
        width: 170px;
        height: 35px;
        padding: 0 5px;
        border-radius: 3px;
        border: none;
        outline: none;
        background-color: ${background_second};

        option {
            background-color: white;
        }
    }
`
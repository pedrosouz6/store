import styled from 'styled-components';

import { Colors } from '../../../../../styles/Default/index';

const {
    textColor,
    transition
} = Colors.light

export const Container = styled.div `
    display: flex;
    align-items: center;
    height: 36px;
    gap: 1rem;

    .search--product {
        height: 100%;
    }

    input,
    select {
        height: 100%;
        padding: 0 5px;
        border-radius: 3px;
        border: 1px solid #666;
        color: ${textColor};
        letter-spacing: .3px;
        transition: ${transition};
    }

    input:focus, 
    select:focus {
        border-color: ${textColor};
    }
`
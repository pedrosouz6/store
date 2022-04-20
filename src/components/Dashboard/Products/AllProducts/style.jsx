import styled from 'styled-components';

import { Colors } from '../../../../styles/Default/index';

const {
    background_second,
} = Colors.light

export const Container = styled.div `
    width: 100%;
    height: auto;
    padding-bottom: 2rem;
    
    .dashboard--all--products__container {
        border-top: 1px solid ${background_second};
        padding-top: 2rem;
    }

    .dashboard--all--products__title__search {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        align-items: center;
        
        h2 {
            font-size: 16pt;
        }

    }
`
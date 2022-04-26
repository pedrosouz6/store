import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    background_primary
} = Colors.light;   

export const Container = styled.main `
    margin-top: 2rem;

    .store--all--products__title__filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;

        h1 {
            font-size: 26px;
            font-weight: 500;
        }
    }

    .store--all--products__container__cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;

        .store--all--products__cards {
            flex: 1 1 250px;
            max-width: 290px;
            height: 340px;
            background-color: #0088ff;
        }
    }
`
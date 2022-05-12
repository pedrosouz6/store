import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const {
    background_second,
    errorColor
} = Colors.light;

export const Container = styled.div `
    .store--cart__container {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }

    #message--cart {
        font-size: 20px;
    }

    .store--cart__products {
        flex: 1 1 350px;
        max-width: 100%;

        h1 {
            font-size: 28px;
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: .5rem;
        }
    }

    .store--cart__products__cards {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        margin-top: 1rem;
    }

    .store--cart__card {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        background-color: ${background_second};
        border-radius: 8px;
    }

    .store--cart__content {
        padding: 1rem;
        flex: 1 1 270px;
    }

    .store--cart__title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: .5rem;

        h3 {
            font-size: 20px;
            font-weight: 500;
        }

        button {
            background: none;
            outline: none;
            border: none;
            font-size: 16px;
            color: ${errorColor};
            cursor: pointer;
            padding: 2px;
        }
    }

    .store--cart__img {
        flex: 1 1 210px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: white;
        
        img {
            border-radius: 8px 0 0 8px;
            width: 210px;
            height: 100%;
        }
    }

    .store--cart__price {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-weight: 600;
        }

        select {
            width: 60px;
            padding: 8px;
            border-radius: 15px;
        }
    }
`
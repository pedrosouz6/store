import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const {
    background_primary,
    background_thirdy,
    transition
} = Colors.light;

export const Container = styled.div `
    width: 100%;

    .dashboard--products__add__products {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .dashboard--products__form__products {
        flex: 1 1 440px;
        max-width: 100%;

        h2 {
            margin-bottom: 1rem;
        }

        form {
            display: flex;
            flex-direction: column;

            .dashboard--products__two-items, 
            .dashboard--products__three-items {
                display: flex;
                gap: 1rem;
                margin-bottom: 1rem;

            }

            input, 
            textarea,
            select {
                flex: 1;
                padding: 8px 5px;
                border-radius: 3px;
                border: 1px solid ${background_primary};
                background-color: rgba(255, 255, 255, .7);
                color: #333;
                letter-spacing: .3px;
                transition: ${transition};
            }

            input:focus, 
            textarea:focus,
            select:focus {
                background-color: rgba(255, 255, 255, .8);
            }

            textarea {
                margin-top: 1rem;
                resize: none;
            }
        }
    }

    .dashboard--products__preview__product {
        flex: 1 1 300px;
        max-width: 310px;
        height: auto;

        h3 {
            padding: 0 8px;
            margin-bottom: 1rem;
        }

        .dashboard--products__card--preview {
            max-width: 290px;
            margin: 0 auto;
            background-color: white;
        }

        .dashboard--products__card__img {
            width: 100%;
            height: 280px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: silver;
            margin-bottom: .5rem;
        }

        .dashboard--products__card__content {
            padding: 0 10px;
        }

        .dashboard--products__card__price__product {
            margin: .5rem 0;
            font-size: 14pt;
        }

        .dashboard--products__card__btn {
            border-top: 1px solid green;
            padding: .5rem 0;
            display: flex;
            justify-content: end;

            button {
                border: none;
                background-color: ${background_primary};
                color: white;
                padding: 6px 15px;
                border-radius: 3px;
            }
        }
    }
`
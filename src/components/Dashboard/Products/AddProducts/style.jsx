import styled from 'styled-components';

import { Colors } from '../../../../styles/Default/index';

const {
    background_primary,
    transition,
    selected,
    textColor,
    errorColor
} = Colors.light;

export const Container = styled.div `
    width: 100%;

    .dashboard--products__add__products {
        display: flex;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
        padding-bottom: 2rem;
    }

    .dashboard--products__form__products {
        flex: 1 1 440px;
        max-width: 100%;

        h2 {
            margin-bottom: 1rem;
            font-size: 16pt;
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
                padding: 9px 5px;
                border-radius: 3px;
                border: 1px solid #666;
                color: ${textColor};
                letter-spacing: .3px;
                transition: ${transition};
            }

            input:focus, 
            textarea:focus,
            select:focus {
                border-color: ${textColor};
            }

            textarea {
                margin-top: 1rem;
                resize: none;
            }

            .dashboard--products__message__erro {
                margin-top: 1rem;
                text-align: center;
                color: ${errorColor};
            }

            .dashboard--products__button {
                width: 140px !important;
                display: flex;
                justify-content: end;
                margin-top: 1.3rem;

                input {
                    border: none;
                    background-color: ${background_primary};
                    color: white;
                    letter-spacing: .3px;
                    cursor: pointer;
                    transition: ${transition};

                    &:hover {
                        background-color: ${selected};
                    }
                }
            }
        }
    }
`
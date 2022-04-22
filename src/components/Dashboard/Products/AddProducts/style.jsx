import styled from 'styled-components';

import { Colors } from '../../../../styles/Default/index';

const {
    background_primary,
    transition,
    selected,
    background_thirdy,
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

    .dashboard--products__preview__product {
        flex: 1 1 270px;
        max-width: 270px;
        height: auto;

        h3 {
            margin-bottom: 1rem;
            font-size: 16pt;
        }

        .dashboard--products__card--preview {
            width: 100%;
            margin: 0 auto;
            background-color: rgb(240, 240, 240);
        }

        .dashboard--products__card__img {
            width: 100%;
            height: 235px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(205, 205, 205);
            margin-bottom: .5rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .dashboard--products__card__content {
            padding: 0 10px;
        }

        .dashboard--products__card__brand__product {
            font-size: 11pt;
            margin-bottom: .2rem;
        }

        .dashboard--products__card__price__product {
            margin: .8rem 0;
            font-size: 13pt;
        }

        .dashboard--products__card__btn {
            border-top: 1px solid ${background_thirdy};
            padding: .5rem 0;
            display: flex;
            justify-content: end;

            button {
                border: none;
                background-color: ${background_primary};
                color: white;
                padding: 6px 15px;
                border-radius: 3px;
                cursor: pointer;
            }
        }
    }
`
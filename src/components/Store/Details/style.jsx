import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const {
    background_primary,
    transition
} = Colors.light;

export const Container = styled.div `
    color: #333;

    .store--details__container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 1rem;
        gap: 2rem;
    }

    .store--details__img {
        flex: 1 1 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;

        img {
            max-width: 400px;
        }
    }

    .store--details__info {
        flex: 1 1 300px;
        max-width: 100%;
        
        .store--details__category h4 {
            margin-bottom: 1.5rem;
            font-weight: 400;
            font-size: 22px;
        }

        .store--details__name__product h3 {
            margin-bottom: .5rem;
            font-weight: 400;
            font-size: 28px;
        }

        .store--details__freight span {
            display: block;
            font-size: 13px;
            margin: 2rem 0;
        }

        .store--details__description {
            h4 {
                margin-bottom: .5rem;
                font-weight: 500;
            }
        }

        .store--details__button__add {
            margin-top: 4rem;
            width: 100%;
            display: flex;
            justify-content: center;

            button {
                width: 90%;
                height: 40px;
                background-color: ${background_primary};
                color: white;
                font-size: 11pt;

                border-radius: 25px;
                border: none;
                outline: none;
                cursor: pointer;
                transition: ${transition};

                &:hover {
                    opacity: .8;
                }
            }
        }
    }
`
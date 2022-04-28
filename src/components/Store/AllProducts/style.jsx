import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    background_primary,
    background_second,
    transition
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
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        
        .store--all--products__cards__content {
            padding: 10px;
        }

        .store--all--products__cards__content__brand p {
            font-size: 11pt;
            font-weight: 700;
            letter-spacing: .3px;
            margin-bottom: 5px;
        }

        .store--all--products__cards__content__name p {
            font-size: 12pt;
            letter-spacing: .3px;
            margin-bottom: 10px;
        }

        .store--all--products__cards__content__price {
            border-top: 1px solid black;

            p {
                font-size: 12pt;
                letter-spacing: .3px;
                margin: 10px 0;
            }
        }
        
        .store--all--products__cards__image {
            width: 100%;
            height: 280px;
            
            img {
                width: 100%;
                height: 100%;
            }
        }

        .store--all--products__cards {
            flex: 1 1 250px;
            border-radius: 0 0 5px 5px;
            max-width: 290px;
            height: auto;
            
            background-color: ${background_second};

            transition: ${transition};

            transform: scale(.93);

            cursor: pointer;

            &:hover {
                transform: scale(1);
                box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
            }
        }
    }
`
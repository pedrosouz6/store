import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    background_primary,
    background_second,
    transition
} = Colors.light;   

export const Container = styled.main `

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
            border-top: 1px solid ${background_second};

            p {
                font-size: 12pt;
                letter-spacing: .3px;
                margin: 10px 0;
            }
        }
        
        .store--all--products__cards__image {
            padding: 10px;
            width: 100%;
            height: 280px;
            
            img {
                width: 100%;
                height: 100%;
            }
        }

        .store--all--products__cards {
            flex: 1 1 250px;
            border-radius: 5px;
            max-width: 290px;
            height: auto;
            

            transition: ${transition};

            transform: scale(.93);

            cursor: pointer;

            &:hover {
                transform: scale(1);
                box-shadow: 1px 1px 8px rgba(0, 0, 0, .1);
            }

            &:hover .store--all--products__cards__button__add button {
                transform: translateY(0px);
                height: 35px;
                opacity: .8;
                visibility: visible;
            }
        }

        
    }

`
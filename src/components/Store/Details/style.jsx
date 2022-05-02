import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

export const Container = styled.div `
color: #333;
    .store--details__container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .store--details__img {
        flex: 1 1 300px;
        max-width: 100%;

        img {
            width: 100%;
        }
    }

    .store--details__info {
        position: relative;
        flex: 1 1 300px;
        max-width: 100%;
        
        .store--details__category h4 {
            margin-bottom: 1.5rem;
            font-weight: 400;
            font-size: 20px;
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
            }
        }

        .store--details__button__add {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;

            button {
                width: 100%;
                height: 40px;
            }
        }
    }
`
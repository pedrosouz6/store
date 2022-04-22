import styled from 'styled-components';

import { Colors } from '../../../../styles/Default/index';

const {
    background_primary,
    background_thirdy
} = Colors.light;

export const Container = styled.article `
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
`
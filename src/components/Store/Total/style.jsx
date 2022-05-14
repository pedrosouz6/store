import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    background_second,
    background_primary,
    transition
} = Colors.light;

export const Container = styled.div `
    flex: 1 1 350px;
    max-width: 380px;
    height: 290px;
    background-color: ${background_second};
    border-radius: 5px;
    padding: 1rem;

    h2 {
        margin-bottom: 2rem;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
    }

    .store--total__total__products {
        display: flex;
        align-content: center;
        justify-content: space-between;
        margin-bottom: 1.3rem;
    }

    .store--total__total__delivery {
        display: flex;
        align-content: center;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    .store--total__total__delivery.none {
        color: silver;
    }

    .store--total__total__final {
        display: flex;
        align-content: center;
        justify-content: space-between;
        border-top: 2px solid white;
        padding-top: 10px;
    }

    .store--total__button__buy {
        margin-top: 2rem;
        width: 100%;
        height: 40px;

        button {
            width: 100%;
            height: 100%;
            background-color: ${background_primary};
            color: white;

            border: none;
            outline: none;
            border-radius: 25px;
            font-size: 11pt;
            letter-spacing: .3px;
            cursor: pointer;
            transition: ${transition};

            &:hover {
                opacity: .8;
            }
        }
    }
`
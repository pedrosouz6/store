import styled from 'styled-components';

import { Colors } from '../../../../styles/Default';

const {
    background_primary,
    background_second,

} = Colors.light;   

export const Container = styled.article `
    width: 100%;
    flex: 1 1 320px;

    .dashboard--sales--cards__container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-bottom: 1rem;
    }

    .dashboard--sales--cards__cards {
        position: relative;

        flex: 1 1 200px;
        max-width: 306px;
        height: 100px;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);

        padding: 10px 15px;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        &::before {
            content: '';

            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);

            width: 5px;
            border-radius: 0 10px 10px 0;
            height: 80px;
            background-color: ${background_primary};
        }

        p {
            font-size: 20pt;
            margin-bottom: 5px;
            color: ${background_primary};
            font-weight: 500;
        }

        span {

        }
    }
`
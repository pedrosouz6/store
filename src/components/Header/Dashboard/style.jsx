import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const {
    background_primary,
    background_second,
    background_thirdy
} = Colors.light;

export const Header = styled.header `
    width: 100%;
    height: 55px;
    background-color: ${background_primary};
    border-left: 2px solid ${background_thirdy};
    padding: 0 20px;
    margin-bottom: 1.5rem;

    .header--dashboard__container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header--dashboard__user {
        display: flex;
        align-items: center;
        gap: .4rem;

        span {
            color: ${background_thirdy};

        }

        i {
            color: ${background_thirdy};
        }

        .img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: ${background_thirdy};
        }
    }
    
    h1 {
        color: ${background_thirdy};
        letter-spacing: .3px;
        font-size: 16pt;
    }
`
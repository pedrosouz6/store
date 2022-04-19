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
    background-color: ${background_second};
    padding: 0 20px;

    h1 {
        font-size: 16pt;
    }
`
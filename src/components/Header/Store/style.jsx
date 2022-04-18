import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const { 
    background_primary
} = Colors.light;

export const Header = styled.header `
    width: 100%;
    height: 70px;
    background-color: ${background_primary};
`
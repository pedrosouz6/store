import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const {
    background_primary,
    transition
} = Colors.light

export const Aside = styled.aside `
    min-height: 100vh;
    max-height: auto;

    background-color: ${background_primary};
    
    transition: ${transition};

`

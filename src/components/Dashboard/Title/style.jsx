import styled from 'styled-components';

import { Colors } from '../../../styles/Default';

const {
    textColor
} = Colors.light;

export const Title = styled.h1 `
    font-size: 22px;
    font-weight: 600;
    letter-spacing: .3px;
    color: ${textColor};
    margin-bottom: 1rem;
`
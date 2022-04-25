import styled from 'styled-components';

import { Colors } from '../../../../styles/Default';

const {
    background_primary
} = Colors.light;   

export const Container = styled.article `
    width: 100%;
    flex: 1 1 320px;

    .dashboard--sales__graphics {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .dashboard--sales__graphic {
            flex: 1 1 300px;
            max-width: 630px;
        }        
    }

`
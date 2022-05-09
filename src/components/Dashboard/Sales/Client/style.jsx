import styled from 'styled-components';

import { Colors } from '../../../../styles/Default';

const {
    background_second
} = Colors.light;

export const Container = styled.div `

    .dashboard--sales--client__container {
        padding-top: 1rem;
        border-top: 1px solid ${background_second};

        h2 {
            margin-bottom: 1rem
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10rem;

        thead tr {
            background-color: ${background_second};
            
            td {
                text-align: center;
                padding: 12px 0;
            }
        }

        td img {
            margin: auto;
            width: 90px;
        }

        tbody td {
            padding: 10px 7px;
        }

        tr:nth-child(even) {
            background-color: ${background_second};
        }

        .date__purchase {
            text-align: center;
        }

        .imagem_td {
            text-align: center;
            width: 170px;
        }
    }
`
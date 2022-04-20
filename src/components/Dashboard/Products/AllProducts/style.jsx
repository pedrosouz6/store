import styled from 'styled-components';

import { Colors } from '../../../../styles/Default/index';

const {
    background_second
} = Colors.light

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    
    .dashboard--all--products__container {
        border-top: 1px solid white;
        padding-top: 2rem;
    }

    h2 {
        margin-bottom: 1rem;
    }

    table {
        border-collapse: collapse;

        tr:nth-child(even) {
            background-color: ${background_second};
        }

        .td__name {
            width: 130px;
        }

        .td__category {
            width: 110px;
        }

        .td__price {
            width: 100px;
        }

        .td__amount {
            width: 70px;
            text-align: center;
        }

        .td__status {
            width: 100px;
            text-align: center;
        }

        .td__image {
            width: 120px;
        }

        .td__actions {
            width: 140px;
        }

        thead td {
            text-align: center;
            background-color: ${background_second};
            padding: 10px 0;
        }
        
        td {
            padding: 5px 7px;

            img {
                max-width: 100%;
            }
    
        }
    }

`
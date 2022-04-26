import styled from 'styled-components';

import { Colors } from '../../../../../styles/Default/index';

const {
    background_second,
    errorColor,
    transition,
    successColor
} = Colors.light;

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    #nothing--products {
        width: 100%;
        display: block;
        padding: 8px;
        text-align: center;
        margin-top: 1rem;
        background-color: ${background_second};
    }

    table {
        width: 100%;
        border-collapse: collapse;

        
        td {
            padding: 5px 7px;
    
            img {
                max-width: 100%;
            }
        }

        tr:nth-child(even) {
            background-color: ${background_second};
        }
    
        .td__name {
            width: 130px;
        }

        .td__gender {
            width: 130px;
        }
    
        .td__brand {
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
            text-align: center;
    
            i {
                padding: 3px;
                margin: 0 7px;
                cursor: pointer;
                transition: ${transition};
            }
    
            .remove__item {
                font-size: 14pt;
            }
            
            .remove__item:hover {
                color: ${errorColor};
            }
    
            .edit_item {
                font-size: 15pt;
            }
    
            .edit_item:hover {
                color: ${successColor};
            }
            
        }
    
        thead td {
            text-align: center;
            background-color: ${background_second};
            padding: 10px 0;
        }
        
    }
`
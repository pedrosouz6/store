import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const {
    background_primary,
    background_second,
    background_thirdy,
    transition,
    selected
} = Colors.light

export const Aside = styled.aside `
    flex: 1 1 150px;
    max-width: ${props => props.closeAside ? '55px' : '200px'};
    min-height: 100vh;
    max-height: auto;

    background-color: ${background_primary};
    
    transition: ${transition};
    
    .aside--dashboard__header {
        width: 100%;
        height: 55px;
        
        display: flex;
        align-items: center;
        justify-content: end;

        margin-bottom: 1rem;
        padding: 0 10px;

        i {
            font-size: 22pt;
            padding: 5px 5px 0 10px;
            color: ${background_thirdy};
            cursor: pointer;
        }
    }

    nav ul li {
        list-style: none;

        a.active {
            color: ${background_primary};
            background-color: white;
        }
        
        a {
            width: 100%;
            height: 46px;
            color: white;

            display: flex;
            align-items: center;
            gap: .8rem;

            padding: 0 15px;
            text-decoration: none;
            transition: ${transition};
            
            border-radius: 25px 0 0 25px;
            
            &:hover {
                color: ${background_primary};
                background-color: white;
            }

            span {
                font-size: 12pt;
                letter-spacing: .5px;
            }

            span.removeNames {
                display: none;
            }

            i {
                font-size: 16pt;
                padding-top: 5px;
            }
            
        }
    }

`

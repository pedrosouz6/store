import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const {
    background_primary,
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
        gap: .8rem;

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
        
        a {
            width: 100%;
            height: 46px;
            background-color: ${background_primary};
            color: ${background_thirdy};

            display: flex;
            align-items: center;
            gap: .8rem;

            padding: 0 15px;
            text-decoration: none;
            transition: ${transition};

            &:hover {
                background-color: ${selected};
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

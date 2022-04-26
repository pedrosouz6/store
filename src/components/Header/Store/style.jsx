import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const { 
    background_primary
} = Colors.light;

export const Header = styled.header `
    width: 100%;
    background-color: ${background_primary};
    
    .header--store__top {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav ul {
            display: flex;
            align-items: center;
            gap: 1.5rem;

            li {
                list-style: none;

                a {
                    text-decoration: none;
                    color: black;
                    
                    i {
                        font-size: 22px;
                    }
                }
            }
        }
    }

    .header--store__bottom  {
        width: 100%;
    }
    
    .header--store__bottom nav ul {
        height: 50px;
        list-style: none;

        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            color: white;
        }
    }
`
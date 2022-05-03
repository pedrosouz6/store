import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const { 
    background_primary,
    background_second
} = Colors.light;

export const Header = styled.header `
    width: 100%;
    background-color: ${background_second};
    margin-bottom: 2rem;
    
    .header--store__top {
        width: 100%;
        height: 80px;
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
        margin-top: 1rem;
        height: 50px;
        list-style: none;

        display: flex;
        align-items: center;
        justify-content: space-between;

        li a {
            text-decoration: none;
            color: black;
            padding: 5px 0 2px 0;
        }
        
        li .active {
            border-bottom: 2px solid white;
        }
    }
`
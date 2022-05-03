import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const { 
    background_primary,
    background_second,
    errorColor
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

                button {
                    background: none;
                    position: relative;
                    padding: 0 15px 0 10px;
                    height: 35px;
                    border: none;
                    outline: none;
                    cursor: pointer;

                    i {
                        padding-top: 4px;
                        font-size: 22px;
                        color: #333;
                    }
                    

                    span {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        position: absolute;
                        bottom: 0;
                        right: 0;

                        font-size: 8pt;
                        letter-spacing: .3px;

                        background-color: #da3a3a;
                        color: white;
                    }
                }

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
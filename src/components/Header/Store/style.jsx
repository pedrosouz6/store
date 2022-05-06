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

            #amount__products {
                button {
                    position: relative;
                    height: 35px;
                    background: none;
                    padding: 0 12px; 
                    border: none;
                    outline: none;
                    cursor: pointer;

                }

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

    #menu__responsive {
        button {
            display: none;
            padding: 6px 2px 0 2px;
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
        }

        i {
            font-size: 22px;
        }
    }

    .header--store__bottom  {
        width: 100%;
        height: 50px;

        nav {
            height: 100%;
        }
    }

    .header--store__bottom nav ul {
        width: 100%;
        height: 100%;
        margin-top: 1rem;
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

    @media (max-width: 700px) {
        #menu__responsive {
            button {
                display: block;
                padding: 6px 2px 0 2px;
                background: none;
                border: none;
                outline: none;
                cursor: pointer;
            }
        }

        .header--store__bottom {
        }

        .header--store__bottom nav ul {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 9999999;
            background-color: red;
            width: 200px;
            height: 100vh;
            list-style: none;
            margin-top: 0;

            display: flex;
            align-items: center;
            flex-direction: column;
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
    }
`
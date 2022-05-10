import styled from 'styled-components';

import { Colors } from '../../../styles/Default/index';

const { 
    background_primary,
    background_second,
    transition
} = Colors.light;

export const Header = styled.header `
    width: 100%;
    background-color: ${background_second};
    margin-bottom: 2rem;
    
    .header--store__top {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: center;

        .header--store__logo a {
            text-decoration: none;
            font-size: 24px;
            color: #333;
            transition: ${transition};

            &:hover span {
                color: ${background_primary};
            }
        }

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

            #search {
                width: 250px;
            }

            li {
                list-style: none;
                position: relative;
                z-index: 9999;

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
        display: none;
        
        button {
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

        #search {
            display: none;
        }

        li a {
            text-decoration: none;
            color: black;
            padding: 5px 0 2px 0;

            transition: ease-in-out .1s;

            &:hover {
                border-bottom: 2px solid ${background_primary};
            }
        }
        
        li .active {
            border-bottom: 2px solid ${background_primary};
        }
    }

    @media (max-width: 700px) {
        #menu__responsive {
            display: block;

            button {
                padding: 6px 2px 0 2px;
                background: none;
                border: none;
                outline: none;
                cursor: pointer;
                position: fixed;
                top: 21px;
                right: 10px;
                z-index: 99999;
            }
        }

        .header--store__top #search {
            display: none;
        }

        .header--store__bottom {
            width: 300px;
            height: 100vh;

            position: fixed;
            top: 0;
            right: -300px;

            background-color: ${background_second};
            
            padding: 0 1rem;
            opacity: 0;
            z-index: 999;

            transition: ${transition};
        }

        .header--store__bottom.active {
            opacity: 1;
            right: 0px;

            #search {
                width: 100%;
                display: block;
            }
        }

        .header--store__bottom nav ul {
            list-style: none;
            margin-top: 0;

            display: block;

            li:first-child {
                margin-top: 5rem;
            }

            li + li {
                margin-top: 1.5rem;
            }

            li a {
                display: block;
                text-decoration: none;
                color: black;
                padding: 5px 0 2px 0;
            }
        }
    }
`
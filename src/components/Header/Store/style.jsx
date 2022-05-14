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

            li {
                list-style: none;
                position: relative;
                z-index: 9999;

                a {
                    text-decoration: none;
                    color: black;
                    
                    i + i {
                        font-size: 22px;
                    }
                }
            }

            li {
                button {
                    position: relative;
                    height: 30px;
                    padding-top: 5px;
                    background: none;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    
                        i {
                        padding-top: 4px;
                        font-size: 22px;
                        color: #333;
                    }
                }
            }

            #amount button {
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
                    bottom: -3px;
                    right: -10px;

                    font-size: 8pt;
                    letter-spacing: .3px;

                    background-color: #da3a3a;
                    color: white;
                }
            }

            #search {
                width: 250px;
            }

            #header--store__name__user {
                display: flex;
                gap: 5px;

                span {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    transition: ${transition};

                    &:hover {
                        color: black;
                    }
                }

                button {
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    padding: 5px 15px;
                    background-color: ${background_primary};
                    border-radius: 25px;

                    position: absolute;
                    bottom: -40px;
                    right: 0;
                    color: white;
                    border: none;
                    cursor: pointer;

                    i {
                        padding-top: 3px;
                        color: white;
                        font-size: 12pt;
                    }
                }
            }
        }
    }

    #menu__responsive {
        display: none;
        
        button {
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
            width: 17px;

            button {
                position: absolute;
                top: -16px;
                right: -6px;
                padding: 6px 2px 0 2px;
                
                background: none;
                border: none;
                outline: none;
                cursor: pointer;
                z-index: 999;
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
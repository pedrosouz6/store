import { createGlobalStyle } from 'styled-components';

import { Colors } from './styles/Default/index'; 

const {
  background_thirdy
} = Colors.light;

export const GlobalStyles = createGlobalStyle `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    outline: none;
  }

  body {
    background-color: ${background_thirdy};
    color: #333;
  }
`
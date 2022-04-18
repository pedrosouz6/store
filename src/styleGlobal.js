import { createGlobalStyle } from 'styled-components';

import { Colors } from './styles/Default/index'; 

const {
  background_second
} = Colors.light;

export const GlobalStyles = createGlobalStyle `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${background_second};
  }
`
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    box-sizing: border-box;
    background-color: #333;
    color: #ddd;
    font-family: 'Orbitron', sans-serif;
 }

 body {
   font-size: 0.9rem;
 }

 .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
 }

`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: #0D2436;
        color: #FFFFFF;
        -webkit-font-smoothimg: antialiased;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: calc(10px + 1vmin);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
        border: none;
    }

    .App {
        text-align: center;
    }

    .App-logo {
        height: 4vmin;
        pointer-events: none;
    }

/*     .App-header {
        min-height: 6vh;
        display: flex;
        padding-left: 16px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        background-color: #009B86;
    } */

    @media screen and (max-width: 520px) {
        width: 100%;
    }
`;
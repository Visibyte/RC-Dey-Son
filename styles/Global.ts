import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        font-family: Georgia, Century, sans-serif;
    }

    body{
        background: ${({ theme }) => theme.colors.background};
    }
`;

export default Globals;

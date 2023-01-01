import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,body,#root{
    width:100%;
    height:100%;
    padding-bottom:100rem;
  }

  html{
    font-size:16px;
  }

  * {
    font-family: ${({ theme }) => theme.fonts.main} !important;
  }

  b,strong{
    font-weight:500
  }
`;

export default GlobalStyle;

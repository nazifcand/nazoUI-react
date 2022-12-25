import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,body,#root{
    width:100%;
    height:100%;
  }

  html{
    font-size:16px;
  }

  * {
  font-family: ${({ theme }) => theme.fonts.main} !important;
}
`;

export default GlobalStyle;

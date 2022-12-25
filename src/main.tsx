import ReactDOM from 'react-dom/client';
import App from './App';
import Theme from './Theme';
import ResetCSS from './Shared/reset';
import GlobalStyle from './Shared/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Theme>
    <ResetCSS />
    <GlobalStyle />
    <App />
  </Theme>
);

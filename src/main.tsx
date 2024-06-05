import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';
import './index.scss';
import { PhoneGlobalProvider } from './store/phoneStore/phoneContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PhoneGlobalProvider>
    <Root />
  </PhoneGlobalProvider>,
);

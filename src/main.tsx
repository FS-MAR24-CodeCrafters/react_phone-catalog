import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';
import './index.scss';
import { CartGlobalProvider } from './store/cartStore/cartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartGlobalProvider>
    <Root />
  </CartGlobalProvider>,
);

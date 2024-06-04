import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { BurgerMenu } from './components/BurgerMenu';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="menu" element={<BurgerMenu />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

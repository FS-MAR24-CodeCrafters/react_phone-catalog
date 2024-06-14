import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { BurgerMenu } from './components/BurgerMenu';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ItemCardPage } from './pages/ItemCardPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { NotFound } from './pages/NotFound';
import { ContactsPage } from './pages/ContactsPage';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="phones">
            <Route index element={<CatalogPage />} />
            <Route path=":id" element={<ItemCardPage />} />
          </Route>
          <Route path="tablets">
            <Route index element={<CatalogPage />} />
            <Route path=":id" element={<ItemCardPage />} />
          </Route>
          <Route path="accessories">
            <Route index element={<CatalogPage />} />
            <Route path=":id" element={<ItemCardPage />} />
          </Route>
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path='contacts' element={<ContactsPage />} />

          <Route path="menu" element={<BurgerMenu />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

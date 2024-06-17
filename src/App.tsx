import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
// import { ThemeState, useThemeLocalStorage } from './hooks/useThemeLocalStorage';

import './App.scss';
import { KEY } from './constants/key';
import { localStorageService } from './service/localStorageService';
import { ThemeState } from './hooks/useThemeLocalStorage';

const App = () => {
  const { getItem } = localStorageService<ThemeState>(KEY.theme);

  const theme = getItem() || {};

  if ('dark' in theme) {
    document.body.classList.add('dark');
  }

  return (
    <div className="App">
      <Header />
      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;

import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { useThemeLocalStorage } from './hooks/useThemeLocalStorage';

import './App.scss';

const App = () => {
  const { isThemeDark } = useThemeLocalStorage();

  useEffect(() => {
    if (isThemeDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('white');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

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

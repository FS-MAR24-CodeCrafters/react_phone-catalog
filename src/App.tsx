import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { PhoneDispatchContext } from './store/phoneStore/phoneContext';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Arrow } from './ui/Arrow/Arrow';
import { ActionsName } from './types/phones/phoneActions';
import { arrowDir } from './types/arrowEnum';

import './App.scss';

const App = () => {
  const dispatch = useContext(PhoneDispatchContext);

  useEffect(() => {
    fetch('../public/api/phones.json')
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: ActionsName.initialAction, payload: res });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <Arrow dir={arrowDir.down} />
      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;

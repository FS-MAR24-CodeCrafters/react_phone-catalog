import { Outlet } from 'react-router-dom';
import './App.scss';
import { useContext, useEffect } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { PhoneDispatchContext } from './store/phoneStore/phoneContext';
import { ActionsName } from './types/phones/phoneActions';

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
      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;

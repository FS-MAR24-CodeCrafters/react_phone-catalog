import { Outlet } from 'react-router-dom';
import './App.scss';
import { useContext, useEffect } from 'react';
import { Header } from './layout/Header';
import { Arrow } from './ui/Arrow/Arrow';
import { arrowDir } from './types/arrowEnum';
import { PhoneDispatchContext } from './store/phoneStore/phoneContext';
import { ActionsName } from './types/phones/phoneActions';
import { ProductCard } from './components/ProductCard/ProductCard';

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
      <ProductCard />
      <Arrow dir={arrowDir.down} />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default App;

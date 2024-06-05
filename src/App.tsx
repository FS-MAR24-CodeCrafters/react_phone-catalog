import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './layout/Header';
import { ProductCard } from './components/ProductCard/ProductCard';
import { CartItem } from './components/CartItem';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductCard />
      <br />
      <CartItem />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default App;

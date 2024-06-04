import { Outlet } from 'react-router-dom';
import './App.scss';
import { BurgerMenu } from './components/BurgerMenu';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Header } from './layout/Header';

const App = () => {
  return (
    <div className="App">
      <h1
        className="Person VeryHugeClassName"
        id="Person"
        style={{ margin: '0' }}
      >
        Product Catalog
      </h1>
      <BurgerMenu />
      <ProductCard />
      <Header />

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default App;

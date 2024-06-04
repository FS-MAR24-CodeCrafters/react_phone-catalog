import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './layout/Header';
import { ProductCard } from './components/ProductCard/ProductCard';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductCard />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default App;

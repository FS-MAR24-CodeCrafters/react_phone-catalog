import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './layout/Header';
import { Button } from './ui/Buttons';
import { ProductCard } from './components/ProductCard/ProductCard';

const label = 'Button works';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductCard />
      <main className="container">
        <Outlet />
        <Button label={label} />
      </main>
    </div>
  );
};

export default App;

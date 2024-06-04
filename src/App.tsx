import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './layout/Header';
import { Button } from './ui/buttons';

const label = 'Button works';

const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="container">
        <Outlet />
        <Button label={label} />
      </main>
    </div>
  );
};

export default App;

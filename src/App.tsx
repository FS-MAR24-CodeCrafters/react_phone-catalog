import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './layout/Header';

const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default App;

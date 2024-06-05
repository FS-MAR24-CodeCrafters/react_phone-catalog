import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

const App = () => {
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

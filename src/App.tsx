import './App.scss';
import { BurgerMenu } from './components/BurgerMenu';

function App() {
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
    </div>
  );
}

export default App;

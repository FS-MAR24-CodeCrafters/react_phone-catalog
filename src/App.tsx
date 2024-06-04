import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './layout/Header';
import { Button } from './ui/buttons';
// import { Dropdown } from './ui/buttons/Dropdown';

// const items = [
//   { id: 1, label: 'Item 1', value: 'item1' },
//   { id: 2, label: 'Item 2', value: 'item2' },
//   { id: 3, label: 'Item 3', value: 'item3' },
// ];
const label = 'Button works';

const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="container">
        <Outlet />
        <Button label={label} />
        {/* <Dropdown items={items} /> */}
      </main>
    </div>
  );
};

export default App;

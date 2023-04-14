import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { useState } from 'react';
function App() {

  const [data, setData] = useState([
    {
      id: 1,
      checked: false,
      item: 'Item 1',
    },

    {
      id: 2,
      checked: false,
      item: 'Item 2',
    },

    {
      id: 3,
      checked: false,
      item: 'Item 3',
    },
  ]);

    const handleCheck = (id) => {
      const items = data.map((el) =>
        el.id === id ? { ...el, checked: !el.checked } : el
      );
      setData(items);
      localStorage.setItem('items', JSON.stringify(items));
    };

    const handleDelete = (id) => {
      const items = data.filter((el) => el.id !== id);
      setData(items);
    };


  return (
    <div className="App">
      <Header />
      <Content data={data} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={data.length} />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/header/Header';
import AddItem from './components/addItem/AddItem';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { useState } from 'react';
function App() {
  const [addItem, setAddItem] = useState('');
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

  const setAndSaveItems = (lists) => {
    setData(lists);
    localStorage.setItem('items', JSON.stringify(lists));
  };

  const newItem = (item) => {
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    item = {
      id,
      checked: false,
      item,
    };

    const items = [ ...data, item ];
    setAndSaveItems(items);
  };

  const handleCheck = (id) => {
    const items = data.map((el) =>
      el.id === id ? { ...el, checked: !el.checked } : el
    );
    setAndSaveItems(items);
  };

  const handleDelete = (id) => {
    const items = data.filter((el) => el.id !== id);
    setAndSaveItems(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!AddItem) return;
    newItem(addItem);
    setAddItem('');
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        addItem={addItem}
        setAddItem={setAddItem}
        handleSubmit={handleSubmit}
      />
      <Content
        data={data}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={data.length} />
    </div>
  );
}

export default App;

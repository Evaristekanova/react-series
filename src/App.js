import './App.css';
import Header from './components/header/Header';
import SearchItem from './components/searchItem/SearchItem';
import AddItem from './components/addItem/AddItem';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { useState } from 'react';
function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('items')));
  const [addItem, setAddItem] = useState('');
  const [search, setSearch] = useState('');

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

    const items = [...data, item];
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
    if (!addItem) return;
    newItem(addItem);
    setAddItem('');
    console.log(addItem);
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        addItem={addItem}
        setAddItem={setAddItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        data={data.filter(item=>((item.item).toLowerCase()).includes(search))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={data.length} />
    </div>
  );
}

export default App;

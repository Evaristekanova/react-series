import './App.css';
import Header from './components/header/Header';
import SearchItem from './components/searchItem/SearchItem';
import AddItem from './components/addItem/AddItem';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import apiRequest from './utils/apiRequest';
import { useState, useEffect } from 'react';
function App() {
  const API_URL = 'http://localhost:3500/items';
  const [data, setData] = useState([]);
  const [addItem, setAddItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const getItems = await fetch(API_URL);
        if (!getItems.ok) throw Error('Did not recieve expected response');
        const items = await getItems.json();
        setData(items);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const newItem = async (item) => {
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    item = {
      id,
      checked: false,
      item,
    };

    const items = [...data, item];
    setData(items);
    const postOptions = {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(item),
    };
    const response = await apiRequest(API_URL, postOptions);
    if (response) setFetchError(response);
  };

  const handleCheck = async (id) => {
    console.log(id);
    const items = data.map((el) =>
      el.id === id ? { ...el, checked: !el.checked } : el
    );
    setData(items);

    const newItem = items.find((el) => el.id === id);
    const updateOptions = {
      method: 'put',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: newItem.id,
        checked: newItem.checked,
        item:newItem.item
      }),
    };

    const url = `${API_URL}/${id}`;
    console.log(url);
    const response = await apiRequest(url, updateOptions);
    if (response) setFetchError(response);
  };

  const handleDelete = (id) => {
    const items = data.filter((el) => el.id !== id);
    setData(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addItem) return;
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
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p style={{ color: 'skyblue' }}>{'loading items ...'}</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            data={data.filter((item) =>
              item.item.toLowerCase().includes(search)
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={data.length} />
    </div>
  );
}

export default App;

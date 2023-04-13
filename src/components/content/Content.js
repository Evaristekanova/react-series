import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const Content = () => {
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

  const handleChech = (id) => {
    const items = data.map((el) =>
      el.id === id ? { ...el, checked: !el.checked } : el
    );
    setData(items);
    localStorage.setItem('items', JSON.stringify(items));
  };

  return (
    <main>
      {data.map((el) => (
        <li className="item" key={el.id}>
          <input
            type="checkbox"
            onChange={() => handleChech(el.id)}
            checked={el.checked}
          />
          <label
            style={el.checked ? { textDecoration: 'line-through' } : null}
            onDoubleClick={() => handleChech(el.id)}
          >
            {el.item}
          </label>
          <FaTrashAlt role="button" tabIndex={0} />
        </li>
      ))}
    </main>
  );
};

export default Content;

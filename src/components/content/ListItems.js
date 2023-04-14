import { FaTrashAlt } from 'react-icons/fa';
export const ListItems = ({ data, handleCheck, handleDelete }) => {
  return (
    <ul>
      {data.map((el) => (
        <li className="item" key={el.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(el.id)}
            checked={el.checked}
          />
          <label
            style={el.checked ? { textDecoration: 'line-through' } : null}
            onDoubleClick={() => handleCheck(el.id)}
          >
            {el.item}
          </label>
          <FaTrashAlt
            onClick={() => handleDelete(el.id)}
            role="button"
            tabIndex={0}
          />
        </li>
      ))}
    </ul>
  );
};

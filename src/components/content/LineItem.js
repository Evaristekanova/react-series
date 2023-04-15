import { FaTrashAlt } from 'react-icons/fa';
export const LineItem = ({ el, handleCheck, handleDelete }) => {
  return (
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
  );
};

export default LineItem;

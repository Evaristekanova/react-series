import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ addItem, setAddItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add item"
        required
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;

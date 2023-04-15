import { FaPlus } from 'react-icons/fa';

const AddItem = ({ AddItem, setAddItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        placeholder="Add item"
        required
        value={AddItem}
        onChange={(e) => setAddItem(e.target.value)}
      />
      <button type="submit" aria-label="add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;

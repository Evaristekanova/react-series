import { LineItem } from './LineItem';

export const ListItems = ({ data, handleCheck, handleDelete }) => {
  return (
    <ul>
      {data.map((el) => (
        <LineItem
          el={el}
          handleCheck={() => handleCheck(el.id)}
          handleDelete={() => handleDelete(el.id)}
        />
      ))}
    </ul>
  );
};

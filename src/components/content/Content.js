import { ListItems } from './ListItems';

const Content = ({ data, handleCheck, handleDelete }) => {
  return (
    <>
      {data.length ? (
        <ListItems
          data={data}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: 48 }}>No items here</p>
      )}
    </>
  );
};

export default Content;

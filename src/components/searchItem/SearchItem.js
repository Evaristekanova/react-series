const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault}>
      <label htmlFor="search">Search</label>
          <input
        placeholder="Search Item"
        id="search"
        role="searchbox"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;

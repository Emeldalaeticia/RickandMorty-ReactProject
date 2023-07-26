import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {
  const searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className="w-40 sm:w-auto p-2 rounded-lg border border-blue-500 shadow focus:outline-none"
        type="text"
      />
      <button
        onClick={searchBtn}
        className="shadow btn btn-primary text-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

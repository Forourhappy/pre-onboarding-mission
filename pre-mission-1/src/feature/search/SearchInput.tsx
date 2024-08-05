import { useSearch } from "./useSearch.ts";
import { useState } from "react";
import { SearchSelect } from "./SearchSelect.tsx";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { filteredList } = useSearch(search);
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button>검색</button>
      </div>
      <SearchSelect list={filteredList} />
    </>
  );
};

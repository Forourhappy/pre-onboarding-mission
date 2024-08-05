import { useSearch } from "./useSearch.ts";
import { KeyboardEventHandler, useState } from "react";
import { SearchSelect } from "./SearchSelect.tsx";
import styles from "./searchInput.module.css";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [focusIndex, setFocusIndex] = useState(-1);
  const { filteredList } = useSearch(search);

  const handleSearchKeyDown: KeyboardEventHandler = (e) => {
    const maxIndex = filteredList.length - 1;
    switch (e.key) {
      case "ArrowUp": {
        setFocusIndex((prev) => (prev <= -1 ? maxIndex : prev - 1));
        break;
      }
      case "ArrowDown": {
        setFocusIndex((prev) => (prev >= maxIndex ? -1 : prev + 1));
        break;
      }
    }
  };

  return (
    <div className={styles.searchInput}>
      <div>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearchKeyDown}
        />
        <button>검색</button>
      </div>
      <SearchSelect list={filteredList} focusIndex={focusIndex} />
    </div>
  );
};

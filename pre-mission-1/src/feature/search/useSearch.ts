import { useEffect, useState } from "react";
import { dummy } from "./api/data";
import { useDebounce } from "../../utils/useDebounce.ts";

export type SearchData = {
  description: string;
  key: string;
  type: string;
};

const getSearchData = async (filter: string = "") => {
  return (dummy as SearchData[]).filter((data) =>
    data.key.toLowerCase().includes(filter.toLowerCase()),
  );
};

export const useSearch = (input: string) => {
  const [filteredList, setFilteredList] = useState<SearchData[]>([]);
  const debouncedInput = useDebounce(input);

  useEffect(() => {
    let ignore = false;
    (async () => {
      const data = await getSearchData(debouncedInput);
      if (!ignore) {
        setFilteredList(data);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [debouncedInput]);

  return { filteredList };
};

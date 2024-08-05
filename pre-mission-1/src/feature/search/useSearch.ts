import { useEffect, useState } from "react";
import { dummy } from "./api/data";
import { useDebounce } from "../../utils/useDebounce.ts";

export type SearchData = {
  description: string;
  key: string;
  type: string;
};

const getSearchData = async (filter: string = "") => {
  const data = dummy as SearchData[];
  if (!filter) {
    return data;
  }
  return data.map((search) => {
    if (search.description.toLowerCase().includes(filter.toLowerCase())) {
      return {
        ...search,
        description: search.description.replace(
          new RegExp(filter, "i"),
          (match) => `<b>${match}</b>`,
        ),
      };
    }
    return search;
  });
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

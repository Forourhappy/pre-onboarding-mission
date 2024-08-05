import { SearchData } from "./useSearch.ts";

type Props = {
  list: SearchData[];
};
export const SearchSelect = ({ list }: Props) => {
  return (
    <div>
      {list.map((data) => (
        <div key={data.key}>
          <span>{data.key}</span>
          <span>{data.description}</span>
        </div>
      ))}
    </div>
  );
};
